import * as bcrypt from "bcryptjs";
import { AuthError, Context, APP_SECRET } from "../../utils";
import * as jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import { promisify } from "util";
import { transporter, emailBody } from "../../mail";

//facebook user fields interface
interface FacebookUser {
  id: string;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  picture: string | null;
}

interface Status {
  message: string;
}

export const auth = {
  //signup mutation which return token and user
  async signup(parent, args, context: Context, info) {
    const password = await bcrypt.hash(args.password, 10);
    console.log(process.env.PROFILE_PICTURE_ID)
    let user = null;
    if (args.profilePicture) {
      user = await context.prisma.createUser( {
        ...args,
        password,
        profilePicture: {
          create: {
            url: args.profilePicture
          }
        },
        permissions:{
          set: ['STANDARD','ITEMCREATE']
        }
      }
    )
    } else {
      user = await context.prisma.createUser( {
        ...args,
        password,
        permissions:{
          set: ['STANDARD','ITEMCREATE']
        }
      }
    )
    }
  
    console.log(APP_SECRET)
    return {
      token: jwt.sign({ userId: user.id },process.env.APP_SECRET), //"prismaDbdev123"),
      user
    };
  },

  //loging mutation which returns token based on userid and user
  async login(parent, args, context: Context) {
    const user = await context.prisma.user({ email: args.email } );
    const valid = await bcrypt.compare(
      args.password,
      user ? user.password : ""
    );
    if (!user) {
      throw new Error(`no such user found for email ${args.email}`)
    }
    if (!valid) {
      throw new Error(`Incorrect password`)
    }
    if (!user.status) {
      throw new AuthError();
    }
    console.log(process.env.APP_SECRET)
    console.log(user)
    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    };
  },

  //DisableUser mutation which returns  userid of disabled user,This user can't log back
  async disableUser(parent, args, context: Context) {
    const user = await context.prisma.updateUser({
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
  async authenticateFBUser(parent, args, context: Context) {
    //getting the facebook userdata
    const facebookUser = await getFacebookUser(args.facebookToken);

    //query for facebookuser
    const user = await context.prisma.user( { facebookUserId: facebookUser.id }
    );

    let userforToken = user;
    //check if user exits if not create new user
    if (!user) {
      const newUser = await context.prisma.createUser({ 
          facebookUserId: facebookUser.id,
          email: facebookUser.email,
          firstName: facebookUser.first_name,
          lastName: facebookUser.last_name,
          profilePicture: {
            create: {
              url: facebookUser.picture
            }
          } 
      });
      userforToken = newUser;
    }
    return {
      token: jwt.sign({ userId: userforToken.id }, APP_SECRET),
      user
    };
  },

  //request a new password for the user
  async requestPWResetToken(parent, args, context: Context) {
    //check for existing user
    const user = await context.prisma.user({ email: args.email });
    if (!user) {
      throw new Error(`No such user found with email ${args.email}`);
    }

    //set a reset token and expiry date for that user

    const randomBytesWithPromise = promisify(randomBytes);
    const resetToken = (await randomBytesWithPromise(20)).toString("hex");
    const resetTokenExpiry = "" + Date.now() + 3600000;
    const res = await context.prisma.updateUser({
      where: { email: args.email },
      data: {
        resetToken,
        resetTokenExpiry
      }
    });

    //TODO email the reset token to user email
    const mailRes = await transporter.sendMail({
      from: "petersonjean45@gmail.com", // sender address
      to: user.email, // list of receivers
      subject: "Lakayou Password Reset", // Subject line
      html: emailBody(
        `Please follow this following link to reset your lakayou password.  <a href="https://localhost:3000/authentication/sign-in-without-social-media/forgot-password-redirection?resetToken=${resetToken}">click here</a><br/>Link is valid for 1hour`
      ) // html body
    });

    return { message: "Thanks for your request!" };

    // sendEmailResetToken(
    //   "petersonjean45@gmail.com",
    //   args.email,
    //   "test subject",
    //   `test body with resettoken:  ${args.resetToken}`
    // );
  },
  async resetPassword(parent, args, context: Context) {
    //check if passwords match
    if (args.password !== args.passwordConfirm) {
      throw new Error("Provided passwords doesn't match!");
    }
    //check for token validity

    //checking user and verify token epriration
    const [user] = await context.prisma.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: (Date.now() - 3600000).toString()
      }
    });
    if (!user) {
      throw new Error("Token invalid or expired");
    }

    //hasking new password
    const password = await bcrypt.hash(args.password, 10);

    //save new password
    const updatedUser = await context.prisma.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null
      }
    });

    //generate authentication token
    console.log(`user id updated:${updatedUser.id}`);
    const token = jwt.sign({ userId: updatedUser.id }, APP_SECRET);
    //return updated user
    return {
      token,
      user: updatedUser
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
