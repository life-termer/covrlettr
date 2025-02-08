import { useRef, useState } from "react";
import CoverLetterControls from "./CoverLetterControls";
import { Margin, usePDF } from "react-to-pdf";
import Spinner from "./Spinner";
import SpinnerComment from "./SpinnerComment";
import { useMainContext } from "../_lib/mainContext";
import BlankTemplate from "./BlankTemplate";

function CoverLetter({ watchFields, response, isLoading }) {
  const { name, surname, position } = watchFields;
  const fileName = `${name && name + "-"}${surname && surname + "-"}${
    position && position + "-"
  }Cover-Letter`;
  const targetRef = useRef();

  return (
    <div className="h-full">
      <CoverLetterControls targetRef={targetRef} fileName={fileName} />

      <BlankTemplate
        watchFields={watchFields}
        targetRef={targetRef}
        response={response}
        isLoading={isLoading}
      />
    </div>
  );
}

export default CoverLetter;
