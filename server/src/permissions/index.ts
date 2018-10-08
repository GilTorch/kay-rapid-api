import { shield, and, not } from "graphql-shield";
import * as rules from "./rules";
import { middleware } from "graphql-middleware";
import { resolvers, fragmentReplacements } from "../resolvers";
import { makeExecutableSchema } from "graphql-tools";

//TODO permissions to be added
// export const middlepermission = shield({
//   Query: {
//     Houses: rules.isAuthenticated
//   }
// });

const myImiddleware = shield({
  Query: {
    Houses: not(rules.isAuthenticated)
  }
});

// const myschema = makeExecutableSchema({
//   typeDefs: "./src/schema.graphql",
//   resolvers
// });

export const mymiddlepermission = myImiddleware;
