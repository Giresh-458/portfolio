"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, BrainCircuit, CheckCheck, Code2, Route } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const stages = [
  { number: "01", title: "Understand", subtitle: "Name the real problem.", detail: "Clarify the user, constraints and what a useful result should look like before reaching for a model or framework.", icon: BrainCircuit, tone: "water" },
  { number: "02", title: "Architect", subtitle: "Choose a system that fits.", detail: "Break the work into components, define the data flow and make failure paths visible—not just the happy path.", icon: Route, tone: "ember" },
  { number: "03", title: "Build", subtitle: "Connect intelligence to a product.", detail: "Bring models, APIs, interfaces and persistence together into something people can actually use.", icon: Code2, tone: "water" },
  { number: "04", title: "Validate", subtitle: "Make claims earn their place.", detail: "Test edge cases, inspect output, document trade-offs and publish only metrics the implementation can support.", icon: CheckCheck, tone: "ember" }
];

export function TimelineSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="timeline" className="section-shell section-training relative scroll-mt-20">
      <SectionHeader eyebrow="Training log · 稽古" title="The work is the training." description="A repeatable loop from the first question to an implementation I can explain, test and improve." />
      <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <motion.div aria-hidden="true" initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.16, 1, 0.3, 1] }} className="pointer-events-none absolute left-[8%] right-[8%] top-10 hidden h-px origin-left bg-gradient-to-r from-transparent via-[#E3444D]/55 to-[#39D8F3]/25 xl:block" />
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const water = stage.tone === "water";
          const accent = water ? "#39D8F3" : "#F0755C";
          return <motion.article key={stage.number} initial={reduceMotion ? undefined : { opacity: 0, y: 22 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.22 }} transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * .08 }} whileHover={reduceMotion ? undefined : { y: -4 }} className="slayer-panel group relative p-6 transition-colors hover:border-[#EF5456]/55 md:p-7">
            <div className="mb-7 flex items-center justify-between">
              <span className="grid size-11 place-items-center border bg-black/25" style={{ color: accent, borderColor: accent + "55" }}><Icon className="size-5" /></span>
              <span className="font-serif text-3xl text-[#A79195]/65">{["壱", "弐", "参", "肆"][index]}</span>
            </div>
            <h3 className="font-display text-2xl uppercase tracking-[.03em] text-[#F3E6D6]">{stage.title}</h3>
            <p className="mt-2 text-sm font-medium text-[#D1C0BA]">{stage.subtitle}</p>
            <p className="mt-4 min-h-[105px] text-sm leading-6 text-[#AFA3A7]">{stage.detail}</p>
            <div className="mt-6 flex items-center justify-between border-t border-[#E7C6AF]/15 pt-4"><span className="font-mono text-[8px] uppercase tracking-[.19em]" style={{ color: accent }}>Training step / {stage.number}</span><ArrowDownRight className="size-4 text-[#9C777B] transition duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></div>
          </motion.article>;
        })}
      </div>
    </section>
  );
}
