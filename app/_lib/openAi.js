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

  //   const completion = await openai.chat.completions.create({
  //     model: "gpt-4o-mini",
  //     messages: [
  //       {
  //         role: "developer",
  //         content:
  //           "You are an AI specialized in generating professional and personalized cover letters. Your goal is to craft a compelling letter based on the provided job details while maintaining a human-like, engaging, and industry-appropriate tone. Exclude header, salutation and signature.Format the output strictly in HTML. Add custom inline styles, only weight, spacing and bullet point if needed.",
  //       },
  //       {
  //         role: "user",
  //         content: prompt,
  //       },
  //     ],
  //     store: true,
  //     max_tokens: 500,
  //     temperature: 0.7,
  //   });
  // // 5) Error handling
  // // if (error) throw new Error("Can not generate response");
  // console.log(completion.choices[0].message);

  //   const data = completion.choices[0].message.content;
  const string =
    '<p style="font-weight: bold; margin-bottom: 10px;">I am excited to apply for the Front End Developer position at Google. With a solid foundation in React.js, JavaScript, HTML, and CSS, I am confident in my ability to contribute effectively to your innovative team.</p> <p style="margin-bottom: 10px;">Throughout my career, I have consistently leveraged modern frameworks to create dynamic, user-friendly applications. My experience includes:</p><li style="margin-bottom: 5px;">Developing responsive web applications that enhance user experience and engagement.</li><li style="margin-bottom: 5px;">Collaborating with cross-functional teams to deliver projects on time and within scope.</li><li style="margin-bottom: 5px;">Implementing best practices for code quality and performance optimization.</li></ul><p style="margin-bottom: 10px;">I am particularly drawn to Google’s commitment to innovation and user-centric design. I believe my proactive approach to problem-solving and passion for front-end development align perfectly with your team’s goals. I am eager to bring my expertise in crafting seamless user experiences to Google, where I can contribute to projects that impact millions of users globally.</p><p style="margin-bottom: 10px;">I would love the opportunity to discuss how my skills and experiences align with the needs of your team. Thank you for considering my application; I look forward to the possibility of an interview.</p> ';

  //   const data = string.split("\n");
  //   console.log(completion.choices[0].message.content);

  return { string };
}
