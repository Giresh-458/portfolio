"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { NetflixRow } from "@/components/ui/netflix-row";
import { SectionHeader } from "@/components/ui/section-header";
import { skillCategories } from "@/lib/data";

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="Technical depth" title="An engineering stack built for AI products." />
      <NetflixRow ariaLabel="Technical skill categories">
        {skillCategories.map((category) => (
          <GlassCard key={category.title} className="w-[82vw] max-w-md shrink-0 snap-center p-7 md:w-[430px]">
            <h3 className="mb-7 text-xl font-bold text-white">{category.title}</h3>
            <div className="space-y-6">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-zinc-300">{skill.name}</span>
                    <span className="font-mono text-xs text-zinc-600">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={reduceMotion ? { width: `${skill.level}%` } : { width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-netflix-dark to-netflix shadow-glow-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </NetflixRow>
    </section>
  );
}
