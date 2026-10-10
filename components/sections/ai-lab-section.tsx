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
    <section id="ai-lab" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="AI engineering" title="More than a model call." description="I’m interested in the system around the model: retrieval, routing, tool use, validation and a useful user experience." />
      <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
        <motion.div initial={reduceMotion ? undefined : { opacity: 0, y: 16 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={viewport} className="rounded-2xl border border-white/[0.085] bg-[#0D131E] p-6 md:p-8">
          <p className="text-sm font-semibold text-[#E1E8EF]">A reliable AI workflow</p>
          <p className="mt-2 text-sm leading-6 text-[#929EAF]">A useful result depends on more than generation.</p>
          <div className="mt-7 space-y-3">
            {workflow.map((step, index) => {
              const Icon = step.icon;
              return <div key={step.title} className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#54CBD4]/20 bg-[#54CBD4]/[0.07] text-[#62D5DE]"><Icon className="size-5" /></span>
                <div className="min-w-0 flex-1"><div className="flex items-center gap-2"><span className="font-mono text-[10px] text-[#667B8F]">0{index + 1}</span><h3 className="font-semibold text-[#E4EAF0]">{step.title}</h3></div><p className="mt-1 text-sm leading-6 text-[#929EAF]">{step.description}</p></div>
                {index < workflow.length - 1 ? <ArrowRight className="mt-2 size-4 shrink-0 text-[#526D7C]" /> : null}
              </div>;
            })}
          </div>
        </motion.div>
        <motion.div variants={reduceMotion ? undefined : stagger} initial={reduceMotion ? undefined : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={viewport} className="grid gap-4 sm:grid-cols-2">
          {researchTopics.map((topic) => <motion.div key={topic.name} variants={reduceMotion ? undefined : fadeUp}><GlassCard className="h-full rounded-2xl border border-white/[0.085] bg-[#0D131E] p-5 transition-colors hover:border-[#54CBD4]/30 md:p-6"><topic.icon className="size-5 text-[#62D5DE]" /><h3 className="mt-4 font-semibold text-[#E3E9F0]">{topic.name}</h3><p className="mt-2 text-sm leading-6 text-[#929EAF]">{topic.description}</p></GlassCard></motion.div>)}
        </motion.div>
      </div>
    </section>
  );
}
