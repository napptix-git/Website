"use client";

import { cn } from "@/lib/utils";
import DotPattern from "../Animations/dot-pattern";

export function DotPatternDemo() {
  return (
    <div className="relative  z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      {/* <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
      </p> */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
