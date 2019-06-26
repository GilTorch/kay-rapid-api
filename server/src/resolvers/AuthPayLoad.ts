import { Context } from "../utils";

export const AuthPayLoad = {
  // user: ({ user: { id } }, args, context: Context, info) => {
  //   return context.db.query.user({ where: { id } }, info);
  // }
  token: ({ token }, args, context: Context, info) => {
    return token;
  },
  user: ({ user: { id } }, args, context: Context, info) => {
    return context.db.query.user({ where: { id } }, info);
  }
};
