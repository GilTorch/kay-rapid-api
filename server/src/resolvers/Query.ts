import { Context } from "../utils";
import * as jwt from "jsonwebtoken";

export const Query = {
  countries(parent, {}, context: Context) {
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
  }
};
