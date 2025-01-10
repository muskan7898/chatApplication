import mongoose from "mongoose";

export interface CompanyUser {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface MongoCompany extends CompanyUser, mongoose.Document {};

const CompanySchema = new mongoose.Schema<MongoCompany>({
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
});

export const CompanyModel = mongoose.model("companyuser", CompanySchema);
