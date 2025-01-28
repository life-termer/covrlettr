import {
  ALargeSmall,
  IndentDecrease,
  LayoutPanelTop,
  Palette,
} from "lucide-react";
import { Button } from "./ui/button";
import { RiFontSize2 } from "react-icons/ri";
import { RxLineHeight } from "react-icons/rx";
import { BiFontFamily } from "react-icons/bi";
import { BsFiletypePdf } from "react-icons/bs";
import FontsButton from "./FontsButton";
import FontSizeButton from "./FontSizeButton";
import LineHeightButton from "./LineHeightButton";
import ColorButton from "./ColorButton";
import ExportButton from "./ExportButton";

function CoverLetterControls(props) {
  return (
    <div className="flex gap-2 mb-4">
      <div className="flex-auto w-2/12 2xl:w-3/12">
        <Button variant="secondary" size="full">
          <LayoutPanelTop />
          <span className="hidden xl:block">Template</span>
        </Button>
      </div>
      <div className="flex-auto w-8/12 2xl:w-6/12 flex justify-center gap-2">
        <FontsButton
          fontFamily={props.fontFamily}
          setFontFamily={props.setFontFamily}
        />

        <FontSizeButton
          fontSize={props.fontSize}
          setFontSize={props.setFontSize}
        />
        <LineHeightButton
          lineHeight={props.lineHeight}
          setLineHeight={props.setLineHeight}
        />
        <ColorButton
          mainColor={props.mainColor}
          setMainColor={props.setMainColor}
        />
      </div>
      <div className="flex-auto w-2/12 2xl:w-3/12">
        <ExportButton
          toPDF={props.toPDF}
          targetRef={props.targetRef}
          fileName={props.fileName}
        />
      </div>
    </div>
  );
}

export default CoverLetterControls;
