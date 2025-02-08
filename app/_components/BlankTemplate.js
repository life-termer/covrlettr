import { Copy } from "lucide-react";
import CoverLetterResponse from "./CoverLetterResponse";
import { ScrollArea } from "./ui/scroll-area";
import { useToast } from "../_hooks/use-toast";
import SpinnerComment from "./SpinnerComment";
import { useContext } from "react";
import { useMainContext } from "../_lib/mainContext";

function BlankTemplate({ watchFields, targetRef, response, isLoading }) {
  const { fontFamily, fontSize, lineHeight, mainColor } = useMainContext();
  const fontFamilies = {
    arial: "font-arial",
    times: "font-times",
    georgia: "font-georgia",
    notoSans: "font-[family-name:var(--font-noto-sans)]",
    poppins: "font-[family-name:var(--font-poppins)]",
    calibri: "font-calibri",
  };
  const fontFamilies2 = {
    arial: ["Arial", "sans-serif"],
    times: ["Times New Roman", "serif"],
    georgia: ["Georgia", "serif"],
    notoSans: "font-[family-name:var(--font-noto-sans)]",
    poppins: "Poppins",
    calibri: ["Calibri", "sans-serif"],
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
  const {
    name,
    surname,
    address,
    postCode,
    city,
    company,
    recipientName,
    recipientPostCode,
    recipientAddress,
    recipientCity,
  } = watchFields;
  const { toast } = useToast();

  const copyToClipboard = () => {
    const text = targetRef.current?.innerText;
    navigator.clipboard.writeText(text);
    toast({
      description: "Copied to clipboard.",
    });
  };
  console.log(lineHeights[lineHeight]);

  return (
    <ScrollArea
      className={`${fontFamilies[fontFamily]} relative overflow-hidden h-[400px] lg:h-[700px] w-full lg:w-[80%] rounded-md border px-2 pb-2 sm:px-4 pt-8 sm:pm-4 top-0 
      ${fontSizes[fontSize]} ${lineHeights[lineHeight]}`}
      style={{ color: mainColor }}
    >
      <Copy
        onClick={copyToClipboard}
        className="absolute top-1 left-1 cursor-pointer"
      />
      <div ref={targetRef}>
        <div
          style={{
            fontFamily: fontFamilies2[fontFamily],
          }}
        >
          <div className="p-1">
            {name && <span className="inline-block">{name}&nbsp;</span>}
            {surname && <span className="inline-block">{surname}</span>}
            {address && <span className="block">{address}</span>}
            {postCode && <span className="inline-block">{postCode}&nbsp;</span>}
            {city && <span className="inline-block">{city}</span>}
            {(name || surname || address || postCode || city) && (
              <p className="mb-4"></p>
            )}
            {recipientName && <span className="block">{recipientName}</span>}
            {company && <span className="block">{company}</span>}
            {recipientAddress && (
              <span className="block">{recipientAddress}</span>
            )}
            {recipientPostCode && (
              <span className="inline-block">{recipientPostCode}&nbsp;</span>
            )}
            {recipientCity && (
              <span className="inline-block">{recipientCity}</span>
            )}
            {(company ||
              recipientName ||
              recipientPostCode ||
              recipientAddress ||
              recipientCity) && <p className="mb-4"></p>}
          </div>
          {isLoading ? (
            <SpinnerComment />
          ) : (
            response && (
              <CoverLetterResponse
                name={name}
                surname={surname}
                recipientName={recipientName}
                response={response}
              />
            )
          )}
        </div>
      </div>
    </ScrollArea>
  );
}

export default BlankTemplate;
