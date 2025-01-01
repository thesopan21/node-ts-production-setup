import { ObjectId } from "mongoose";

export interface EmailVerificationTokenModelDocument {
  woner: ObjectId;
  token: string;
  createdAt: Date;
}
