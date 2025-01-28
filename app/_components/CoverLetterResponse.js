import { createElement, useRef, useState } from "react";
import { Pen, Pencil } from "lucide-react";

function CoverLetterResponse({ recipientName }) {
  const testResponse = `Dear Sir or Madam, I am excited to apply for the Front-End Developer position at [Company Name], as advertised on [Job Board/Company Website]. With three years of experience building responsive and user-friendly web applications, combined with my passion for creating seamless digital experiences, I am confident in my ability to contribute to your team. In my current role at [Current Company], I have successfully developed and maintained web applications that enhance user engagement and streamline workflows. For example, I led the redesign of [Project Name], which improved user satisfaction by 35% and reduced page load times by 40%. My expertise in JavaScript, React, and CSS has enabled me to deliver high-quality, scalable solutions that meet both user and business needs. Your job description highlights a focus on [specific requirement from job description, e.g., "optimizing front-end performance and collaborating in agile teams"]. I am particularly drawn to this aspect because of my experience in [related achievement, e.g., "optimizing a React-based dashboard to handle 50,000 daily active users while maintaining sub-second load times"]. Additionally, I thrive in collaborative environments, as evidenced by my contributions to cross-functional teams that consistently met tight deadlines without compromising quality. I am also proud of my educational foundation, having earned my [Degree Name] from [University Name in Slovenia], where I focused on [relevant coursework or projects, e.g., "UI/UX design and web development"]. This academic experience, combined with real-world application, has equipped me with a well-rounded perspective on user-centric design and technical implementation. I am enthusiastic about the opportunity to bring my skills and passion for innovation to [Company Name]. Your commitment to [specific company value, e.g., "delivering exceptional digital solutions"] resonates deeply with my professional values. I would welcome the chance to discuss how my experience and expertise align with your needs.`;
  const [response, setResponse] = useState(testResponse);
  const ref = useRef();

  const element = createElement("p", { className: "mb-3" }, response);
  const [responseElement, setResponseElement] = useState(ref.current);
  const onBlur = () => {
    setResponseElement(ref.current);
    console.log(ref.current.innerHTML.replace("<p><br></p>", "<br>"));
  };
  function escapeHtml(text) {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
  }

  return (
    <>
      <div
        ref={ref}
        onBlur={onBlur}
        contentEditable
        suppressContentEditableWarning={true}
        className="relative p-2 focus-visible:outline-2 focus-visible:outline-secondary-500"
      >
        {element}
        <Pencil className="absolute top-1 right-1 text-secondary-700" />
      </div>
    </>
  );
}

export default CoverLetterResponse;
