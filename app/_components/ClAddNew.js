"use client";

import { redirect } from "next/navigation";
import { Card, CardContent } from "./ui/card";
import { FilePlus2 } from "lucide-react";
import { useMainContext } from "../_lib/mainContext";
import { set } from "react-hook-form";
import { useId } from "react";

function ClAddNew() {
  return (
    <div className="p-1 flex flex-col items-center">
      <Card className="mb-3 w-full" onClick={() => redirect("/app/new")}>
        <CardContent className="flex aspect-[1/1.4] items-center justify-center p-2 cursor-pointer bg-transparent">
          <div className="relative z-10 w-full h-full flex items-center justify-center shadow-md">
            <FilePlus2 size={100} strokeWidth={1} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ClAddNew;
