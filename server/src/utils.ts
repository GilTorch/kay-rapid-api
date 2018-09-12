import * as jwt from "jsonwebtoken";
import { Prisma } from "./generated/prisma";

//Prisma Datababe Layer db instance
export interface Context {
  db: Prisma;
  request: any;
}

//getting user id by verifying token and return userid
export function getUserId(context) {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(token, process.env.APP_SECRET!) as {
      userId: string;
    };
    return userId;
  }

  throw new AuthError();
}

export class AuthError extends Error {
  constructor() {
    super("Not authorized");
  }
}
