"use client";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps { eyebrow?: string; title: string; description?: string; className?: string; }

export function SectionHeader({ eyebrow, title, description, className }: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.header variants={reduceMotion ? undefined : fadeUp} initial={reduceMotion ? undefined : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={viewport} className={cn("mb-10 max-w-3xl", className)}>
      {eyebrow ? <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#63D3DC]">{eyebrow}</p> : null}
      <h2 className="text-balance font-sans text-3xl font-semibold leading-[1.1] tracking-[-0.045em] text-[#F4F5F7] md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-[#9FAABA] md:text-lg">{description}</p> : null}
    </motion.header>
  );
}
