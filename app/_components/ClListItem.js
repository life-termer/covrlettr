import Image from "next/image";
import { Card, CardContent } from "./ui/card";

function ClListItem({ name, date }) {
  return (
    <div className="p-1 flex flex-col items-center">
      <Card className="mb-3 w-full">
        <CardContent className="flex aspect-[1/1.4] items-center justify-center p-2 cursor-pointer bg-transparent">
          <div className="relative z-10 w-full h-full flex items-center justify-center shadow-md">
            <Image
              src="/pencil.svg"
              fill
              className="object-contain opacity-80 z-10 "
              alt="Blank Template"
              quality={80}
            />
          </div>
        </CardContent>
      </Card>
      <p className="text-md font-semibold">{name}</p>
      <p className="text-sm">{date}</p>
    </div>
  );
}

export default ClListItem;
