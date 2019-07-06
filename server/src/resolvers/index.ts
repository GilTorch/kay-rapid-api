import { Query } from "./Query";
import { CustomMutation } from "./Mutation/CustomMutation";
import { auth } from "./Mutation/auth";
import { AuthPayLoad } from "./AuthPayLoad";
import { prisma } from "../generated/prisma-client";


export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...CustomMutation
  },
  AuthPayLoad,
  User: {
    profilePicture(parent){ 
      return prisma.user({id:parent.id}).profilePicture() 
      },
    bookings(parent){
      return prisma.user({id:parent.id}).bookings()
      },
    ownedHouses(parent){
      return prisma.user({id:parent.id}).ownedHouses()
    }
}
};
