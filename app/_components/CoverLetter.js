import { useState } from "react";
import CoverLetterControls from "./CoverLetterControls";
import CoverLetterTemplate from "./CoverLetterTemplate";
import { Margin, usePDF } from "react-to-pdf";
import Spinner from "./Spinner";
import SpinnerComment from "./SpinnerComment";
import { useMainContext } from "../_lib/mainContext";

function CoverLetter({ watchFields, response, isLoading }) {
  const { name, surname, position } = watchFields;
  const fileName = `${name && name + "-"}${surname && surname + "-"}${
    position && position + "-"
  }Cover-Letter`;
  const { fontFamily, setFontFamily } = useMainContext();
  const { fontSize, setFontSize } = useMainContext();
  const { lineHeight, setLineHeight } = useMainContext();
  const { mainColor, setMainColor } = useMainContext();
  const { toPDF, targetRef } = usePDF({
    method: "open",
    filename: fileName,
    page: { margin: Margin.MEDIUM },
  });

  return (
    <div className="h-full">
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
        watchFields={watchFields}
        fontFamily={fontFamily}
        fontSize={fontSize}
        lineHeight={lineHeight}
        mainColor={mainColor}
        targetRef={targetRef}
        response={response}
        isLoading={isLoading}
      />
    </div>
  );
}

export default CoverLetter;
