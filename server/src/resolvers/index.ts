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
    profilePicture(parent) {
      return prisma.user({ id: parent.id }).profilePicture();
    },
    bookings(parent) {
      return prisma.user({ id: parent.id }).bookings();
    },
    ownedHouses(parent) {
      return prisma.user({ id: parent.id }).ownedHouses();
    },
    permissions(parent) {
      return prisma.user({ id: parent.id }).permissions();
    }
  },
  Commune: {
    city(parent) {
      return prisma.commune({ id: parent.id }).city();
    }
  },
  House: {
    host(parent) {
      return prisma.house({ id: parent.id }).host();
    },
    rooms(parent) {
      return prisma.house({ id: parent.id }).rooms();
    },
    bookings(parent) {
      return prisma.house({ id: parent.id }).bookings();
    },
    pictures(parent) {
      return prisma.house({ id: parent.id }).pictures();
    },
    preview_image(parent) {
      return prisma.house({ id: parent.id }).preview_image();
    },
    favorites(parent) {
      return prisma.house({ id: parent.id }).favorites();
    },
    location(parent) {
      return prisma.house({ id: parent.id }).location();
    },
    pricing(parent) {
      return prisma.house({ id: parent.id }).pricing();
    }
  },
  HouseFavorited: {
    user(parent) {
      return prisma.houseFavorited({ id: parent.id }).user();
    },
    house(parent) {
      return prisma.houseFavorited({ id: parent.id }).house();
    }
  },
  Review: {
    user(parent) {
      return prisma.review({ id: parent.id }).user();
    }
  }
};
