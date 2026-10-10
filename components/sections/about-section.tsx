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
    <section id="about" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="About" title="Curious about the model. Serious about the product." description="I like the intersection of intelligent systems and software people can actually use." />
      <motion.div variants={reduceMotion ? undefined : stagger} initial={reduceMotion ? undefined : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={viewport} className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="rounded-2xl border border-white/[0.085] bg-[#0D131E] p-7 md:p-9">
          <p className="text-lg leading-8 text-[#CCD4DE]">I’m a fourth-year Computer Science and Engineering student at IIIT Sri City, building across generative AI, machine learning and full-stack development.</p>
          <p className="mt-4 leading-7 text-[#9FAABA]">I enjoy taking a system from an idea to a working application: understanding the problem, choosing an architecture, connecting the model and backend, and shaping the interface around the user.</p>
          <div className="mt-7 flex flex-wrap gap-2">{skillPreview.map((skill) => <TechBadge key={skill}>{skill}</TechBadge>)}</div>
        </motion.div>
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="grid gap-3 sm:grid-cols-2">
          {stats.map((stat) => <div key={stat.label} className="rounded-2xl border border-white/[0.085] bg-white/[0.02] p-5 transition-colors hover:border-[#54CBD4]/30"><AnimatedCounter value={stat.value} suffix={stat.suffix} /><p className="mt-2 text-sm text-[#8F9CAD]">{stat.label}</p></div>)}
          {focusAreas.map((area) => <div key={area.title} className="rounded-2xl border border-white/[0.085] bg-white/[0.02] p-5"><p className="font-semibold text-[#DDE5ED]">{area.title}</p><p className="mt-2 text-sm leading-6 text-[#8F9CAD]">{area.description}</p></div>)}
        </motion.div>
      </motion.div>
    </section>
  );
}
