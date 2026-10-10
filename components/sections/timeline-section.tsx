"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, BrainCircuit, CheckCheck, Code2, Route } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const stages = [
  { number: "01", title: "Understand", subtitle: "Name the real problem.", detail: "Clarify the user, constraints and what a useful result should look like before reaching for a model or framework.", icon: BrainCircuit, tone: "water", kanji: "壱" },
  { number: "02", title: "Architect", subtitle: "Choose a system that fits.", detail: "Break the work into components, define the data flow and make failure paths visible—not just the happy path.", icon: Route, tone: "ember", kanji: "弐" },
  { number: "03", title: "Build", subtitle: "Connect intelligence to a product.", detail: "Bring models, APIs, interfaces and persistence together into something people can actually use.", icon: Code2, tone: "water", kanji: "参" },
  { number: "04", title: "Validate", subtitle: "Make claims earn their place.", detail: "Test edge cases, inspect output, document trade-offs and publish only metrics the implementation can support.", icon: CheckCheck, tone: "ember", kanji: "肆" }
];

export function TimelineSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="timeline" className="section-shell section-training relative scroll-mt-20">
      <SectionHeader eyebrow="Training log · 稽古" title="The work is the training." description="A repeatable loop from the first question to an implementation I can explain, test and improve." />
      <div className="training-path relative">
        <svg className="training-path-line pointer-events-none absolute inset-x-0 top-0 hidden h-20 w-full xl:block" viewBox="0 0 1200 80" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <motion.path d="M20 38C170 4 260 70 390 38S630 7 740 38S970 69 1180 36" stroke="#D93645" strokeOpacity=".55" strokeWidth="1.5" strokeDasharray="5 7" initial={reduceMotion ? undefined : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: "easeInOut"}/>
          <motion.path d="M20 43C170 9 260 75 390 43S630 12 740 43S970 74 1180 41" stroke="#39D8F3" strokeOpacity=".25" strokeWidth="1" initial={reduceMotion ? undefined : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, delay: .2, ease: "easeInOut"}/>
        </svg>
        <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:pt-12">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const water = stage.tone === "water";
            const accent = water ? "#39D8F3" : "#F0755C";
            return <motion.article key={stage.number} initial={reduceMotion ? undefined : { opacity: 0, y: 22 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .22 }} transition={{ duration: .45, delay: reduceMotion ? 0 : index * .08 }} whileHover={reduceMotion ? undefined : { y: -5 }} className="training-scroll group relative overflow-hidden border border-[#E7C6AF]/17 bg-[#0B0B12]/94 p-6 transition-colors hover:border-[#EF5456]/55 md:p-7">
              <div className="pointer-events-none absolute -right-4 -top-5 font-serif text-[116px] leading-none text-white/[0.025]">{stage.kanji}</div>
              <div className="relative mb-7 flex items-center justify-between">
                <span className="grid size-12 place-items-center border bg-black/35" style={{ color: accent, borderColor: accent + "55" }}><Icon className="size-5" /></span>
                <span className="font-mono text-[9px] tracking-[0.19em] text-[#8D7B83]">TRAINING / {stage.number}</span>
              </div>
              <h3 className="relative font-display text-2xl uppercase tracking-[.03em] text-[#F3E6D6]">{stage.title}</h3>
              <p className="relative mt-2 text-sm font-medium text-[#D1C0BA]">{stage.subtitle}</p>
              <p className="relative mt-4 min-h-[105px] text-sm leading-6 text-[#AFA3A7]">{stage.detail}</p>
              <div className="relative mt-6 flex items-center justify-between border-t border-[#E7C6AF]/15 pt-4"><span className="font-serif text-2xl" style={{ color: accent }}>{stage.kanji}</span><ArrowDownRight className="size-4 text-[#9C777B] transition duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></div>
              <motion.div aria-hidden="true" className="absolute bottom-0 left-0 h-[2px] origin-left" style={{ background: "linear-gradient(90deg," + accent + ",transparent)", width: "100%" }} initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: .8, delay: index * .1 }}/>
            </motion.article>;
          })}
        </div>
      </div>
    </section>
  );
}
