"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { wisteriaScene } from "@/lib/anime-art";
import { AnimeSceneBackdrop } from "@/components/ui/anime-scene-backdrop";
import { TechBadge } from "@/components/ui/tech-badge";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const focusAreas = [
  { title: "AI systems", description: "Agents, retrieval and LLM-powered workflows.", mark: "知" },
  { title: "Product engineering", description: "Interfaces, APIs, data models and deployment.", mark: "造" }
];
const skillPreview = ["Python", "PyTorch", "LangGraph", "React", "Node.js", "PostgreSQL"];

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="about" className="section-shell section-about scroll-mt-20">
      <SectionHeader eyebrow="Profile · プロフィール" title="The person behind the projects." description="A little about my background, what I build, and how I approach engineering." />
      <motion.div variants={reduceMotion ? undefined : stagger} initial={reduceMotion ? undefined : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={viewport} className="grid gap-6 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="training-scroll slayer-panel relative flex flex-col justify-between p-7 md:p-10">
          <div className="pointer-events-none absolute inset-3 border border-[#E7C6AF]/10" />
          <div className="pointer-events-none absolute right-6 top-6 font-serif text-4xl text-netflix/55">修</div>
          <div className="relative">
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.24em] text-[#C84354]">Personal field notes / 01</p>
            <p className="max-w-2xl font-display text-3xl uppercase leading-[1.12] text-[#F4E6D4] md:text-4xl">From idea to working system.</p>
            <div className="mt-6 h-px w-24 bg-linear-to-r from-[#C83F55] via-[#C33B50] to-transparent" />
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#C0B4B6]">I’m a fourth-year Computer Science and Engineering student at IIIT Sri City, working across generative AI, machine learning and full-stack development.</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#A99DA2]">I like taking a system from idea to application: understand the problem, choose the architecture, connect the model and backend, then test the edge cases that a demo can miss.</p>
            <div className="mt-8 flex flex-wrap gap-2">{skillPreview.map((skill) => <TechBadge key={skill}>{skill}</TechBadge>)}</div>
          </div>
          <div className="relative mt-9 flex items-center justify-between gap-4 border-t border-[#E4C4AF]/15 pt-5">
            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.19em] text-[#DD7778]"><span className="h-px w-8 bg-netflix" /> Learn deliberately. Build honestly.</div>
            <span className="font-serif text-2xl text-netflix/70">心</span>
          </div>
        </motion.div>

        <motion.div variants={reduceMotion ? undefined : fadeUp} className="relative flex flex-col gap-4">
          <div className="training-ground group relative min-h-[300px] overflow-hidden border border-[#E7C6AF]/15 bg-[#0A0B12]">
            <AnimeSceneBackdrop scene={wisteriaScene} priority className="absolute inset-0 z-0 scale-[1.01] transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(5,7,12,.9)_0%,rgba(5,7,12,.62)_55%,rgba(4,5,9,.42)_100%)]" />
            <div className="absolute inset-x-5 bottom-5 z-10 flex items-end gap-4 sm:inset-x-6 sm:bottom-6 sm:gap-5">
              <div className="relative shrink-0">
                <span aria-hidden="true" className="absolute -inset-2 rounded-full border border-[#D33E52]/65" />
                <span aria-hidden="true" className="absolute -inset-4 rounded-full border border-[#E9A51A]/20" />
                <img
                  src="https://avatars.githubusercontent.com/u/194811970?v=4"
                  alt="Giresh Komal Velaga"
                  width="128"
                  height="128"
                  loading="lazy"
                  decoding="async"
                  className="relative size-24 rounded-full border-2 border-[#E9A51A]/80 object-cover shadow-[0_0_30px_rgba(211,62,82,.22)] sm:size-32"
                />
              </div>
              <div className="min-w-0 pb-1">
                <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#FFD967] sm:text-[9px]">Profile / 01</p>
                <h3 className="mt-2 font-display text-2xl uppercase leading-[1.02] text-[#F4E6D4] sm:text-3xl">Giresh Komal Velaga</h3>
                <p className="mt-2 text-xs leading-5 text-[#D3C6C4] sm:text-sm">AI Engineer · Full-Stack Developer</p>
                <a href="https://github.com/Giresh-458" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#F0B9AB] transition hover:text-white">
                  <Github className="size-3.5" /> GitHub profile <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area) => <div key={area.title} className="flex gap-3 border border-[#E7C6AF]/12 bg-linear-to-br from-[#20151D] to-[#0A0B10] p-4">
              <span className="font-serif text-2xl text-[#C84354]">{area.mark}</span>
              <div><p className="font-semibold text-[#F3E4D5]">{area.title}</p><p className="mt-1 text-xs leading-5 text-[#AFA5A8]">{area.description}</p></div>
            </div>)}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
