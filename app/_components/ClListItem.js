"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { redirect } from "next/navigation";
import { CircleX } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { deleteCoverLetter } from "../_lib/actions";
import { useEffect, useState } from "react";
import { toast } from "../_hooks/use-toast";

function ClListItem({ id, name, date }) {
  const [message, setMessage] = useState("");
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };
  const localeDate = new Date(date).toLocaleDateString("de-DE", options);

  const handleDeleteClick = async (e) => {
    e.stopPropagation();
    const res = await deleteCoverLetter(id);
    setMessage(res.message);
  };

  useEffect(() => {
    if (message)
      toast({
        title: message,
      });
    setMessage(null);
  }, [message]);

  return (
    <div className="relative p-1 flex flex-col items-center">
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
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <CircleX className="absolute top-3 right-3 cursor-pointer z-30" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              cover letter.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteClick}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ClListItem;
