import mongoose from "mongoose";

interface Conversation{
  companyId : string; // fk to company
  userId : string; // fk to user
  status : string;
  createdat : Date;
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
    required: true,
    trim: true
  },
  createdat: {
    type: Date,
    default: Date.now
  }
})

export const ConversationModel = mongoose.model("conversation", ConversationSchema);