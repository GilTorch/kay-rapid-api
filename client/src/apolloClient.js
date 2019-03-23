
import { ApolloClient,ApolloLink } from "apollo-boost";
import { createHttpLink  } from "apollo-link-http";
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from 'apollo-link-state';
import { persistCache,CachePersistor } from 'apollo-cache-persist';
import gql from 'graphql-tag';

const cache= new InMemoryCache();


export const persistor = new CachePersistor({
    cache,
    storage: window.localStorage,
    debug: true,
  })

const defaultState={
    userAuthInfo:{
        __typename:'UserAuthInfo',
        id:null,
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
                    id
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

const httpLink=createHttpLink({
    uri: "https://lakayou-server-rwcvnozznd.now.sh/"
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  let cache = JSON.parse(window.localStorage.getItem('apollo-cache-persist'));
  let token=null
  if(cache){
    if(cache.hasOwnProperty("$ROOT_QUERY.userAuthInfo")){
     token=cache["$ROOT_QUERY.userAuthInfo"].token
    }
  }
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
    cache,
  link:ApolloLink.from([
    stateLink,
    // httpLink
    authLink.concat(httpLink)
  ])
});

export default client;