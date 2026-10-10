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
    <section id="projects" className="section-shell section-projects scroll-mt-20">
      <SectionHeader eyebrow="Mission archive · 任務記録" title="Real systems. Real constraints." description="Each card is a record of a problem, the architecture behind it, and the engineering decisions that made it work." />
      <div className="mb-8 flex items-center justify-between border-y border-[#D3A88C]/15 py-3 font-mono text-[9px] uppercase tracking-[0.22em] text-[#AFA0A1]">
        <span>Corps engineering records</span><span className="hidden sm:inline">AI systems / Software / Experiments</span><span className="text-[#E85A60]">{String(projects.length).padStart(2, "0")} FILES</span>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article key={project.id} initial={reduceMotion ? undefined : { opacity: 0, y: 20 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: 0.48, delay: reduceMotion ? 0 : (index % 3) * .07 }} whileHover={reduceMotion ? undefined : { y: -5 }} className="mission-card group flex h-full flex-col overflow-hidden border border-[#D05A55]/25 transition-colors duration-300 hover:border-[#EF4A51]/65">
            <button type="button" onClick={() => setSelected(project)} className="block flex-1 text-left" aria-label={"Open mission record for " + project.title}>
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[#D3A88C]/12 bg-[#0A0D16]">
                <Image src={project.image} alt="" fill className="object-cover transition duration-700 group-hover:scale-[1.055]" sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0910]/90 via-transparent to-[#090A10]/10" />
                <div className="absolute left-4 top-4 flex items-center gap-2 border border-[#E7C6AF]/25 bg-[#08080D]/75 px-3 py-1.5 backdrop-blur-sm">
                  <span className="size-1.5 bg-[#E3444D]" /><span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#EBD9C9]">Mission {String(index + 1).padStart(2, "0")}</span>
                </div>
                <span className="absolute bottom-4 left-4 right-4 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#F4CEB5]">{project.eyebrow}</span>
                <span className="absolute right-4 top-4 grid size-8 place-items-center border border-white/20 bg-black/40 text-white opacity-0 transition group-hover:opacity-100"><ArrowUpRight className="size-4" /></span>
              </div>
              <div className="px-5 pb-5 pt-5">
                <h3 className="flex items-start justify-between gap-3 text-lg font-semibold leading-snug tracking-tight text-[#F5EBDD]">{project.title}<ArrowUpRight className="mt-1 size-4 shrink-0 text-[#42CDE5] opacity-65 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" /></h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#B3A8AB]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{project.tech.slice(0, 4).map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
              </div>
            </button>
            <div className="flex items-center gap-2 border-t border-[#D3A88C]/15 bg-[#07070C]/45 px-4 py-3">
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
