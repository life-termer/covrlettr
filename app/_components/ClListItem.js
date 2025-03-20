"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Underdog } from "next/font/google";
import { redirect } from "next/navigation";

function ClListItem({ id, name, date }) {
  console.log(date);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };
  const localeDate = new Date(date).toLocaleDateString("de-DE", options);
  return (
    <div className="p-1 flex flex-col items-center">
      <Card className="mb-3 w-full" onClick={() => redirect(`/app/${id}`)}>
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
      <p className="text-sm">{localeDate}</p>
    </div>
  );
}

export default ClListItem;
