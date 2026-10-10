"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Play, ScrollText } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ProjectModal } from "@/components/project-modal";
import { Button } from "@/components/ui/button";
import { NetflixRow } from "@/components/ui/netflix-row";
import { SectionHeader } from "@/components/ui/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section-shell scroll-mt-20">
      <SectionHeader
        eyebrow="Mission archive · classified builds"
        title="Proof is in the work."
        description="Each dossier opens into the actual problem, architecture, and engineering decisions behind the build. No imaginary metrics. Just the work."
      />
      <div className="mb-6 flex items-center gap-3 border-y border-white/10 py-3">
        <span className="haori-stamp size-5 shrink-0 border border-[#85A777]/40" aria-hidden />
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#B5C4AB] sm:text-[10px]">Field records / AI systems / machine learning / full-stack</p>
        <span className="ml-auto hidden font-mono text-[9px] text-[#E85D47] sm:block">OPEN DOSSIER ↗</span>
      </div>
      <NetflixRow ariaLabel="Project mission dossiers">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            layout
            whileHover={reduceMotion ? undefined : { y: -7, rotateX: 1.1 }}
            transition={{ type: "spring", stiffness: 250, damping: 24 }}
            style={{ transformPerspective: 1200 }}
            className="mission-card group relative w-[86vw] max-w-[520px] shrink-0 snap-center overflow-hidden border border-[#B8C3AF]/15 shadow-card transition duration-500 hover:border-[#E85D47]/50 md:w-[520px]"
          >
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[3px] bg-gradient-to-b from-[#E85D47] via-[#6D9869] to-transparent opacity-70 transition group-hover:opacity-100" />
            <button type="button" onClick={() => setSelected(project)} className="block w-full text-left" aria-label={`Open dossier for ${project.title}`}>
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
                <Image src={project.image} alt="" fill className="object-cover transition duration-700 group-hover:scale-[1.045]" sizes="(max-width: 768px) 86vw, 520px" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B100C] via-[#0B100C]/20 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(145,178,130,.08),transparent_45%,rgba(220,72,52,.1))]" />
                <div className="pointer-events-none absolute -left-1/2 top-[-80%] h-[250%] w-1/3 rotate-[24deg] bg-gradient-to-r from-transparent via-[#F4E9D5]/15 to-transparent opacity-0 transition duration-1000 group-hover:translate-x-[550%] group-hover:opacity-100" />
                <div className="absolute left-4 top-4 flex items-center gap-2 border border-white/20 bg-[#080B08]/75 px-3 py-2 backdrop-blur-md">
                  <ScrollText className="size-3.5 text-[#E85D47]" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#F3EEE3]">Mission {String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <span className="max-w-[80%] font-mono text-[9px] uppercase tracking-[0.16em] text-[#D2DCC9]">{project.eyebrow}</span>
                  <span className="grid size-10 shrink-0 place-items-center border border-[#F3EEE3]/45 bg-[#E85D47] text-[#FFF7E9] opacity-0 transition duration-300 group-hover:opacity-100">
                    <Play className="size-4 fill-current" />
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-px w-7 bg-[#E85D47]" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A6B39E]">Engineering record</span>
                </div>
                <h3 className="flex items-start gap-2 text-xl font-bold leading-tight tracking-tight text-[#F3EEE3] sm:text-2xl">
                  {project.title}
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-[#E85D47] opacity-45 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#A7ADA0]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}
                </div>
              </div>
            </button>
            <div className="flex gap-2 border-t border-white/10 px-5 py-3">
              <Button asChild variant="ghost" size="sm">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}><Github className="size-4" /> Source scroll</a>
              </Button>
              {project.liveUrl ? (
                <Button asChild variant="ghost" size="sm">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}><ArrowUpRight className="size-4" /> Live build</a>
                </Button>
              ) : null}
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 size-7 border-b-2 border-r-2 border-[#6E9364]/45" />
          </motion.article>
        ))}
      </NetflixRow>
      <ProjectModal project={selected} open={selected !== null} onOpenChange={(open) => !open && setSelected(null)} />
    </section>
  );
}
