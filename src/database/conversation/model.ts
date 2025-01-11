import mongoose from "mongoose";

export enum ConversationStatus {
  RESOLVED = "RESOLVED",
  WAITING_ON_CUSTOMER = "WAITING_ON_CUSTOMER",
  WAITING_ON_INTERNAL_TEAM = "WAITING_ON_INTERNAL_TEAM"
}

export interface Conversation{
  companyId : string; // fk to company
  userId : string; // fk to user
  status : ConversationStatus;
  createdAt : Date;
}

interface MongoConversation extends Conversation, mongoose.Document{};

const ConversationSchema = new mongoose.Schema<MongoConversation>({
  companyId: {
    type: String,
    required: true,
    trim: true
  },
  userId: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ["RESOLVED", "WAITING_ON_CUSTOMER", "WAITING_ON_INTERNAL_TEAM"],
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const ConversationModel = mongoose.model("conversation", ConversationSchema);
