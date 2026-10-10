"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Play } from "lucide-react";
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
      <SectionHeader eyebrow="Selected missions" title="Every build has a story." description="Open a project to explore the problem, architecture, and engineering choices behind it." />
      <NetflixRow ariaLabel="Featured projects">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            layout
            whileHover={reduceMotion ? undefined : { y: -9, scale: 1.012, rotateX: 1.2 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            style={{ transformPerspective: 1200 }}
            className="group relative w-[86vw] max-w-[520px] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/[0.09] bg-surface shadow-card transition-colors duration-500 hover:border-[#75E0D9]/35 md:w-[520px]"
          >
            <button type="button" onClick={() => setSelected(project)} className="block w-full text-left" aria-label={`Open details for ${project.title}`}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={project.image} alt="" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 86vw, 520px" />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" animate={reduceMotion ? undefined : { opacity: [0.9, 1, 0.9] }} transition={{ duration: 5 + index * 0.25, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div aria-hidden className="pointer-events-none absolute -left-1/2 top-[-80%] h-[250%] w-1/3 rotate-[24deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100" animate={reduceMotion ? undefined : { x: ["0%", "550%"] }} transition={{ duration: 1.1, ease: "easeInOut" }} />
                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  <span className="mr-2 text-[#75E0D9]">{String(index + 1).padStart(2, "0")}</span>{project.eyebrow}
                </span>
                <span className="absolute bottom-5 right-5 grid size-12 place-items-center rounded-full bg-white text-black opacity-0 shadow-xl transition group-hover:opacity-100">
                  <Play className="size-5 fill-current" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
                  {project.title} <ArrowUpRight className="size-5 text-netflix opacity-0 transition group-hover:opacity-100" />
                </h3>
                <p className="mt-3 line-clamp-2 leading-6 text-zinc-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}
                </div>
              </div>
            </button>
            <div className="flex gap-2 border-t border-white/10 p-4">
              <Button asChild variant="ghost" size="sm">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}><Github className="size-4" /> GitHub</a>
              </Button>
              {project.liveUrl ? (
                <Button asChild variant="ghost" size="sm">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}><ArrowUpRight className="size-4" /> Live demo</a>
                </Button>
              ) : null}
            </div>
          </motion.article>
        ))}
      </NetflixRow>
      <ProjectModal project={selected} open={selected !== null} onOpenChange={(open) => !open && setSelected(null)} />
    </section>
  );
}
