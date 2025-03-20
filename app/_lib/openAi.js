"use server";

import OpenAI from "openai";
import { promptString } from "./prompt";
import { auth } from "./auth";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateResponse(values) {
  // setTimeout(() => {}, 10000);
  // // 1) Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // // 3) Building prompt
  const prompt = promptString(values);

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "developer",
        content:
          "You are an AI specialized in generating professional and personalized cover letters. Your goal is to craft a compelling letter based on the provided job details while maintaining a human-like, engaging, and industry-appropriate tone. Exclude header, salutation and signature.Format the output strictly in HTML. Use only span tag with class block or tags ul and li for lists. Do not add any inline styles",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    store: true,
    max_tokens: 500,
    temperature: 0.7,
  });

  const data = completion.choices[0].message.content;
  console.log(data);
  return { data };
}
