"use client";

import * as React from "react";
import { Check, LayoutPanelTop } from "lucide-react";

import { cn } from "@/app/_lib/utils";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import { useMainContext } from "../_lib/mainContext";

const templates = [
  {
    index: 0,
    value: "blank",
    label: "Blank",
  },
  {
    index: 1,
    value: "simple",
    label: "Simple",
  },
  {
    index: 2,
    value: "creative",
    label: "Creative",
    disabled: true,
  },
  {
    index: 3,
    value: "modern",
    label: "Modern",
    disabled: true,
  },
  {
    index: 4,
    value: "minimalist",
    label: "Minimalist",
    disabled: true,
  },
];

export default function TemplatesButton() {
  const [open, setOpen] = React.useState(false);
  const { template, setTemplate } = useMainContext();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <span>
          <Button variant="secondary" size="full">
            <LayoutPanelTop />
            <span className="hidden xl:block">Template</span>
          </Button>
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-[500px] top-[10px] mt-2">
        <Carousel className="w-full max-w-sm m-auto">
          <CarouselContent className="-ml-1">
            {templates.map((tmpl, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 text-center">
                  <Card
                    className={`mb-3 ${
                      template === tmpl.value ? "shadow-brand" : ""
                    }`}
                  >
                    <CardContent
                      className={`flex aspect-square items-center justify-center p-6 cursor-pointer ${
                        tmpl.disabled ? "opacity-50 pointer-events-none" : ""
                      }`}
                      onClick={() => setTemplate(tmpl.value)}
                    >
                      {tmpl.disabled && (
                        <span className="text-sm">Coming Soon</span>
                      )}
                    </CardContent>
                  </Card>
                  <span
                    className={`text-lg font-semibold ${
                      template === tmpl.value ? "text-brand" : ""
                    }`}
                  >
                    {tmpl.label}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </PopoverContent>
    </Popover>
  );
}
