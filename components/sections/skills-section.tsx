"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Boxes, BrainCircuit, Layers3 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { NetflixRow } from "@/components/ui/netflix-row";
import { SectionHeader } from "@/components/ui/section-header";
import { skillCategories } from "@/lib/data";

const categoryIcons = [BrainCircuit, Layers3, Boxes];

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="The toolkit" title="Two disciplines. One builder’s mindset." description="A practical stack spanning intelligent systems, application engineering, and the infrastructure connecting them." />
      <NetflixRow ariaLabel="Technical skill categories">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = categoryIcons[categoryIndex] ?? Boxes;
          return (
            <GlassCard key={category.title} className="group relative w-[82vw] max-w-md shrink-0 snap-center overflow-hidden p-7 transition duration-500 hover:border-[#75E0D9]/30 md:w-[430px]">
              <div className="pointer-events-none absolute -right-14 -top-14 size-40 rounded-full bg-[#75E0D9]/[0.06] blur-3xl transition duration-500 group-hover:bg-[#FF9169]/[0.10]" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-[#75E0D9]">Track 0{categoryIndex + 1}</p>
                  <h3 className="mt-3 text-xl font-bold text-white">{category.title}</h3>
                </div>
                <Icon className="size-6 text-[#8CEBE4] transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110" />
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
                    className="rounded-xl border border-white/[0.09] bg-white/[0.035] px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-[#75E0D9]/30 hover:bg-[#75E0D9]/[0.07] hover:text-white"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
              <div className="relative mt-8 flex items-center justify-between border-t border-white/[0.08] pt-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">Tools are learned. Systems are built.</span>
                <ArrowUpRight className="size-4 text-white/20 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#75E0D9]" />
              </div>
            </GlassCard>
          );
        })}
      </NetflixRow>
    </section>
  );
}
