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
import blankTemplate from "@/public/templates/blankTemplate.jpg";
import simpleTemplate from "@/public/templates/simpleTemplate.jpg";
import Image from "next/image";

const templates = [
  {
    index: 0,
    value: "blank",
    label: "Blank",
    img: blankTemplate,
  },
  {
    index: 1,
    value: "simple",
    label: "Simple",
    img: simpleTemplate,
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
      <PopoverContent className="w-[50%] md:w-[500px] top-[10px] mt-2">
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
                      className={`flex aspect-[1/1.4] items-center justify-center p-2 cursor-pointer bg-transparent ${
                        tmpl.disabled ? "opacity-80 pointer-events-none" : ""
                      }`}
                      onClick={() => setTemplate(tmpl.value)}
                    >
                      <div className="relative z-10 w-full h-full flex items-center justify-center shadow-md">
                        {tmpl.disabled && (
                          <span className="text-sm relative z-20">
                            Coming Soon
                          </span>
                        )}
                        {tmpl.img && (
                          <Image
                            src={tmpl.img}
                            fill
                            className="object-contain opacity-80 z-10 "
                            alt="Blank Template"
                            quality={80}
                          />
                        )}
                      </div>
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
          <CarouselPrevious className="top-full md:top-1/2 -left-4 md:-left-12" />
          <CarouselNext className="top-full md:top-1/2 -right-4 md:-right-12" />
        </Carousel>
      </PopoverContent>
    </Popover>
  );
}
