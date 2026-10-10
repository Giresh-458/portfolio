"use client";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SectionHeader } from "@/components/ui/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import { stats } from "@/lib/data";

const focusAreas = [
  { title: "AI systems", description: "Agents, RAG pipelines and LLM-powered workflows." },
  { title: "Product engineering", description: "Interfaces, APIs, data models and deployment." }
];
const skillPreview = ["Python", "PyTorch", "LangGraph", "React", "Node.js", "PostgreSQL"];

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="about" className="section-shell section-about scroll-mt-20">
      <SectionHeader eyebrow="The training arc · 修行" title="Discipline compounds." description="Curiosity starts the journey. Building, testing and improving turns it into engineering." />
      <motion.div variants={reduceMotion ? undefined : stagger} initial={reduceMotion ? undefined : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={viewport} className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="slayer-panel p-7 md:p-10">
          <div className="haori-checker absolute right-0 top-0 size-16 opacity-70" />
          <p className="relative max-w-2xl text-xl leading-9 text-[#F4E6D4] md:text-2xl">I’m a fourth-year Computer Science and Engineering student at IIIT Sri City, working across generative AI, machine learning and full-stack development.</p>
          <p className="relative mt-5 max-w-2xl text-base leading-8 text-[#B8AEB1]">I like taking a system from idea to application: understand the problem, choose the architecture, connect the model and backend, then test the edge cases that a demo can miss.</p>
          <div className="relative mt-8 flex flex-wrap gap-2">{skillPreview.map((skill) => <TechBadge key={skill}>{skill}</TechBadge>)}</div>
          <div className="mt-8 flex items-center gap-3 border-t border-[#E4C4AF]/15 pt-5 font-mono text-[9px] uppercase tracking-[0.19em] text-[#DD7778]"><span className="h-px w-8 bg-[#D93645]" /> Learn deliberately. Build honestly.</div>
        </motion.div>
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="relative grid gap-3 sm:grid-cols-2">
          <div className="pointer-events-none absolute -right-2 -top-10 size-44 rounded-full border border-[#C52A3C]/20 shadow-[0_0_55px_rgba(190,27,45,.08)]" />
          {stats.map((stat) => <div key={stat.label} className="relative border border-[#E7C6AF]/15 bg-[#0B0B12]/85 p-5 transition-colors hover:border-[#D93645]/45">
            <div className="mb-4 h-1 w-8 bg-gradient-to-r from-[#D93645] to-[#39D8F3]" />
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm text-[#AFA5A8]">{stat.label}</p>
          </div>)}
          {focusAreas.map((area, index) => <div key={area.title} className="relative border border-[#E7C6AF]/12 bg-gradient-to-br from-[#20151D] to-[#0A0B10] p-5">
            <p className="font-mono text-[9px] tracking-[0.2em] text-[#EE7779]">FOCUS / 0{index + 1}</p>
            <p className="mt-3 font-display text-xl uppercase text-[#F3E4D5]">{area.title}</p>
            <p className="mt-2 text-sm leading-6 text-[#AFA5A8]">{area.description}</p>
          </div>)}
        </motion.div>
      </motion.div>
    </section>
  );
}
