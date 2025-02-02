export const promptString = ({
  position,
  experience,
  skills,
  achievements,
  description,
  recipientName,
  company,
  length,
  tone,
  website,
}) => {
  return `
    Generate a professional cover letter tailored to the following job application details: ${
      position && `Position Applied For: ${position}, `
    }${experience && `Work Experience Summary: ${experience}, `}${
    skills && `Key Skills: ${skills}, `
  }${achievements && `Notable Achievements: ${achievements}, `}${
    description && `Job Description: ${description}, `
  }${recipientName && `Recruiter's Name: ${recipientName}, `}${
    company && `Company Name: ${company}, `
  }${length && `Maximum Length: ${length} words, `}${
    tone && `Tone Preference: ${tone}. `
  }${
    website &&
    `Analyze company website ${website} to identify the company’s mission, values, recent projects, or commitments. Incorporate relevant details into the cover letter to demonstrate alignment between the applicant’s skills and experience with the company’s goals. `
  }Ensure the letter is engaging, well-structured, and aligned with industry standards. It should highlight the applicant’s strengths in relation to the job description while maintaining a natural, human-like tone. Conclude with a strong call to action expressing interest in an interview.`;
};
