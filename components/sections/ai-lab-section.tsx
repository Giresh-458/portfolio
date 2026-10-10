"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { researchTopics } from "@/lib/data";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export function AILabSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="ai-lab" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="The workshop" title="The pieces behind the intelligence." description="A closer look at the building blocks behind agent workflows, retrieval systems, and multimodal applications." />
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={viewport}
          className="glass relative grid min-h-[440px] place-items-center overflow-hidden rounded-3xl"
        >
          <div className="absolute size-80 rounded-full border border-netflix/20 animate-orbit">
            <span className="absolute -top-2 left-1/2 size-4 rounded-full bg-netflix shadow-glow" />
          </div>
          <div className="absolute size-56 rounded-full border border-white/10 animate-orbit-reverse">
            <span className="absolute bottom-5 right-5 size-3 rounded-full bg-white shadow-lg" />
          </div>
          <div className="absolute size-36 rounded-full border border-netflix/30 animate-orbit">
            <span className="absolute left-2 top-7 size-2.5 rounded-full bg-netflix" />
          </div>
          <div className="relative grid size-28 place-items-center rounded-full border border-netflix/40 bg-netflix/10 shadow-glow">
            <div className="absolute inset-3 animate-pulse-red rounded-full bg-netflix/15" />
            <span className="relative font-display text-2xl font-black text-white">AI</span>
          </div>
          <p className="absolute bottom-8 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">System intelligence map</p>
        </motion.div>
        <motion.div
          variants={reduceMotion ? undefined : stagger}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewport}
          className="grid gap-4 sm:grid-cols-2"
        >
          {researchTopics.map((topic) => (
            <motion.div key={topic.name} variants={reduceMotion ? undefined : fadeUp}>
              <GlassCard className="group h-full p-6 transition hover:border-netflix/40 hover:bg-netflix/[0.04]">
                <topic.icon className="size-7 text-netflix transition group-hover:scale-110" />
                <h3 className="mt-5 text-lg font-bold text-white">{topic.name}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{topic.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
