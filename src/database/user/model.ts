import * as mongoose from "mongoose";
import {model} from "mongoose";

export interface User {
  name : string;
  email : string;
  createdat : Date;
  updatedat : Date;
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
  createdat: {
    type: Date,
    default: Date.now
  },
  updatedat: {
    type: Date,
    default: Date.now
  }
})

export const UserModel = model("user", UserSchema);
