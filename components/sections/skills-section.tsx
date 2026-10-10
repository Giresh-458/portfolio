"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Boxes, BrainCircuit, Layers3 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { NetflixRow } from "@/components/ui/netflix-row";
import { SectionHeader } from "@/components/ui/section-header";
import { skillCategories } from "@/lib/data";

const categoryIcons = [BrainCircuit, Layers3, Boxes];
const disciplines = ["Intelligence", "Craft", "Infrastructure"];

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="The technique arsenal" title="Different tools. One discipline." description="The practical stack I work with across AI systems, application development, and the infrastructure connecting them." />
      <NetflixRow ariaLabel="Technical skill categories">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = categoryIcons[categoryIndex] ?? Boxes;
          return (
            <GlassCard key={category.title} className="mission-card group relative w-[82vw] max-w-md shrink-0 snap-center overflow-hidden border border-[#879C7F]/20 p-7 transition duration-500 hover:border-[#E85D47]/45 md:w-[430px]">
              <div className="haori-stamp absolute right-0 top-0 size-12 border-b border-l border-[#879C7F]/25 opacity-50" />
              <div className="pointer-events-none absolute -right-14 -top-14 size-40 rounded-full bg-[#467B4C]/10 blur-3xl transition duration-500 group-hover:bg-[#D34C38]/10" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-[#E98565]">Discipline 0{categoryIndex + 1}</p>
                  <h3 className="mt-3 text-xl font-bold text-[#F3EEE3]">{category.title}</h3>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#849C7B]">{disciplines[categoryIndex] ?? "Practice"}</p>
                </div>
                <Icon className="size-6 text-[#A2C498] transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:text-[#F08A62]" />
              </div>
              <div className="relative mt-7 flex flex-wrap gap-2.5">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: reduceMotion ? 0 : index * 0.055, duration: 0.38 }}
                    whileHover={reduceMotion ? undefined : { y: -3, scale: 1.025 }}
                    className="rounded-sm border border-[#A4B39C]/15 bg-[#A4B39C]/[0.045] px-3 py-2 text-sm text-[#C6C8BB] transition-colors hover:border-[#E85D47]/40 hover:bg-[#E85D47]/[0.08] hover:text-[#FFF7EA]"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
              <div className="relative mt-8 flex items-center justify-between border-t border-white/[0.08] pt-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">Practice over posturing.</span>
                <ArrowUpRight className="size-4 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E85D47]" />
              </div>
            </GlassCard>
          );
        })}
      </NetflixRow>
    </section>
  );
}
