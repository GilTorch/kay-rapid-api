import { GraphQLServer } from "graphql-yoga";
import { prisma } from './generated/prisma-client';
import { resolvers } from "./resolvers"; 


//require("now-env");
// if (NODE_ENV !== "production") {
require('dotenv').config({ path: '.env' });
//   require('now-env')
// }

const PRISMA_ENDPOINT="https://us1.prisma.sh/peterson-jean-48f374/api-lakayou/api-lakayou"
const PRISMA_SECRET="prismaDbdev123"
const APP_SECRET="prismaDbdev123"
//const { dotenv } = require('dotenv').config()

console.log(PRISMA_ENDPOINT)
console.log(APP_SECRET)
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers, 
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
  //     origin: FRONTEND_URL
  //   }
  // },
  () => console.log("Server is running on http://localhost:4000")
);
//export default server

