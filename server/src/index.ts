import { GraphQLServer } from "graphql-yoga";
import { prisma } from './generated/prisma-client';
import { resolvers } from "./resolvers";
import { mymiddlepermission } from "./permissions";
//require("now-env");
// if (process.env.NODE_ENV !== "production") {
// require('dotenv').config({ path: '.env' });
//   require('now-env')
// }

//const { dotenv } = require('dotenv').config()

console.log(process.env.PRISMA_ENDPOINT)
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  middlewares: [mymiddlepermission],
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({
    ...req,
    prisma
  })
});
server.start(
  //setting cross origin so that only frontend can access it
  // {
  //   cors: {
  //     credentials: true,
  //     origin: process.env.FRONTEND_URL
  //   }
  // },
  () => console.log("Server is running on http://localhost:4000")
);

