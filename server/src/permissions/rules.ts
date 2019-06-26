import { rule, and, or, not } from "graphql-shield";
import { Context, getUserId } from "../utils";

//check if logged in user is admin
export const isAdmin = rule()(async (parent, args, context: Context, info) => {
  const userId = getUserId(context);
  return await context.db.exists.User({ id: userId, role: "ADMIN" });
});

//check if logged in user is landlord
export const isLandlord = rule()(
  async (parent, args, context: Context, info) => {
    const userId = getUserId(context);
    return await context.db.exists.User({ id: userId, role: "LANDLORD" });
  }
);

//check if logged in user is Standard
export const isStandard = rule()(
  async (parent, args, context: Context, info) => {
    const userId = getUserId(context);
    return await context.db.exists.User({ id: userId, role: "STANDARD" });
  }
);

export const isAuthenticated = or(isAdmin, isLandlord, isStandard);
