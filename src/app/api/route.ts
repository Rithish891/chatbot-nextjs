import { ChatService } from "@/lib/chat-service";
import { NextRequest, NextResponse } from "next/server";

let chatServiceInstance: ChatService;

function getChatServiceInstance() {
  if (!chatServiceInstance) {
    chatServiceInstance = new ChatService();
  }
  return chatServiceInstance;
}

export async function POST(request: NextRequest) {
  const chatService = getChatServiceInstance();

  try {
    const { message, reset } = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    if (reset) {
      chatService.clearHistory();
      return NextResponse.json({ message: "Chat reset successfully" });
    }

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await chatService.sendMessage(message as string);
    return NextResponse.json({ response });
  } catch (error) {
    console.error("API error:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to process your message.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
