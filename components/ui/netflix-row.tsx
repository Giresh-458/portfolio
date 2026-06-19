"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface NetflixRowProps {
  title?: string;
  children: ReactNode;
  ariaLabel: string;
}

export function NetflixRow({ title, children, ariaLabel }: NetflixRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    rowRef.current?.scrollBy({
      left: direction * Math.min(rowRef.current.clientWidth * 0.82, 960),
      behavior: "smooth"
    });
  };

  return (
    <div className="group/row relative">
      <div className="mb-4 flex items-center justify-between">
        {title ? <h3 className="text-xl font-bold text-white">{title}</h3> : <span />}
        <div className="hidden gap-2 md:flex">
          <Button variant="outline" size="icon" aria-label={`Scroll ${ariaLabel} left`} onClick={() => scroll(-1)}>
            <ChevronLeft className="size-5" />
          </Button>
          <Button variant="outline" size="icon" aria-label={`Scroll ${ariaLabel} right`} onClick={() => scroll(1)}>
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
      <div
        ref={rowRef}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-8 pt-2 md:-mx-10 md:px-10 xl:-mx-16 xl:px-16"
      >
        {children}
      </div>
    </div>
  );
}
