import { iUser } from "../interface";
import { model, models, Schema } from "mongoose";

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    Name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

const myUserModel = models.user || model<iUserData>("user", userModel);
export default myUserModel;
