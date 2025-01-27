import { useState } from "react";
import CoverLetterControls from "./CoverLetterControls";
import CoverLetterTemplate from "./CoverLetterTemplate";

function CoverLetter({ form }) {
  const [fontFamily, setFontFamily] = useState("arial");
  console.log(fontFamily);
  return (
    <div>
      <CoverLetterControls
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
      />
      <CoverLetterTemplate form={form} fontFamily={fontFamily} />
    </div>
  );
}

export default CoverLetter;
