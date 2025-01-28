import { Copy } from "lucide-react";
import CoverLetterResponse from "./CoverLetterResponse";
import { ScrollArea } from "./ui/scroll-area";

function CoverLetterTemplate({
  form,
  fontFamily,
  fontSize,
  lineHeight,
  mainColor,
  targetRef,
}) {
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
  } = form.getValues();

  const copyToClipboard = () => {
    const text = targetRef.current?.innerText;
    navigator.clipboard.writeText(text);
  };

  return (
    <ScrollArea
      className={`${fontFamilies[fontFamily]} relative overflow-hidden h-[400px] lg:h-[700px] w-full lg:w-[80%] rounded-md border px-2 pb-2 sm:px-4 pt-8 sm:pm-4 top-0 
      ${fontSizes[fontSize]} ${lineHeights[lineHeight]}`}
      style={{ color: mainColor }}
    >
      <div ref={targetRef}>
        <Copy
          onClick={copyToClipboard}
          className="absolute top-1 left-1 cursor-pointer"
        />
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

        <CoverLetterResponse recipientName={recipientName} />
      </div>
    </ScrollArea>
  );
}

export default CoverLetterTemplate;
