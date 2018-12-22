import gql from "graphql-tag";

// export const ACCOUNT_CREATION = gql`
//  mutation signup($email: String!,$password: String!,$firstName: String!, $lastName: String!, $phone1: String!,$profilePicture:String){
//   signup (email:$email,password:$password,firstName:$firstName,lastName:$lastName,phone1:$phone1,profilePicture:$profilePicture){
//     token
//     user{
//       id
//     }
//   }
// }
export const ACCOUNT_CREATION = gql`
mutation signup($email:String!,$password:String!,$firstName:String!,$lastName:String!,$phone1:String!,$profilePicture:String!){
  signup(email:$email,password:$password,firstName:$firstName,lastName:$lastName,phone1:$phone1,profilePicture:$profilePicture){
  token
  user{
    id
  }
  }
}
` 


export const AUTH_WITHOUT_SOCIAL_MEDIA=gql`
mutation($email:String!,$password:String!) {
  login(email:$email,password:$password) {
    token 
    user{
      id
      firstName
      lastName
      email
    }
  }
}
`

export const FB_AUTH = gql`
  mutation authenticateFBUser($facebookToken:String!) {
  authenticateFBUser(facebookToken:$facebookToken){
    token
    user{
      id
      firstName
      lastName
      email
      profilePicture{
        url
      }
    }
  }
}
`

export const HOUSE_CREATION=gql`
mutation {
  createHouse(
    age:10,
    basePrice:2000,
    currency:USD,
    communeId:"cjk5081nkqbic0b02estuemao",
    highestPrice:4000,
    maxGuests:8,lease:12,leaseType:YEARLY,
    numBedrooms:3,numBaths:2,lng:39,lat:140,address:"Fermathe 52, rue Puzot #2",
    numDiningrooms:1,
    numLivingrooms:1,
    electricity:true,
    electricity_frequency:OFTEN,
    water_tank:true,
    freeParkingOnPremises:true,
    water_pipe:true,
    income:10
  ){
    id,
    maxGuests,
    numBedrooms,
    numBaths
  }
}
`

/**
 * =-=-=-=-=-CLIENT SIDE QUERIES AND MUTATIONS=-=-=-
 */

export const WRITE_AUTH_INFO= gql`
mutation updateAuthInfo($userAuthInfo:Object!){
  updateAuthInfo(userAuthInfo:$userAuthInfo) @client{
    token
    email
    firstName
    lastName
    profilePicture
  }
}
`

export const READ_AUTH_INFO = gql`
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