"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BrainCircuit, Database, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { SlayerIllustration } from "@/components/ui/slayer-illustration";
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
      <SectionHeader eyebrow="The swordsmith’s forge · 鍛錬" title="From model call to reliable system." description="The hard work lives around the model: retrieval, routing, tools, evaluation, guardrails and the experience people actually use." />
      <div className="grid gap-5 lg:grid-cols-[.88fr_1.12fr]">
        <motion.div initial={reduceMotion ? undefined : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={viewport} className="slayer-panel forge-bench p-6 md:p-8">
          <div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#F28B6F]">Nichirin forge / inspection bay</span><span className="size-2 rounded-full bg-[#E64A43] shadow-[0_0_16px_rgba(230,74,67,.65)]" /></div>
          <div className="forge-art relative my-5 flex h-[120px] items-center justify-center overflow-hidden border-y border-[#F17B53]/15">
            <div className="forge-ember-glow absolute inset-0" />
            <svg className="relative h-full w-full" viewBox="0 0 620 130" fill="none" aria-hidden="true">
              <path d="M82 110L270 36L536 16L314 65L118 119Z" fill="#17222C" stroke="#3BD5F0" strokeOpacity=".45" strokeWidth="1.5"/>
              <path d="M118 119L314 65L536 16L321 75Z" fill="#D7DCE0" fillOpacity=".16"/>
              <motion.path d="M88 111L270 36L536 16" stroke="#41DDF5" strokeWidth="2.5" strokeLinecap="round" animate={reduceMotion ? undefined : { pathLength: [0, 1], opacity: [.15, .95, .15] }} transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}/>
              <path d="M89 111L69 119L56 108L76 100Z" fill="#DD5948" stroke="#F7A077" strokeWidth="1.5"/>
              <path d="M81 102L100 122M89 98L108 117" stroke="#D6B7A0" strokeWidth="4" strokeLinecap="round"/>
              {[0,1,2,3,4,5,6,7,8].map((i)=><motion.circle key={i} cx={150+i*39} cy={96-(i%4)*19} r={1.7+(i%3)*.5} fill={i%2===0?"#FF945C":"#42D9EE"} animate={reduceMotion ? undefined : { y:[0,-25-(i%3)*7,0], opacity:[0,.9,0] }} transition={{ duration:2.3+(i%4)*.4, delay:i*.17, repeat:Infinity, ease:"easeInOut" }}/>)}
            </svg>
            <SlayerIllustration variant="rengoku" label="Flame-style Corps swordsman beside the forge" className="absolute -top-2 right-[8%] z-[2] h-[132px] w-[98px] opacity-95 drop-shadow-[0_0_18px_rgba(255,130,76,0.24)]" />
            <span className="absolute bottom-2 right-3 z-[3] font-mono text-[8px] uppercase tracking-[0.18em] text-[#C18E7C]">Temper · refine · validate</span>
          </div>
          <h3 className="mt-4 font-display text-3xl uppercase text-[#F4E6D6]">A reliable AI workflow</h3>
          <p className="mt-2 text-sm leading-6 text-[#AFA3A7]">A useful result depends on more than generation.</p>
          <div className="mt-7 space-y-3">
            {workflow.map((step, index) => {
              const Icon = step.icon;
              return <div key={step.title} className="forge-step flex items-start gap-4 border border-[#E6A181]/15 bg-black/25 p-4 transition-colors hover:border-[#E95648]/55">
                <span className="grid size-10 shrink-0 place-items-center border border-[#EA785D]/35 bg-[#E95648]/8 text-[#FF9B7D]"><Icon className="size-5" /></span>
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
              <div className="mt-5 h-px w-full bg-linear-to-r from-[#E65A48]/55 via-[#C38A6B]/20 to-transparent" />
            </GlassCard>
          </motion.div>)}
        </motion.div>
      </div>
    </section>
  );
}
