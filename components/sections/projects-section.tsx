"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, Github } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "@/components/project-modal";
import { SectionHeader } from "@/components/ui/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="Selected work" title="Projects built around real problems." description="A selection of AI and full-stack projects, with emphasis on the problem, architecture, and engineering decisions." />
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <p className="text-sm text-[#A5A49D]">Selected projects</p>
        <span className="text-sm tabular-nums text-[#888780]">{String(projects.length).padStart(2, "0")} projects</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{ duration: 0.45, delay: reduceMotion ? 0 : (index % 3) * 0.06 }}
            className="portfolio-card flex h-full flex-col overflow-hidden rounded-2xl"
          >
            <button type="button" onClick={() => setSelected(project)} className="block flex-1 text-left" aria-label={"View details for " + project.title}>
              <div className="project-card-top relative flex aspect-[16/10] flex-col justify-between overflow-hidden p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-[#B8B7B1]">Project {String(index + 1).padStart(2, "0")}</span>
                  <Code2 className="size-5 text-[#F1C75B]" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm font-medium text-[#F1C75B]">{project.eyebrow}</p>
                  <h3 className="mt-2 max-w-sm text-xl font-semibold leading-snug tracking-tight text-[#F3F2EC]">{project.title}</h3>
                </div>
                <div aria-hidden="true" className="project-card-mark absolute -right-8 -top-8 size-48 rounded-full border border-white/[0.06]" />
                <div aria-hidden="true" className="project-card-mark absolute -right-1 top-5 size-32 rounded-full border border-[#F1C75B]/[0.11]" />
              </div>
              <div className="px-5 pb-5 pt-5 sm:px-6">
                <p className="line-clamp-3 text-sm leading-6 text-[#B4B3AD]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{project.tech.slice(0, 4).map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
              </div>
            </button>
            <div className="flex items-center gap-2 border-t border-white/10 px-4 py-3">
              <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={project.title + " GitHub repository"} className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-[#BDBCB5] transition hover:bg-white/[0.05] hover:text-[#F1C75B]"><Github className="size-4" /> Source</a>
              {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={project.title + " live demo"} className="ml-auto inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-[#BDBCB5] transition hover:bg-white/[0.05] hover:text-[#F1C75B]">Live demo <ArrowUpRight className="size-4" /></a> : <span className="ml-auto text-xs text-[#77766F]">No live demo</span>}
            </div>
          </motion.article>
        ))}
      </div>
      <ProjectModal project={selected} open={selected !== null} onOpenChange={(open) => !open && setSelected(null)} />
    </section>
  );
}
