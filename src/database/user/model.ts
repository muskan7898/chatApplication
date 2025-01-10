import * as mongoose from "mongoose";
import {model} from "mongoose";

export interface User {
  name : string;
  email : string;
  createdAt : Date;
  updatedAt : Date;
}

interface MongoUser extends User, mongoose.Document {}

const UserSchema = new mongoose.Schema<MongoUser>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

export const UserModel = model("user", UserSchema);
