import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { VIDEO_ARRAY } from "@/constants/layout";
import { useTranslations } from "next-intl";

interface VideoExample {
  src: string;
  prompt: string;
}

export function CarouselVideo() {
  const t = useTranslations();
  // console.log(t.raw("IndexPage.videoExample"));

  return (
    <Carousel className="max-w-3xl mx-auto p-3">
      <CarouselContent>
        {t.raw("IndexPage.videoExample").map((i: VideoExample) => (
          <CarouselItem key={i.src}>
            <div className="p-1">
              <div>
                <div className="flex flex-col aspect-square items-center justify-center gap-3">
                  {/* video element */}
                  <video preload="auto" controls src={`${i.src}`}></video>

                  <span className="text-xl font-semibold font-mono">
                    {i.prompt}
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
