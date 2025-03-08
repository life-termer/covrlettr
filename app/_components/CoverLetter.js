import { useRef } from "react";
import CoverLetterControls from "./CoverLetterControls";
import TemplateLayout from "./templates/TemplateLayout";
import VerticalAdd from "./ads/VerticalAdd";

function CoverLetter({ watchFields, response, isLoading }) {
  const { name, surname, position } = watchFields;
  const fileName = `${name && name + "-"}${surname && surname + "-"}${
    position && position + "-"
  }Cover-Letter`;
  const targetRef = useRef();

  return (
    <div className="h-full">
      <CoverLetterControls targetRef={targetRef} fileName={fileName} />

      <div className="flex gap-5">
        <TemplateLayout
          watchFields={watchFields}
          targetRef={targetRef}
          response={response}
          isLoading={isLoading}
        />
        <VerticalAdd />
      </div>
    </div>
  );
}

export default CoverLetter;
