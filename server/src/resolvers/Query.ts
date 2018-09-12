import { Context } from "../utils";

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
  }
};
