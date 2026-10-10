"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, BrainCircuit, CheckCheck, Code2, Route } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const stages = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Start with the real problem.",
    detail: "Clarify the user, the constraints, and what a useful result should look like before reaching for a model or framework.",
    icon: BrainCircuit,
    tone: "water"
  },
  {
    number: "02",
    title: "Architect",
    subtitle: "Choose the simplest system that fits.",
    detail: "Break the work into components, define the data flow, and make failure paths visible—not just the happy path.",
    icon: Route,
    tone: "ember"
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Connect intelligence to an experience.",
    detail: "Bring models, APIs, interfaces, and persistence together into something people can actually use.",
    icon: Code2,
    tone: "water"
  },
  {
    number: "04",
    title: "Verify",
    subtitle: "Make claims earn their place.",
    detail: "Test the edges, inspect the output, document trade-offs, and only publish metrics that the implementation can support.",
    icon: CheckCheck,
    tone: "ember"
  }
];

export function TimelineSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="timeline" className="section-shell relative overflow-hidden scroll-mt-20">
      <div className="pointer-events-none absolute right-[-10%] top-1/4 size-80 rounded-full bg-[#4E7C4C]/[0.09] blur-3xl" />
      <SectionHeader eyebrow="The training sequence" title="Observe. Practice. Refine." description="A disciplined loop from the first question to an implementation you can explain, test, and improve." />

      <div className="relative grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <motion.div
          aria-hidden="true"
          initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 1.35, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute left-[8%] right-[8%] top-10 hidden h-px origin-left bg-gradient-to-r from-[#4E7C4C]/0 via-[#92B486]/55 to-[#E85D47]/0 xl:block"
        />
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const water = stage.tone === "water";
          const accent = water ? "#9DBF91" : "#E98565";
          return (
            <motion.article
              key={stage.number}
              initial={reduceMotion ? undefined : { opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.11, ease: [0.16, 1, 0.3, 1] }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="mission-card group relative border border-[#879C7C]/15 p-6 transition-colors duration-500 hover:border-[#E85D47]/45 md:p-7"
            >
              <div className="mb-8 flex items-center justify-between">
                <motion.span
                  whileHover={reduceMotion ? undefined : { rotate: -8, scale: 1.06 }}
                  className="grid size-11 place-items-center rounded-xl border"
                  style={{ color: accent, borderColor: water ? "rgba(157,191,145,.22)" : "rgba(233,133,101,.22)", background: water ? "rgba(157,191,145,.07)" : "rgba(233,133,101,.07)" }}
                >
                  <Icon className="size-5" />
                </motion.span>
                <span className="font-mono text-xs tracking-[0.2em] text-white/25">{stage.number}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#F3EEE3]">{stage.title}<span style={{ color: accent }}>.</span></h3>
              <p className="mt-2 text-sm font-medium text-[#C5C8B9]">{stage.subtitle}</p>
              <p className="mt-4 min-h-[96px] text-sm leading-6 text-[#979E92]">{stage.detail}</p>
              <div className="mt-6 flex items-center justify-between border-t border-[#879C7C]/15 pt-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color: accent, opacity: 0.75 }}>Process / {stage.number}</span>
                <ArrowDownRight className="size-4 text-white/20 transition duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
