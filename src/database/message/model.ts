import mongoose from "mongoose";

interface Message{
  conversationId : string; //fk to conversation
  senderId : string; // fk to user or company
  content : string;
  isRead : boolean;
  createdat : Date;
}


interface MongoMessage extends Message, mongoose.Document{};

const MessageScheme = new mongoose.Schema<MongoMessage>({
  conversationId: {
    type: String,
    required: true,
    trim: true
  },
  senderId: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  isRead: {
    type: Boolean,
    default: false
  },
  createdat: {
    type: Date,
    default: Date.now
  }
})

export const MessageModel = mongoose.model("message", MessageScheme);