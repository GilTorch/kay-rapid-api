import { Context } from "../utils";

export const AuthPayLoad = {
  user: ({ user: { id } }, args, context: Context, info) => {
    return context.db.query.user({ where: { id } }, info);
  }
};
