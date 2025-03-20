import { useRef } from "react";
import CoverLetterControls from "./CoverLetterControls";
import TemplateLayout from "./templates/TemplateLayout";
import VerticalAdd from "./ads/VerticalAdd";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { createCoverLetter } from "../_lib/actions";
import SaveButton from "./SaveButton";

function CoverLetter({
  watchFields,
  response,
  isLoading,
  coverLetter,
  isValid,
}) {
  const { name, surname, position } = watchFields;
  const fileName = `${name && name + "-"}${surname && surname + "-"}${
    position && position + "-"
  }Cover-Letter`;
  const targetRef = useRef();

  return (
    <div className="h-full flex flex-col">
      <CoverLetterControls targetRef={targetRef} fileName={fileName} />

      <div className="flex gap-5">
        <TemplateLayout
          watchFields={watchFields}
          targetRef={targetRef}
          response={response}
          isLoading={isLoading}
        />
      </div>

      <div className="w-full lg:w-1/4 mt-8 lg:mt-auto hidden">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild className="w-full">
              <SaveButton
                coverLetter={coverLetter}
                isValid={isValid}
                disabled
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Coming Soon</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

export default CoverLetter;
