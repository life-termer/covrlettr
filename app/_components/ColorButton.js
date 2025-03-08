"use client";

import * as React from "react";
import { useState } from "react";

import { cn } from "@/app/_lib/utils";
import { Button } from "@/app/_components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";

import { Palette } from "lucide-react";
import { SketchPicker } from "react-color";
import { useMainContext } from "../_lib/mainContext";

export default function ColorButton() {
  const [open, setOpen] = useState(false);
  const { mainColor, setMainColor, template } = useMainContext();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        asChild
        className={`${template === "blank" && "pointer-events-none"}`}
      >
        <span>
          <Button
            variant="secondary"
            role="combobox"
            aria-expanded={open}
            className={`py-x w-full xl:w-[125px] ${
              template === "blank" && "pointer-events-none"
            }`}
            disabled={template === "blank"}
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
