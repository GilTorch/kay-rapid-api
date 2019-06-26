import { GraphQLServer } from "graphql-yoga";
import { importSchema } from "graphql-import";
import { Prisma } from "./generated/prisma";
import { resolvers, fragmentReplacements } from "./resolvers";
import { mymiddlepermission } from "./permissions";
//require("now-env");
// if (process.env.NODE_ENV !== "production") {
require("dotenv").config({ path: ".env" });
//   require('now-env')
// }

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  middlewares: [mymiddlepermission],
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({
    ...req,
    db: new Prisma({
      fragmentReplacements,
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API
      debug: true // log all GraphQL queries & mutations sent to the Prisma API
      // secret: process.env.PRISMA_SECRET // only needed if specified in `database/prisma.yml`
    })
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
