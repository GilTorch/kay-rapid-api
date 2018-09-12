import { extractFragmentReplacements } from "prisma-binding";
import { Query } from "./Query";
import { CustomMutation } from "./Mutation/CustomMutation";
import { auth } from "./Mutation/auth";
import { AuthPayLoad } from "./AuthPayload";

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...CustomMutation
  },
  AuthPayLoad
};

export const fragmentReplacements = extractFragmentReplacements(resolvers);
