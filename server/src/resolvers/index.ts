import { Query } from "./Query";
import { CustomMutation } from "./Mutation/CustomMutation";
import { auth } from "./Mutation/auth";
import { AuthPayLoad } from "./AuthPayLoad";

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...CustomMutation
  },
  AuthPayLoad
};
