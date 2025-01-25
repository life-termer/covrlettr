import CoverLetterResponse from "./CoverLetterResponse";
import { ScrollArea } from "./ui/scroll-area";

function CoverLetterTemplate({ form }) {
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
  return (
    <ScrollArea className="relative overflow-hidden h-[700px] w-[80%] rounded-md border p-4 top-0 font-sans leading-5 text-black text-[14px]">
      {name && <p className="inline-block">{name}&nbsp;</p>}
      {surname && <p className="inline-block">{surname}</p>}
      {address && <p className="">{address}</p>}
      {postCode && <p className="inline-block">{postCode}&nbsp;</p>}
      {city && <p className="inline-block">{city}</p>}
      {(name || surname || address || postCode || city) && (
        <p className="mb-4"></p>
      )}
      {recipientName && <p>{recipientName}</p>}
      {company && <p>{company}</p>}
      {recipientAddress && <p>{recipientAddress}</p>}
      {recipientPostCode && (
        <p className="inline-block">{recipientPostCode}&nbsp;</p>
      )}
      {recipientCity && <p className="inline-block">{recipientCity}</p>}
      {(company ||
        recipientName ||
        recipientPostCode ||
        recipientAddress ||
        recipientCity) && <p className="mb-4"></p>}

      <div>
        <CoverLetterResponse recipientName={recipientName} />
      </div>
    </ScrollArea>
  );
}

export default CoverLetterTemplate;
