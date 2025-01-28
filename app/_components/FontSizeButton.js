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

const sizes = [
  {
    value: "xs",
    label: "XS",
  },
  {
    value: "s",
    label: "S",
  },
  {
    value: "m",
    label: "M",
  },
  {
    value: "l",
    label: "L",
  },
  {
    value: "xl",
    label: "XL",
  },
];

export default function FontSizeButton({ fontSize, setFontSize }) {
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
            <RiFontSize2 />
            <span className={`hidden xl:block overflow-hidden text-ellipsis`}>
              {sizes.find((size) => size.value === fontSize)?.label}
            </span>
          </Button>
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-[100px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty></CommandEmpty>
            <CommandGroup>
              {sizes.map((size) => (
                <CommandItem
                  key={size.value}
                  value={size.value}
                  onSelect={(currentValue) => {
                    setFontSize(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      fontSize === size.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <span>{size.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
