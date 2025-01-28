"use client";

import * as React from "react";
import { useState } from "react";
import { Check } from "lucide-react";

import { cn } from "@/app/_lib/utils";
import { Button } from "@/app/_components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";

import { Palette } from "lucide-react";
import { SketchPicker } from "react-color";

export default function ColorButton({ mainColor, setMainColor }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <span>
          <Button
            variant="secondary"
            role="combobox"
            aria-expanded={open}
            className="py-x w-full xl:w-[125px]"
          >
            <Palette style={{ color: mainColor }} />
            <span className={`hidden xl:block overflow-hidden text-ellipsis`}>
              Color
            </span>
          </Button>
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-[220px] p-0">
        <div className="z-50">
          <SketchPicker
            color={mainColor}
            onChangeComplete={(color) => setMainColor(color.hex)}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
