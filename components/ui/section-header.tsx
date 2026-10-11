"use client";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps { eyebrow?: string; title: string; description?: string; className?: string; }

export function SectionHeader({ eyebrow, title, description, className }: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.header variants={reduceMotion ? undefined : fadeUp} initial={reduceMotion ? undefined : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={viewport} className={cn("slayer-section-heading mb-12 max-w-3xl", className)}>
      {eyebrow ? <p className="mb-4 flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F17477]"><span className="inline-block h-px w-7 bg-[#E33B49]" />{eyebrow}</p> : null}
      <h2 className="text-balance font-display text-4xl uppercase leading-[.93] tracking-[.01em] text-foreground md:text-6xl">{title}</h2>
      {description ? <p className="mt-5 max-w-2xl border-l-2 border-[#D83B47]/65 pl-4 text-base leading-7 text-muted md:text-lg">{description}</p> : null}
    </motion.header>
  );
}
