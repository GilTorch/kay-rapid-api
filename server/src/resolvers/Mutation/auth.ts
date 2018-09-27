import * as bcrypt from "bcryptjs";
import { AuthError, Context } from "../../utils";
import * as jwt from "jsonwebtoken";

//facebook user fields interface
interface FacebookUser {
  id: string;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  picture: string | null;
}

export const auth = {
  //signup mutation which return token and user
  async signup(parent, args, context: Context, info) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.db.mutation.createUser({
      data: { ...args, password }
    });

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    };
  },

  //loging mutation which returns token based on userid and user
  async login(parent, args, context: Context, info) {
    const user = await context.db.query.user({ where: { email: args.email } });
    const valid = await bcrypt.compare(
      args.password,
      user ? user.password : ""
    );

    if (!valid || !user || !user.status) {
      throw new AuthError();
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    };
  },

  //DisableUser mutation which returns  userid of disabled user,This user can't log back
  async disableUser(parent, args, context: Context, info) {
    const user = await context.db.mutation.updateUser({
      data: { status: false },
      where: { id: args.id }
    });
    if (!user) {
      throw new AuthError();
    }

    return {
      status: user.status === false ? true : false
    };
  },

  //authenticate with facebook received access token
  async authenticateFBUser(parent, args, context: Context, info) {
    //getting the facebook userdata
    const facebookUser = await getFacebookUser(args.facebookToken);

    //query for facebookuser
    const user = await context.db.query.user({
      where: { facebookUserId: facebookUser.id }
    });

    let userforToken = user;
    //check if user exits if not create new user
    if (!user) {
      const newUser = await context.db.mutation.createUser({
        data: {
          facebookUserId: facebookUser.id,
          email: facebookUser.email,
          firstName: facebookUser.first_name,
          lastName: facebookUser.last_name,
          profilePicture: {
            create: {
              url: facebookUser.picture
            }
          }
        }
      });
      userforToken = newUser;
    }
    return {
      token: jwt.sign({ userId: userforToken.id }, process.env.APP_SECRET),
      user
    };
  }
};

//getting the facebook user #inspired from graphcool implementation
async function getFacebookUser(facebookToken: string): Promise<FacebookUser> {
  const endpoint = `https://graph.facebook.com/v2.9/me?fields=id%2Cemail%2Cfirst_name%2Clast_name%2Cpicture&access_token=${facebookToken}`;
  const data = await fetch(endpoint).then(response => response.json());

  if (data.error) {
    throw new Error(JSON.stringify(data.error));
  }

  return {
    id: data.id,
    email: data.email,
    last_name: data.last_name,
    first_name: data.first_name,
    picture: data.picture.data.url
  };
}
