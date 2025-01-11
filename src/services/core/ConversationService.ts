import {Service} from "typedi";
import {ConversationStatus} from "@src/database/conversation/model";

@Service()
export class ConversationService {

  async updateConversationStatus(conversationId: string, conversationStatus: ConversationStatus) {}
}
