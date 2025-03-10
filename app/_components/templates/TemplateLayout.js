import { Copy } from "lucide-react";
import CoverLetterResponse from "@/app/_components/CoverLetterResponse";
import { ScrollArea, ScrollBar } from "@/app/_components/ui/scroll-area";
import { useToast } from "@/app/_hooks/use-toast";
import SpinnerComment from "@/app/_components/SpinnerComment";
import { useMainContext } from "@/app/_lib/mainContext";
import BlankTemplate from "./BlankTemplate";
import SimpleTemplate from "./SimpleTemplate";

function TemplateLayout({ watchFields, targetRef, isLoading }) {
  const { fontFamily, fontSize, lineHeight, mainColor, template } =
    useMainContext();
  const fontFamilies = {
    arial: "font-arial",
    times: "font-times",
    georgia: "font-georgia",
    notoSans: "font-[family-name:var(--font-noto-sans)]",
    poppins: "font-[family-name:var(--font-poppins)]",
    calibri: "font-calibri",
  };
  const fontSizes = {
    xs: "text-[14px]",
    s: "text-[15px]",
    m: "text-[16px]",
    l: "text-[18px]",
    xl: "text-[20px]",
  };
  const lineHeights = {
    xs: "leading-4",
    s: "leading-5",
    m: "leading-[1.4]",
    l: "leading-[1.6]",
    xl: "leading-7",
  };

  const { toast } = useToast();
  const copyToClipboard = () => {
    const text = targetRef.current?.innerText;
    navigator.clipboard.writeText(text);
    toast({
      description: "Copied to clipboard.",
    });
  };
  return (
    <ScrollArea
      className={`${fontFamilies[fontFamily]} relative h-[500px] lg:h-[700px] w-full lg:w-[80%] rounded-md border pb-2 top-0 text-black
      ${fontSizes[fontSize]} ${lineHeights[lineHeight]}`}
    >
      <Copy
        onClick={copyToClipboard}
        className="absolute top-1 left-1 cursor-pointer w-4"
      />
      <div className="min-w-[650px]" ref={targetRef}>
        {template === "blank" && (
          <BlankTemplate watchFields={watchFields} isLoading={isLoading} />
        )}
        {template === "simple" && (
          <SimpleTemplate watchFields={watchFields} isLoading={isLoading} />
        )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default TemplateLayout;
