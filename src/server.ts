interface User{
  id : string;
  name : string;
  email : string;
  type : string; // 'admin' | 'customer'
  createdat : Date;
  updatedat : Date;
}

interface Company{
  id : string;
  name : string;
  email : string;
}

interface Conversation{
  id : string;
  companyId : string; // fk to company
  userId : string; // fk to user
  status : string; // 'open' | 'closed'
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