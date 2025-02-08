"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Button } from "@/app/_components/ui/button";
import { BsFiletypePdf } from "react-icons/bs";
import { TbFileExport } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";
import { useMainContext } from "../_lib/mainContext";
import { exportPlainText, toPDF2 } from "../_lib/utils";

export default function ExportButton({ targetRef, fileName }) {
  const { fontSize, lineHeight } = useMainContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild size="full">
        <Button variant="secondary" size="full">
          <TbFileExport />
          <span className="hidden xl:block overflow-hidden text-ellipsis">
            Export
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" 2xl:w-56">
        <DropdownMenuItem
          className="flex gap-2 items-center"
          onClick={() => {
            toPDF2(targetRef, fileName, fontSize, lineHeight);
          }}
        >
          <BsFiletypePdf /> PDF
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex gap-2 items-center"
          onClick={() => exportPlainText(targetRef, fileName)}
        >
          <TiDocumentText />
          Plain Text
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
