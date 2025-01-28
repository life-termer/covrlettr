import { useState } from "react";
import CoverLetterControls from "./CoverLetterControls";
import CoverLetterTemplate from "./CoverLetterTemplate";
import { Margin, usePDF } from "react-to-pdf";

function CoverLetter({ form }) {
  const { name, surname, position } = form.getValues();
  const fileName = `${name && name + "-"}${surname && surname + "-"}${
    position && position + "-"
  }Cover-Letter`;
  const [fontFamily, setFontFamily] = useState("arial");
  const [fontSize, setFontSize] = useState("m");
  const [lineHeight, setLineHeight] = useState("m");
  const [mainColor, setMainColor] = useState("#000");
  const { toPDF, targetRef } = usePDF({
    method: "open",
    filename: fileName,
    page: { margin: Margin.MEDIUM },
  });

  return (
    <div>
      <CoverLetterControls
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        fontSize={fontSize}
        setFontSize={setFontSize}
        lineHeight={lineHeight}
        setLineHeight={setLineHeight}
        mainColor={mainColor}
        setMainColor={setMainColor}
        toPDF={toPDF}
        targetRef={targetRef}
        fileName={fileName}
      />
      <CoverLetterTemplate
        form={form}
        fontFamily={fontFamily}
        fontSize={fontSize}
        lineHeight={lineHeight}
        mainColor={mainColor}
        targetRef={targetRef}
      />
    </div>
  );
}

export default CoverLetter;
