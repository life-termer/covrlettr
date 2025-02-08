"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/app/_lib/utils";
import { Button } from "@/app/_components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/_components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import { BiFontFamily } from "react-icons/bi";
import { useMainContext } from "../_lib/mainContext";

const fonts = [
  {
    value: "arial",
    label: "Arial",
  },
  {
    value: "calibri",
    label: "Calibri",
  },
  {
    value: "georgia",
    label: "Georgia",
  },
  {
    value: "notoSans",
    label: "Noto Sans",
  },
  {
    value: "poppins",
    label: "Poppins",
  },
  {
    value: "times",
    label: "Times New Roman",
  },
];

export default function FontsButton() {
  const [open, setOpen] = React.useState(false);
  const { fontFamily, setFontFamily } = useMainContext();

  const fontFamilies = {
    arial: "font-arial",
    times: "font-times",
    georgia: "font-georgia",
    notoSans: "font-[family-name:var(--font-noto-sans)]",
    poppins: "font-[family-name:var(--font-poppins)]",
    calibri: "font-calibri",
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <span>
          <Button
            variant="secondary"
            role="combobox"
            aria-expanded={open}
            className="py-x w-full xl:w-[110px]"
          >
            <BiFontFamily />
            <span
              className={`${fontFamilies[fontFamily]} hidden xl:block overflow-hidden text-ellipsis`}
            >
              {fonts.find((fonts) => fonts.value === fontFamily)?.label}
            </span>
          </Button>
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Fonts..." />
          <CommandList>
            <CommandEmpty></CommandEmpty>
            <CommandGroup>
              {fonts.map((font) => (
                <CommandItem
                  key={font.value}
                  value={font.value}
                  onSelect={(currentValue) => {
                    setFontFamily(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      fontFamily === font.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <span
                    className={`${
                      fontFamilies[font.value]
                    } overflow-hidden text-ellipsis`}
                  >
                    {font.label}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
