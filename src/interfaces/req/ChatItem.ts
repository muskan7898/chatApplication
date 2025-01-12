export interface ChatItem {
  conversationId: string;
  ownerId: string;
  content: string;
  date: Date;
  isRead: boolean;
  isSender: boolean;
}
