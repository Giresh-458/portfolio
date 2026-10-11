"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Boxes, BrainCircuit, Layers3 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { skillCategories } from "@/lib/data";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const categoryIcons = [BrainCircuit, Layers3, Boxes];
const summaries = [
  "Models, retrieval, evaluation, and reasoning workflows.",
  "Interfaces and APIs that turn ideas into usable products.",
  "Storage, version control, testing, and deployment foundations."
];

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="Skills" title="The tools behind the work." description="A practical toolkit spanning AI application development, web engineering, and the systems that connect them." />
      <motion.div variants={reduceMotion ? undefined : stagger} initial={reduceMotion ? undefined : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={viewport} className="grid gap-4 md:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = categoryIcons[index] ?? Boxes;
          return (
            <motion.article key={category.title} variants={reduceMotion ? undefined : fadeUp} className="portfolio-panel rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-[#F1C75B]/10 text-[#F1C75B]"><Icon className="size-5" /></span>
                <span className="text-sm tabular-nums text-[#77766F]">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-[#F0EFE9]">{category.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-[#A7A69F]">{summaries[index]}</p>
              <div className="mt-5 flex flex-wrap gap-2">{category.skills.map((skill) => <span key={skill.name} className="rounded-md border border-white/10 bg-white/[0.025] px-2.5 py-1.5 text-xs text-[#CFCEC8]">{skill.name}</span>)}</div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
