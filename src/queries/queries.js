import gql from "graphql-tag";

export const ACCOUNT_CREATION = gql`
 mutation signup($email: String!,$password: String!,$firstName: String!, $lastName: String!, $phone1: String!){
  signup (email:$email,password:$password,firstName:$firstName,lastName:$lastName,phone1:$phone1 ){
    token
    user{
      id
    }
  }
}

`;
