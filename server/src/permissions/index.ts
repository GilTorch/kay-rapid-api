import { shield, and, not } from "graphql-shield";
import * as rules from "./rules";

//TODO permissions to be added
// export const middlepermission = shield({
//   Query: {
//     Houses: rules.isAuthenticated
//   }
// });

const myImiddleware = shield({
  Query: { 
    communes: rules.isAuthenticated
  },
  Mutation: {
    createHouse: rules.isStandard
  }
});

// const myschema = makeExecutableSchema({
//   typeDefs: "./src/schema.graphql",
//   resolvers
// });

export const mymiddlepermission = myImiddleware;
