import { RESUME_CONTEXT } from "@/data/resume-data";
import { model } from "./gemini";

export class ChatService {
  private conversationHistory: Array<{
    role: string;
    parts: Array<{ text: string }>;
  }> = [];

  constructor() {
    this.initializeHistory();
  }

  private initializeHistory(): void {
    this.conversationHistory = [
      {
        role: "user",
        parts: [{ text: RESUME_CONTEXT }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Understood. I will now answer questions as Rithish Jakkireddy, based on the resume provided. I'm ready for your questions.",
          },
        ],
      },
    ];
  }

  async sendMessage(userMessage: string): Promise<string> {
    try {
      this.conversationHistory.push({
        role: "user",
        parts: [{ text: userMessage }],
      });
      const chat = model.startChat({
        history: this.conversationHistory.slice(0, -1),
      });

      const result = await chat.sendMessage(userMessage);
      const responseText = result.response.text();

      this.conversationHistory.push({
        role: "model",
        parts: [{ text: responseText }],
      });

      return responseText;
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Unknown error from AI assistant";
      throw new Error(
        `Failed to get response from AI assistant: ${errorMessage}`
      );
    }
  }

  clearHistory(): void {
    this.initializeHistory();
  }
}
