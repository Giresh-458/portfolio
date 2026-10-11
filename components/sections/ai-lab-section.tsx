"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BrainCircuit, Database, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { researchTopics } from "@/lib/data";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const workflow = [
  { title: "Retrieve", description: "Find relevant context and source material.", icon: Database },
  { title: "Reason", description: "Route a request and choose the next action.", icon: BrainCircuit },
  { title: "Validate", description: "Check output and failure cases before delivery.", icon: ShieldCheck }
];

export function AILabSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="ai-lab" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="AI systems" title="More than a model call." description="Reliable AI products need the systems around the model: retrieval, routing, tools, evaluation, guardrails, and a useful user experience." />
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={reduceMotion ? undefined : { opacity: 0, y: 16 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={viewport} className="portfolio-panel rounded-2xl p-6 sm:p-8">
          <p className="text-sm font-medium text-[#F1C75B]">A typical workflow</p>
          <div className="mt-6 space-y-3">
            {workflow.map((step, index) => {
              const Icon = step.icon;
              return <div key={step.title} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#F1C75B]/10 text-[#F1C75B]"><Icon className="size-5" /></span>
                <div className="min-w-0 flex-1"><div className="flex items-center gap-2"><span className="text-xs tabular-nums text-[#85847D]">0{index + 1}</span><h3 className="font-semibold text-[#F0EFE9]">{step.title}</h3></div><p className="mt-1 text-sm leading-6 text-[#A7A69F]">{step.description}</p></div>
                {index < workflow.length - 1 ? <ArrowRight className="mt-2 size-4 shrink-0 text-[#77766F]" /> : null}
              </div>;
            })}
          </div>
          <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-5 text-[#85847D]">Observe · Evaluate · Improve</p>
        </motion.div>
        <motion.div variants={reduceMotion ? undefined : stagger} initial={reduceMotion ? undefined : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={viewport} className="grid gap-3 sm:grid-cols-2">
          {researchTopics.map((topic, index) => <motion.div key={topic.name} variants={reduceMotion ? undefined : fadeUp} className="portfolio-panel rounded-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between"><topic.icon className="size-5 text-[#F1C75B]" /><span className="text-xs tabular-nums text-[#77766F]">0{index + 1}</span></div>
            <h3 className="mt-4 font-semibold text-[#F0EFE9]">{topic.name}</h3>
            <p className="mt-2 text-sm leading-6 text-[#A7A69F]">{topic.description}</p>
          </motion.div>)}
        </motion.div>
      </div>
    </section>
  );
}
