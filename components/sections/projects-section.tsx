"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ProjectModal } from "@/components/project-modal";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();
  return (
    <section id="projects" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="Selected work" title="Projects, from model to product." description="A mix of AI systems and full-stack applications. Open a project to see the problem, architecture and decisions behind it." />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article key={project.id} initial={reduceMotion ? undefined : { opacity: 0, y: 16 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: 0.42, delay: reduceMotion ? 0 : (index % 3) * 0.06 }} whileHover={reduceMotion ? undefined : { y: -5 }} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.085] bg-[#0D131E] transition-colors duration-300 hover:border-[#54CBD4]/45">
            <button type="button" onClick={() => setSelected(project)} className="block flex-1 text-left" aria-label={"View details for " + project.title}>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#101925]">
                <Image src={project.image} alt="" fill className="object-cover transition duration-700 group-hover:scale-[1.035]" sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D131E]/80 via-transparent to-black/10" />
                <span className="absolute bottom-4 left-4 rounded-md border border-white/15 bg-[#080B12]/75 px-3 py-1.5 text-[10px] font-medium tracking-wide text-[#D7E2EC] backdrop-blur-sm">{project.eyebrow}</span>
                <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-white/20 bg-[#080B12]/55 text-white opacity-0 backdrop-blur transition group-hover:opacity-100"><ArrowUpRight className="size-4" /></span>
              </div>
              <div className="px-5 pb-5 pt-5">
                <h3 className="flex items-start justify-between gap-3 text-lg font-semibold leading-snug tracking-tight text-[#F4F5F7]">{project.title}<ArrowUpRight className="mt-1 size-4 shrink-0 text-[#61D3DC] opacity-65 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" /></h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#9FAABA]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{project.tech.slice(0, 4).map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
              </div>
            </button>
            <div className="flex items-center gap-2 border-t border-white/[0.07] px-4 py-3">
              <Button asChild variant="ghost" size="sm"><a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={project.title + " GitHub repository"}><Github className="size-4" /> Code</a></Button>
              {project.liveUrl ? <Button asChild variant="ghost" size="sm"><a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={project.title + " live demo"}>Live demo <ArrowUpRight className="size-4" /></a></Button> : <span className="ml-auto text-[11px] text-[#718094]">Open project for details</span>}
            </div>
          </motion.article>
        ))}
      </div>
      <ProjectModal project={selected} open={selected !== null} onOpenChange={(open) => !open && setSelected(null)} />
    </section>
  );
}
