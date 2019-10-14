import * as jwt from "jsonwebtoken";
import { Prisma } from "./generated/prisma-client";

//app secret from env file
const APP_SECRET = process.env.APP_SECRET //"prismaDbdev123" //

export {APP_SECRET};
//Prisma Datababe Layer db instance
export interface Context {
  prisma: Prisma;
  request: any;
}

//getting user id by verifying token and return userid
export function getUserId(context: Context) {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
      userId: string;
    };
    return userId;
  }

  throw new AuthError();
}

export function hasPermission(user, permissionsNeeded){
  const matchedPermissions = user.permissions.filter(
    userPermission => permissionsNeeded.includes(userPermission)
  )
  if(!matchedPermissions.length){
    throw  new Error("No sufficient permissions")
    
  }
}

export class AuthError extends Error {
  constructor() {
    super("Not authorized, authentication error");
  }
}

