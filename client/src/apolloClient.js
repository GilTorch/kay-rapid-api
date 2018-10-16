
import { ApolloClient,ApolloLink } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from 'apollo-link-state';
import gql from 'graphql-tag';

const cache= new InMemoryCache();
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
    defaults:defaultState,
    resolvers:{
        Mutation:{
            updateAuthInfo:(_,{ userAuthInfo },{cache})=>{
                console.log("Cache got it:"+JSON.stringify(userAuthInfo));
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
                
                cache.writeData({data});
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