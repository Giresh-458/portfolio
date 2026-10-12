"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "@/components/project-modal";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import { corpsScene } from "@/lib/anime-art";
import { AnimeSceneBackdrop } from "@/components/ui/anime-scene-backdrop";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();
  return (
    <section id="projects" className="section-shell section-projects scroll-mt-20">
      <SectionHeader eyebrow="Mission archive · 任務記録" title="Real systems. Real constraints." description="Each project is a mission record: the problem, the architecture, and the decisions behind the result." />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article key={project.id} initial={reduceMotion ? undefined : { opacity: 0, y: 22 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: 0.48, delay: reduceMotion ? 0 : (index % 3) * .07 }} whileHover={reduceMotion ? undefined : { y: -6 }} className="mission-card group flex h-full flex-col overflow-hidden border border-[#D05A55]/25 transition-colors duration-300 hover:border-[#EF4A51]/65">
            <button type="button" onClick={() => setSelected(project)} className="block flex-1 text-left" aria-label={"Open mission record for " + project.title}>
              <div className="mission-art relative aspect-16/10 overflow-hidden border-b border-[#D3A88C]/12 bg-[#0A0D16]">
                <AnimeSceneBackdrop scene={{ ...corpsScene, id: project.id, label: project.title, image: project.image, fallbacks: [corpsScene.image, ...corpsScene.fallbacks] }} className="absolute inset-0" />
                <div className="absolute inset-0 bg-linear-to-t from-[#09070E]/95 via-[#09070E]/10 to-[#090A10]/15" />
                <span className="absolute bottom-4 left-4 right-4 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#F4CEB5]">{project.eyebrow}</span>
              </div>
              <div className="px-5 pb-5 pt-5">
                <h3 className="flex items-start justify-between gap-3 text-lg font-semibold leading-snug tracking-tight text-[#F5EBDD]">{project.title}<ArrowUpRight className="mt-1 size-4 shrink-0 text-[#D33E52] opacity-65 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" /></h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#B3A8AB]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{project.tech.slice(0, 4).map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
              </div>
            </button>
            <div className="flex items-center gap-2 border-t border-[#D3A88C]/15 bg-[#07070C]/55 px-4 py-3">
              <Button asChild variant="ghost" size="sm"><a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={project.title + " GitHub repository"}><Github className="size-4" /> Source</a></Button>
              {project.liveUrl ? <Button asChild variant="ghost" size="sm"><a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={project.title + " live demo"}>Live build <ArrowUpRight className="size-4" /></a></Button> : null}
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline">
          <a href="https://github.com/Giresh-458" target="_blank" rel="noreferrer">
            Explore all repositories <ArrowUpRight className="size-4" />
          </a>
        </Button>
      </div>
      <ProjectModal project={selected} open={selected !== null} onOpenChange={(open) => !open && setSelected(null)} />
    </section>
  );
}
