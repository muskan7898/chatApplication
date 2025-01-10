import mongoose from "mongoose";

interface Company {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface MongoCompany extends Company, mongoose.Document {};

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

export const CompanyModel = mongoose.model("company", CompanySchema);
