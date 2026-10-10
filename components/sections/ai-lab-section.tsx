"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BrainCircuit, Database, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { researchTopics } from "@/lib/data";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const workflow = [
  { title: "Retrieve", description: "Find relevant context and source material.", icon: Database },
  { title: "Reason", description: "Route the request and decide what is needed.", icon: BrainCircuit },
  { title: "Validate", description: "Check the response before it reaches the user.", icon: ShieldCheck }
];

export function AILabSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="ai-lab" className="section-shell section-forge scroll-mt-20">
      <SectionHeader eyebrow="The swordsmith's forge · 鍛錬" title="From model call to reliable system." description="The hard work lives around the model: retrieval, routing, tools, evaluation, guardrails and the experience people actually use." />
      <div className="grid gap-5 lg:grid-cols-[.88fr_1.12fr]">
        <motion.div initial={reduceMotion ? undefined : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={viewport} className="slayer-panel p-6 md:p-8">
          <div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#F28B6F]">Workflow / inspection</span><span className="size-2 rounded-full bg-[#E64A43] shadow-[0_0_16px_rgba(230,74,67,.65)]" /></div>
          <h3 className="mt-4 font-display text-3xl uppercase text-[#F4E6D6]">A reliable AI workflow</h3>
          <p className="mt-2 text-sm leading-6 text-[#AFA3A7]">A useful result depends on more than generation.</p>
          <div className="mt-7 space-y-3">
            {workflow.map((step, index) => {
              const Icon = step.icon;
              return <div key={step.title} className="forge-step flex items-start gap-4 border border-[#E6A181]/15 bg-black/25 p-4 transition-colors hover:border-[#E95648]/55">
                <span className="grid size-10 shrink-0 place-items-center border border-[#EA785D]/35 bg-[#E95648]/[0.08] text-[#FF9B7D]"><Icon className="size-5" /></span>
                <div className="min-w-0 flex-1"><div className="flex items-center gap-2"><span className="font-mono text-[9px] text-[#E98570]">0{index + 1}</span><h3 className="font-semibold text-[#EADBD0]">{step.title}</h3></div><p className="mt-1 text-sm leading-6 text-[#AFA3A7]">{step.description}</p></div>
                {index < workflow.length - 1 ? <ArrowRight className="mt-2 size-4 shrink-0 text-[#E98570]/60" /> : null}
              </div>;
            })}
          </div>
          <div className="mt-7 border-t border-[#E6A181]/15 pt-4 font-mono text-[8px] uppercase tracking-[0.18em] text-[#967A78]">Observe · Evaluate · Improve</div>
        </motion.div>
        <motion.div variants={reduceMotion ? undefined : stagger} initial={reduceMotion ? undefined : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={viewport} className="grid gap-3 sm:grid-cols-2">
          {researchTopics.map((topic, index) => <motion.div key={topic.name} variants={reduceMotion ? undefined : fadeUp}>
            <GlassCard className="slayer-panel h-full border-[#D9866A]/20 p-5 transition-colors hover:border-[#F0755C]/55 md:p-6">
              <div className="flex items-center justify-between"><topic.icon className="size-5 text-[#F28B6F]" /><span className="font-mono text-[8px] tracking-[0.17em] text-[#886D71]">FORGE / {String(index + 1).padStart(2, "0")}</span></div>
              <h3 className="mt-4 font-semibold text-[#F1E2D5]">{topic.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#AFA3A7]">{topic.description}</p>
            </GlassCard>
          </motion.div>)}
        </motion.div>
      </div>
    </section>
  );
}
