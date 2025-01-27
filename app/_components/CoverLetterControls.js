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
        <Button variant="secondary">
          <RiFontSize2 />
          <span className="hidden xl:block">M</span>
        </Button>
        <Button variant="secondary">
          <RxLineHeight />
          <span className="hidden xl:block">1.25</span>
        </Button>
        <Button variant="secondary">
          <Palette />
          <span className="hidden xl:block">Color</span>
        </Button>
      </div>
      <div className="flex-auto w-2/12 2xl:w-3/12">
        <Button variant="secondary" size="full">
          <BsFiletypePdf />
          <span className="hidden xl:block">Export</span>
        </Button>
      </div>
    </div>
  );
}

export default CoverLetterControls;
