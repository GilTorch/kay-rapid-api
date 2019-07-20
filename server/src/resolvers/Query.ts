import { Context,getUserId,hasPermission } from "../utils";
import * as jwt from "jsonwebtoken";

export const Query = {
  countries(parent, {}, context: Context) {
    const userId = getUserId(context);
    if(!userId){
      throw new Error('You must be logged in')
    } 
    hasPermission(context.prisma.$exists.user({ id: userId}),['ADMIN','LANDLORD','PERMISSIONUPDATE','ITEMCREATE'])
    return context.prisma.countries({});
  },
  states(parent, {}, context: Context) {
    return context.prisma.states({});
  },
  cities(parent, {}, context: Context) {
    return context.prisma.cities({});
  },
  communes(parent, {}, context: Context) {
    return context.prisma.communes({});
  },
  getToken(parent, { id }, context: Context) {
    return jwt.sign(
      {
        userId: id
      },
      process.env.APP_SECRET
    );
  },
  Houses(parent, {}, context: Context) {
    return context.prisma.houses({});
  },
  topCommunes(parent, { c }, context: Context) {
    return context.prisma.communes(
      {
        orderBy: "rank_DESC",
        first: c
      }
    );
  },
  async houseFavoritedByUser(parent, args,context: Context) {
    const userId = getUserId(context);
    if (!userId) {
      throw new Error('you must be signed in!');
    }
    return context.prisma.houseFavoriteds(
      {
        where: {
          user: { id: userId },
        },
      }
    );
},


  
  // me(parent, args, context:Context){
  //   if (!getUserId()) {
      
  //   }
  // }
};
