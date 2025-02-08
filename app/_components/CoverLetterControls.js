import { LayoutPanelTop } from "lucide-react";
import { Button } from "./ui/button";
import FontsButton from "./FontsButton";
import FontSizeButton from "./FontSizeButton";
import LineHeightButton from "./LineHeightButton";
import ColorButton from "./ColorButton";
import ExportButton from "./ExportButton";
import TemplatesButton from "./TemplatesButton";

function CoverLetterControls(props) {
  return (
    <div className="flex gap-2 mb-4">
      <div className="flex-auto w-2/12 2xl:w-3/12">
        <TemplatesButton />
      </div>
      <div className="flex-auto w-8/12 2xl:w-6/12 flex justify-center gap-2">
        <FontsButton />

        <FontSizeButton />
        <LineHeightButton />
        <ColorButton />
      </div>
      <div className="flex-auto w-2/12 2xl:w-3/12">
        <ExportButton targetRef={props.targetRef} fileName={props.fileName} />
      </div>
    </div>
  );
}

export default CoverLetterControls;
