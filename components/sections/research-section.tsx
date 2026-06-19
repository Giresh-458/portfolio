"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import { publications } from "@/lib/data";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export function ResearchSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="research" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="Originals" title="Research engineered for evidence." description="Work-in-progress publications documented with explicit methodology, measurable findings, and honest next questions." />
      <motion.div variants={reduceMotion ? undefined : stagger} initial={reduceMotion ? undefined : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={viewport} className="grid gap-5 lg:grid-cols-2">
        {publications.map((publication) => (
          <motion.article key={publication.id} variants={reduceMotion ? undefined : fadeUp}>
            <GlassCard className="group h-full p-7 transition hover:border-netflix/35 md:p-9">
              <div className="flex items-start justify-between gap-6">
                <FileText className="size-8 text-netflix" />
                <span className="rounded border border-netflix/30 bg-netflix/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-netflix">Original research</span>
              </div>
              <p className="mt-7 text-sm font-medium text-zinc-500">{publication.venue} · {publication.year}</p>
              <h3 className="mt-2 text-2xl font-black leading-tight tracking-tight text-white">{publication.title}</h3>
              <div className="mt-6 space-y-4 text-sm leading-6 text-zinc-400">
                <p><strong className="text-zinc-200">Abstract — </strong>{publication.abstract}</p>
                <p><strong className="text-zinc-200">Methodology — </strong>{publication.methodology}</p>
                <p><strong className="text-zinc-200">Results — </strong>{publication.results}</p>
                <p><strong className="text-zinc-200">Future work — </strong>{publication.futureWork}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {publication.tech.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}
              </div>
              <Button asChild variant="outline" className="mt-8">
                <a href={`/api/download/${publication.id}`} download><Download className="size-4" /> Download PDF</a>
              </Button>
            </GlassCard>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
