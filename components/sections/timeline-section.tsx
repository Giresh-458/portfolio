"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, BrainCircuit, CheckCheck, Code2, Route } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const stages = [
  { number: "01", title: "Understand", subtitle: "Start with the real problem.", detail: "Clarify the user, constraints and what a useful result should look like before reaching for a model or framework.", icon: BrainCircuit, tone: "water" },
  { number: "02", title: "Architect", subtitle: "Choose the simplest system that fits.", detail: "Break the work into components, define the data flow and make failure paths visible—not just the happy path.", icon: Route, tone: "ember" },
  { number: "03", title: "Build", subtitle: "Connect intelligence to an experience.", detail: "Bring models, APIs, interfaces and persistence together into something people can actually use.", icon: Code2, tone: "water" },
  { number: "04", title: "Validate", subtitle: "Make claims earn their place.", detail: "Test edge cases, inspect output, document trade-offs and publish only metrics the implementation can support.", icon: CheckCheck, tone: "ember" }
];

export function TimelineSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="timeline" className="section-shell relative scroll-mt-20">
      <SectionHeader eyebrow="How I work" title="A simple loop. Better systems." description="A repeatable process from the first question to an implementation I can explain, test and improve." />
      <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <motion.div aria-hidden="true" initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.16, 1, 0.3, 1] }} className="pointer-events-none absolute left-[8%] right-[8%] top-10 hidden h-px origin-left bg-gradient-to-r from-transparent via-[#54CBD4]/40 to-transparent xl:block" />
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const water = stage.tone === "water";
          const accent = water ? "#68D6DF" : "#E98578";
          return <motion.article key={stage.number} initial={reduceMotion ? undefined : { opacity: 0, y: 20 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.22 }} transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.08 }} whileHover={reduceMotion ? undefined : { y: -4 }} className="group relative rounded-2xl border border-white/[0.085] bg-[#0D131E] p-6 transition-colors hover:border-[#54CBD4]/25 md:p-7">
            <div className="mb-7 flex items-center justify-between"><span className="grid size-11 place-items-center rounded-xl border" style={{ color: accent, borderColor: water ? "rgba(104,214,223,.2)" : "rgba(233,133,120,.2)", background: water ? "rgba(104,214,223,.06)" : "rgba(233,133,120,.06)" }}><Icon className="size-5" /></span><span className="font-mono text-xs tracking-[0.15em] text-[#627184]">{stage.number}</span></div>
            <h3 className="text-xl font-semibold tracking-tight text-[#EEF1F5]">{stage.title}</h3><p className="mt-2 text-sm font-medium text-[#C3CDD8]">{stage.subtitle}</p><p className="mt-4 min-h-[105px] text-sm leading-6 text-[#929EAF]">{stage.detail}</p>
            <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4"><span className="text-[10px] uppercase tracking-[0.15em]" style={{ color: accent, opacity: 0.8 }}>Step {stage.number}</span><ArrowDownRight className="size-4 text-[#627184] transition duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></div>
          </motion.article>;
        })}
      </div>
    </section>
  );
}
