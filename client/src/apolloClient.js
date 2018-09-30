
import { ApolloClient,ApolloLink } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from 'apollo-link-state';

const cache= new InMemoryCache();
const defaultState={
    userAuthInfo:{
        __typename:'UserAuthInfo',
        userObject:null
    }
}

const stateLink = withClientState({
    cache,
    defaults:defaultState,
    resolvers:{
        Mutation :{
            __typename:"UserAuthInfo",
            writeUserInfoToCache:(_,userAuthInfo,{cache})=>{
                console.log("Cache got it:"+JSON.stringify(userAuthInfo));
            }
        }
    }
})

const client = new ApolloClient({
  link:ApolloLink.from([
    stateLink,
    new HttpLink({
        uri: "https://graphql-boilerplate-rmmlkxogec.now.sh/"
    })
  ]),
  cache
});

export default client;