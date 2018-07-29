import { GraphQLServer } from "graphql-yoga";
import { importSchema } from "graphql-import";
import { Prisma } from "./generated/prisma";
import { resolvers, fragmentReplacements } from "./resolvers";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
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
server.start(() => console.log("Server is running on http://localhost:4000"));
