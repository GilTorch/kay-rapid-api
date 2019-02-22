
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

const httpLink=createHttpLink({
    uri: "https://lakayou-server-rwcvnozznd.now.sh/"
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  let cache = JSON.parse(window.localStorage.getItem('apollo-cache-persist'));
  const token=cache["$ROOT_QUERY.userAuthInfo"].token

  // console.log(token)
//   token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanE4dTR3Zzc2bmMwMGE2MTFkeDNzbGV0IiwiaWF0IjoxNTQ2MDk1MzA3fQ.9MTRzkwKrUmuZywC5o0IPZTisHAfX9HQ1VQT-avK_5w";
  // console.log("TOKEN FROM cache:"+token)
  // return the headers to the context so httpLink can read them
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