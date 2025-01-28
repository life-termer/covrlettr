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
import { RiFontSize2 } from "react-icons/ri";
import { RxLineHeight } from "react-icons/rx";

const heights = [
  {
    value: "xs",
    label: "1",
  },
  {
    value: "s",
    label: "1.25",
  },
  {
    value: "m",
    label: "1.4",
  },
  {
    value: "l",
    label: "1.6",
  },
  {
    value: "xl",
    label: "1.75",
  },
];

export default function LineHeightButton({ lineHeight, setLineHeight }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <span>
          <Button
            variant="secondary"
            role="combobox"
            aria-expanded={open}
            className="py-x w-full"
          >
            <RxLineHeight />
            <span className={`hidden xl:block overflow-hidden text-ellipsis`}>
              {heights.find((height) => height.value === lineHeight)?.label}
            </span>
          </Button>
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-[100px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty></CommandEmpty>
            <CommandGroup>
              {heights.map((height) => (
                <CommandItem
                  key={height.value}
                  value={height.value}
                  onSelect={(currentValue) => {
                    setLineHeight(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      lineHeight === height.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <span>{height.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
