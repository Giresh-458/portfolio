"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "@/components/project-modal";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import { missionScenes } from "@/lib/anime-art";
import { AnimeSceneBackdrop } from "@/components/ui/anime-scene-backdrop";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();
  return (
    <section id="projects" className="section-shell section-projects scroll-mt-20">
      <SectionHeader eyebrow="Mission archive · 任務記録" title="Real systems. Real constraints." description="Each project is a mission record: the problem, the architecture, and the decisions behind the result." />
      <div className="mission-archive-banner relative mb-8 overflow-hidden border-y border-[#D3A88C]/20 py-4">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#D93645]/10 via-transparent to-[#39D8F3]/[0.07]" />
        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3"><span className="grid size-9 place-items-center border border-netflix/50 bg-[#2A1018] font-serif text-xl text-[#F3DCCB]">任</span><div><p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#E8797B]">Demon Slayer Corps / Engineering Division</p><p className="mt-1 text-xs text-[#BBAEB0]">Corps engineering records</p></div></div>
          <div className="text-right"><p className="font-display text-3xl text-[#F3E5D5]">{String(projects.length).padStart(2, "0")}</p><p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#8E7D83]">Mission files</p></div>
        </div>
        <motion.div aria-hidden="true" className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-linear-to-r from-[#D93645] via-[#C3A2E2] to-[#39D8F3]" initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article key={project.id} initial={reduceMotion ? undefined : { opacity: 0, y: 22 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: 0.48, delay: reduceMotion ? 0 : (index % 3) * .07 }} whileHover={reduceMotion ? undefined : { y: -6 }} className="mission-card group flex h-full flex-col overflow-hidden border border-[#D05A55]/25 transition-colors duration-300 hover:border-[#EF4A51]/65">
            <button type="button" onClick={() => setSelected(project)} className="block flex-1 text-left" aria-label={"Open mission record for " + project.title}>
              <div className="mission-art relative aspect-16/10 overflow-hidden border-b border-[#D3A88C]/12 bg-[#0A0D16]">
                <AnimeSceneBackdrop scene={missionScenes[index % missionScenes.length]} className="absolute inset-0" />
                <div className="absolute inset-0 bg-linear-to-t from-[#09070E]/95 via-[#09070E]/10 to-[#090A10]/15" />
                <div className="absolute left-4 top-4 flex items-center gap-2 border border-[#E7C6AF]/25 bg-[#08080D]/78 px-3 py-1.5 backdrop-blur-xs">
                  <motion.span className="size-1.5 bg-[#E3444D]" animate={reduceMotion ? undefined : { opacity: [.5, 1, .5] }} transition={{ duration: 2.2, repeat: Infinity }} />
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#EBD9C9]">Mission {String(index + 1).padStart(2, "0")}</span>
                </div>
                <span className="absolute right-4 top-[3.35rem] max-w-[48%] text-right font-mono text-[8px] uppercase tracking-[0.13em] text-white/75 sm:top-4">{missionScenes[index % missionScenes.length].character}</span>
                <span className="absolute bottom-4 left-4 right-4 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#F4CEB5]">{project.eyebrow}</span>
                <motion.div aria-hidden="true" className="mission-slash pointer-events-none absolute -left-1/3 top-0 h-full w-1/3" initial={{ x: "-20%", skewX: -18 }} whileHover={{ x: "450%" }} transition={{ duration: .65, ease: "easeOut" }} />
                <span className="absolute right-4 top-4 grid size-8 place-items-center border border-white/20 bg-black/40 text-white opacity-0 transition group-hover:opacity-100"><ArrowUpRight className="size-4" /></span>
              </div>
              <div className="px-5 pb-5 pt-5">
                <h3 className="flex items-start justify-between gap-3 text-lg font-semibold leading-snug tracking-tight text-[#F5EBDD]">{project.title}<ArrowUpRight className="mt-1 size-4 shrink-0 text-[#42CDE5] opacity-65 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" /></h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#B3A8AB]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{project.tech.slice(0, 4).map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
              </div>
            </button>
            <div className="flex items-center gap-2 border-t border-[#D3A88C]/15 bg-[#07070C]/55 px-4 py-3">
              <Button asChild variant="ghost" size="sm"><a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={project.title + " GitHub repository"}><Github className="size-4" /> Source</a></Button>
              {project.liveUrl ? <Button asChild variant="ghost" size="sm"><a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={project.title + " live demo"}>Live build <ArrowUpRight className="size-4" /></a></Button> : <span className="ml-auto font-mono text-[8px] uppercase tracking-[0.13em] text-[#71666C]">Record / open</span>}
            </div>
          </motion.article>
        ))}
      </div>
      <ProjectModal project={selected} open={selected !== null} onOpenChange={(open) => !open && setSelected(null)} />
    </section>
  );
}
