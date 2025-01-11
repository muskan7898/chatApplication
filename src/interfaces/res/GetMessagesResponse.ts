interface GetMessagesResponse {
  success: boolean;
  message: string;
  messages: {
    id: string;
    senderId: string;
    message: string;
    createdAt: string;
  }[];
}
