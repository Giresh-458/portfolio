"use client";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SectionHeader } from "@/components/ui/section-header";
import { thunderScene } from "@/lib/anime-art";
import { AnimeSceneBackdrop } from "@/components/ui/anime-scene-backdrop";
import { TechBadge } from "@/components/ui/tech-badge";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import { stats } from "@/lib/data";

const focusAreas = [
  { title: "AI systems", description: "Agents, retrieval and LLM-powered workflows.", mark: "知" },
  { title: "Product engineering", description: "Interfaces, APIs, data models and deployment.", mark: "造" }
];
const skillPreview = ["Python", "PyTorch", "LangGraph", "React", "Node.js", "PostgreSQL"];

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="about" className="section-shell section-about scroll-mt-20">
      <SectionHeader eyebrow="The training arc · 修行" title="Discipline compounds." description="Curiosity starts the journey. Building, testing and improving turns it into engineering." />
      <motion.div variants={reduceMotion ? undefined : stagger} initial={reduceMotion ? undefined : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={viewport} className="grid gap-6 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="training-scroll slayer-panel relative flex flex-col justify-between p-7 md:p-10">
          <div className="pointer-events-none absolute inset-3 border border-[#E7C6AF]/10" />
          <div className="pointer-events-none absolute right-6 top-6 font-serif text-4xl text-netflix/55">修</div>
          <div className="relative">
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.24em] text-[#FFCA3A]">Personal field notes / 01</p>
            <p className="max-w-2xl font-display text-3xl uppercase leading-[1.12] text-[#F4E6D4] md:text-4xl">Learn the system. Understand the blade. Make it useful.</p>
            <div className="mt-6 h-px w-24 bg-linear-to-r from-[#E5A51D] via-[#FFC83D] to-transparent" />
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
            <AnimeSceneBackdrop scene={thunderScene} priority className="absolute inset-0 z-0 scale-[1.01] transition-transform duration-[1200ms] group-hover:scale-[1.05]" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(5,7,12,.88)_0%,rgba(5,7,12,.45)_48%,rgba(5,7,12,.06)_100%),linear-gradient(0deg,rgba(4,5,9,.82),rgba(4,5,9,.02)_60%)]" />
            <motion.div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-[#090910]/90 via-transparent to-[#090910]/20" animate={reduceMotion ? undefined : { opacity: [.6, .8, .6] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div><p className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#FFD967]">Thunder training grounds</p><p className="mt-2 font-display text-2xl uppercase text-[#F4E6D4]">Quiet work. Sharp results.</p></div>
              <span className="font-serif text-4xl text-[#FFCE4A]/85">藤</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, index) => <div key={stat.label} className="corps-stat relative overflow-hidden border border-[#E7C6AF]/14 bg-[#0B0B12]/90 p-4 sm:p-5">
              <span className="absolute right-3 top-2 font-serif text-2xl text-netflix/40">{["壱","弐","参","肆"][index]}</span>
              <div className="mb-4 h-1 w-8 bg-linear-to-r from-[#E5A51D] to-[#FFC83D]" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 max-w-[130px] text-xs leading-5 text-[#AFA5A8]">{stat.label}</p>
            </div>)}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area) => <div key={area.title} className="flex gap-3 border border-[#E7C6AF]/12 bg-linear-to-br from-[#20151D] to-[#0A0B10] p-4">
              <span className="font-serif text-2xl text-[#FFCA3A]">{area.mark}</span>
              <div><p className="font-semibold text-[#F3E4D5]">{area.title}</p><p className="mt-1 text-xs leading-5 text-[#AFA5A8]">{area.description}</p></div>
            </div>)}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
