"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SectionHeader } from "@/components/ui/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import { stats } from "@/lib/data";

const focusAreas = [
  { title: "AI engineering", description: "RAG, agents, evaluation, and LLM-powered workflows." },
  { title: "Product development", description: "APIs, interfaces, data models, and deployment." }
];
const skillPreview = ["Python", "LangGraph", "LLMs", "React", "Node.js", "PostgreSQL"];

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="About" title="Engineer-minded. Product-focused." description="I enjoy turning complex ideas into useful software: understand the problem, design a clear system, and build something people can use." />
      <motion.div variants={reduceMotion ? undefined : stagger} initial={reduceMotion ? undefined : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={viewport} className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="portfolio-panel flex flex-col justify-between rounded-2xl p-6 sm:p-8 md:p-10">
          <div>
            <p className="text-sm font-medium text-[#F1C75B]">A little about me</p>
            <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-[#F3F2EC] sm:text-3xl">Curiosity, engineering fundamentals, and follow-through.</h3>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#BEBDB7]">I’m a fourth-year Computer Science and Engineering student at IIIT Sri City, working across generative AI, machine learning, backend engineering, and full-stack development.</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#A7A69F]">My focus is on the details around the model as much as the model itself: retrieval quality, API design, data flow, validation, and failure handling. I want to build systems that are useful, explainable, and maintainable.</p>
            <div className="mt-7 flex flex-wrap gap-2">{skillPreview.map((skill) => <TechBadge key={skill}>{skill}</TechBadge>)}</div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-5 text-sm text-[#9C9B95]">Currently exploring <span className="font-medium text-[#EDECE5]">agentic workflows, RAG, and reliable AI applications.</span></div>
        </motion.div>
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="grid gap-3">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => <div key={stat.label} className="portfolio-panel rounded-xl p-4 sm:p-5">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm leading-5 text-[#A7A69F]">{stat.label}</p>
            </div>)}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area, index) => <div key={area.title} className="portfolio-panel flex items-start gap-4 rounded-xl p-5">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#F1C75B]/10 text-sm font-semibold text-[#F1C75B]">0{index + 1}</span>
              <div><h3 className="font-semibold text-[#F0EFE9]">{area.title}</h3><p className="mt-1 text-sm leading-6 text-[#A7A69F]">{area.description}</p></div>
            </div>)}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
