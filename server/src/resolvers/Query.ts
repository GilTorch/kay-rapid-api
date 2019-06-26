import { Context } from "../utils";
import * as jwt from "jsonwebtoken";

export const Query = {
  countries(parent, {}, context: Context, info) {
    return context.db.query.countries({}, info);
  },
  states(parent, {}, context: Context, info) {
    return context.db.query.states({}, info);
  },
  cities(parent, {}, context: Context, info) {
    return context.db.query.cities({}, info);
  },
  communes(parent, {}, context: Context, info) {
    return context.db.query.communes({}, info);
  },
  getToken(parent, { id }, context: Context, info) {
    return jwt.sign(
      {
        userId: id
      },
      process.env.APP_SECRET
    );
  },
  Houses(parent, {}, context: Context, info) {
    return context.db.query.houses({}, info);
  },
  topCommunes(parent, { c }, context: Context, info) {
    return context.db.query.communes(
      {
        orderBy: "rank_DESC",
        first: c
      },
      info
    );
  }
};
