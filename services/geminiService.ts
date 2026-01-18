import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { FULL_BIO_CONTEXT } from "../constants";

let client: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        console.error("API_KEY not found in environment");
        throw new Error("API Key missing");
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model', text: string }[]
): Promise<string> => {
  try {
    const ai = getClient();
    
    // Convert internal history format to SDK format if needed, 
    // but for a simple stateless chat or using systemInstruction, 
    // we can just use generateContent with system config.
    // For better context, we should ideally use ai.chats.create, but 
    // given the instructions to use models.generateContent for text primarily
    // unless chat is specifically required. 
    // Let's use generateContent with systemInstruction for the "Persona".

    // Construct a prompt that includes history for context window 
    // (simplified RAG-like approach for this specific constraint)
    const historyContext = history.map(h => `${h.role.toUpperCase()}: ${h.text}`).join('\n');
    
    const finalPrompt = `
    Current Conversation:
    ${historyContext}
    USER: ${message}
    MODEL:
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: finalPrompt,
      config: {
        systemInstruction: `You are an AI representation of Victor Valentine Romo. Use the following context to answer questions about his life, work, and philosophy. Maintain a professional, systems-oriented, slightly gritty but intellectual tone. Context: ${FULL_BIO_CONTEXT}`,
        temperature: 0.7,
      }
    });

    return response.text || "System offline. No response derived.";
  } catch (error) {
    console.error("Gemini Interaction Error:", error);
    return "Error: Connection to Neural Link failed. Please verify API Key availability.";
  }
};
