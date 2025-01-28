"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Button } from "@/app/_components/ui/button";
import { BsFiletypePdf } from "react-icons/bs";
import { TbFileExport } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";

export default function ExportButton({ toPDF, targetRef, fileName }) {
  const exportPlainText = (targetRef) => {
    const text = targetRef.current?.innerText;
    // Create a Blob with the text content
    const blob = new Blob([text], { type: "text/plain" });
    const blobURL = window.URL.createObjectURL(blob);

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = blobURL;
    link.download = `${fileName}.txt`; // File name

    // Trigger the download
    link.click();

    // Cleanup
    window.URL.revokeObjectURL(blobURL);
  };

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
        <DropdownMenuItem className="flex gap-2 items-center" onClick={toPDF}>
          <BsFiletypePdf /> PDF
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex gap-2 items-center"
          onClick={() => exportPlainText(targetRef)}
        >
          <TiDocumentText />
          Plain Text
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    // <Button variant="secondary" size="full" onClick={toPDF}>
    //   <BsFiletypePdf />
    //   <span className="hidden xl:block overflow-hidden text-ellipsis">
    //     Export
    //   </span>
    // </Button>
  );
}
