import {model, Schema} from "mongoose";

export interface User {
  name : string;
  email : string;
  phoneNumber : string;
  createdAt : Date;
  updatedAt : Date;
}

interface MongoUser extends User, Document {}

const UserSchema = new Schema<MongoUser>({
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
  phoneNumber: {
    type: String,
    required: true,
    trim: true
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
