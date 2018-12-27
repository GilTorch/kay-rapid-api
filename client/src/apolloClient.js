
import { ApolloClient,ApolloLink } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from 'apollo-link-state';
import { persistCache,CachePersistor } from 'apollo-cache-persist';
import gql from 'graphql-tag';

const cache= new InMemoryCache();


export const persistor = new CachePersistor({
    cache,
    storage: window.sessionStorage,
    debug: true,
  })

const defaultState={
    userAuthInfo:{
        __typename:'UserAuthInfo',
        token:null,
        email:null,
        firstName:null,
        lastName:null,
        profilePicture:null,
    }
}


const stateLink = withClientState({
    cache,
    resolvers:{
        Mutation:{
            updateAuthInfo:(_,{ userAuthInfo },{cache})=>{

                const myData = userAuthInfo;
             
                const query=gql`
                query{
                  userAuthInfo @client{
                    token
                    email
                    firstName
                    lastName
                    profilePicture
                  }
                }
              `
                const previousState= cache.readQuery({ query });

                const data = {
                    ...previousState,
                    userAuthInfo:{
                        ...previousState.userAuthInfo,
                        ...myData
                    }
                }

                cache.writeData({ data });
                return null;
            }
        }
    },
    defaults:defaultState
})


const client = new ApolloClient({
    cache,
  link:ApolloLink.from([
    stateLink,
    new HttpLink({
        uri: "https://lakayou-server-jsrmldifev.now.sh/"
    })
  ])
});

export default client;