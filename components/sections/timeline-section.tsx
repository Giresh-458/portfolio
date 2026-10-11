"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, BrainCircuit, CheckCheck, Code2, Route } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { animeScenes } from "@/lib/anime-art";

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
      <SectionHeader
        eyebrow="Training log · 稽古"
        title="The work is the training."
        description="A repeatable loop from the first question to an implementation I can explain, test and improve."
      />
      <div className="training-path relative">
        <div className="pointer-events-none absolute left-[8%] right-[8%] top-5 hidden h-px overflow-hidden bg-netflix/20 xl:block">
          <motion.div
            className="h-full origin-left bg-linear-to-r from-[#D93645] via-[#C3A2E2] to-[#39D8F3]"
            initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        </div>
        <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:pt-12">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const accent = stage.tone === "water" ? "#39D8F3" : "#F0755C";
            return (
              <motion.article
                key={stage.number}
                initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className="training-scroll group relative overflow-hidden border border-[#E7C6AF]/17 bg-[#0B0B12]/60 p-6 transition-colors hover:border-[#EF5456]/55 md:p-7"
              >
                <div aria-hidden="true" className="absolute inset-0 z-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(180deg, rgba(7,7,12,.28) 0%, rgba(7,7,12,.72) 46%, rgba(7,7,12,.97) 100%), url('" + animeScenes[(index * 2 + 2) % animeScenes.length].image + "')", backgroundSize: "cover, cover", backgroundPosition: "center, " + animeScenes[(index * 2 + 2) % animeScenes.length].position }} />
                <div className="pointer-events-none absolute -right-4 -top-5 font-serif text-[116px] leading-none text-white/2.5">
                  {stage.kanji}
                </div>
                <div className="relative z-10 mb-7 flex items-center justify-between">
                  <span className="grid size-12 place-items-center border bg-black/35" style={{ color: accent, borderColor: accent + "55" }}>
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.19em] text-[#8D7B83]">TRAINING / {stage.number}</span>
                </div>
                <h3 className="relative z-10 font-display text-2xl uppercase tracking-[.03em] text-[#F3E6D6]">{stage.title}</h3>
                <p className="relative z-10 mt-2 text-sm font-medium text-[#D1C0BA]">{stage.subtitle}</p>
                <p className="relative z-10 mt-4 min-h-[105px] text-sm leading-6 text-[#AFA3A7]">{stage.detail}</p>
                <div className="relative z-10 mt-6 flex items-center justify-between border-t border-[#E7C6AF]/15 pt-4">
                  <span className="font-serif text-2xl" style={{ color: accent }}>{stage.kanji}</span>
                  <ArrowDownRight className="size-4 text-[#9C777B] transition duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </div>
                <motion.div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] origin-left"
                  style={{ background: "linear-gradient(90deg," + accent + ",transparent)", width: "100%" }}
                  initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
