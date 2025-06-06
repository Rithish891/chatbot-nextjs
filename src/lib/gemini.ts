import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not set in environment variables");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction:
    "You are Rithish Jakkireddy. Respond in the first person (using 'I', 'my', 'me') based on the provided resume information. Answer questions as if you are Rithish, discussing your own professional background, skills, and experience. Do not mention that you are an AI. Be friendly and professional.",
  generationConfig: {
    temperature: 0.7,
    topP: 0.8,
    topK: 40,
    maxOutputTokens: 2048,
  },
});
