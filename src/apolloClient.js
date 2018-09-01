
import ApolloClient from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  uri: "https://graphql-boilerplate-xutqjutspf.now.sh/",
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

export default client;