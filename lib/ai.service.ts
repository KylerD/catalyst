import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";

export class AIService {
  async doSomething(): Promise<any> {
    const prompt = `Do something please`;

    const result = await generateObject({
      model: openai("gpt-4o-mini"),
      prompt: prompt,
      schema: z.object({
        something: z.string(),
      }),
    });

    return result.object.something;
  }
}

export const aiService = new AIService();
