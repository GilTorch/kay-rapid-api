import { Context } from "../utils";

export const AuthPayLoad = {
  // user: ({ user: { id } }, args, context: Context) => {
  //   return context.prisma.query.user({ where: { id } });
  // }
  token: ({ token }, args, context: Context) => {
    return token;
  },
  user: ({ user}, args, context: Context,info) => {
    return context.prisma.user({id : user.id});
  },
}
 
