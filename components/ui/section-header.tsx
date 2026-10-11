"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, className }: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      variants={reduceMotion ? undefined : fadeUp}
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={viewport}
      className={cn("section-heading mb-10 max-w-3xl", className)}
    >
      {eyebrow ? <p className="mb-3 flex items-center gap-3 text-sm font-medium text-[#F1C75B]"><span className="inline-block h-px w-7 bg-[#F1C75B]" />{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#F4F3ED] sm:text-4xl md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-[#AFAFA9] sm:text-lg sm:leading-8">{description}</p> : null}
    </motion.header>
  );
}
