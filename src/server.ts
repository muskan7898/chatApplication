interface Company {
  id: string; // Primary Key
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}


interface Conversation{
  id : string;
  companyId : string; // fk to company
  userId : string; // fk to user
  status : string;
  createdat : Date;
}

interface Message{
  id : string;
  conversationId : string; //fk to conversation
  senderId : string; // fk to user or company
  content : string;
  isRead : boolean;
  createdat : Date;
}
