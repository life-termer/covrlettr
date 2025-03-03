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
  // 5) Error handling
  // if (error) throw new Error("Can not generate response");
  console.log(completion.choices[0].message);

  const data = completion.choices[0].message.content;
  const data2 =
    '<div style="font-family: Arial, sans-serif; line-height: 1.6;">\n' +
    "\n" +
    `<p style="font-weight: bold; margin-bottom: 10px;">I am thrilled to apply for the Front End Developer position at Google, where innovation and user-centric design come together to create transformative digital experiences. With over three years of experience in web development, specializing in React.js and modern frameworks, I am eager to contribute to your mission of organizing the world's information and making it universally accessible and useful.</p>\n` +
    "\n" +
    '<p style="margin-bottom: 10px;">In my previous roles, I have honed my skills in:</p>\n' +
    '<ul style="margin-bottom: 10px; padding-left: 20px;">\n' +
    '    <li style="margin-bottom: 5px;">Developing responsive web applications using React.js, JavaScript, HTML, and CSS.</li>\n' +
    '    <li style="margin-bottom: 5px;">Creating visually appealing interfaces in collaboration with designers, utilizing tools like MUI and Figma.</li>\n' +
    '    <li style="margin-bottom: 5px;">Implementing high-quality frontend solutions with a strong focus on enhancing user interactions and API usability.</li>\n' +
    "</ul>\n" +
    "\n" +
    `<p style="margin-bottom: 10px;">My strong problem-solving skills have enabled me to tackle complex challenges and deliver solutions that meet user needs effectively. As I dive deeper into the evolving Web3 landscape, I have gained experience with tools such as Viem and Wagmi, as well as a solid understanding of Ethereum Improvement Proposals (EIPs). This knowledge allows me to contribute to innovative projects that align with Google's commitment to pushing the boundaries of technology.</p>\n` +
    "\n" +
    `<p style="margin-bottom: 10px;">I am particularly drawn to Google's dedication to open-source contributions and collaboration. My previous experiences include maintaining repositories and contributing to community-driven projects, which I believe aligns perfectly with your values. I am excited about the opportunity to work alongside talented engineers and contribute to groundbreaking projects that impact millions of users globally.</p>\n` +
    "\n" +
    '<p style="margin-bottom: 10px;">I would love the chance to discuss how my experience and enthusiasm for frontend development can contribute to Google’s vision. I am looking forward to the opportunity to explore this further in an interview.</p>\n' +
    "\n" +
    "</div>";

  //   const data = string.split("\n");
  //   console.log(completion.choices[0].message.content);

  return { data };
}
