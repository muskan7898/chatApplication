export interface ConversationPreviewItem {
  conversationId: string;
  name: string;
  previewMessage: string;
  date: Date;
  isNew: boolean;
  isResolved: boolean;
}
