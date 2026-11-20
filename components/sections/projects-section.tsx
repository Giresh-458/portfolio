"use client";

import { ArrowUpRight, CircleDot, Github } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { ProjectModal } from "@/components/project-modal";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

const ACCENTS = ["#7bf1a8", "#6ec7ff", "#ff8a5b", "#ffc861", "#a8a4ff", "#7bf1a8", "#6ec7ff"];

/**
 * Each plate diagrams the project's actual shape rather than a generic motif:
 * an agent loop, a fusion pipeline, a crawl fan-out, a request path, and so on.
 * Different shapes are the point — identical cards read as template output.
 */
type Motif = "loop" | "fusion" | "fanout" | "layers" | "timeline" | "stack" | "chain";

const MOTIFS: Motif[] = ["loop", "fusion", "fanout", "layers", "timeline", "stack", "chain"];

function MotifSvg({ motif, accent }: { motif: Motif; accent: string }) {
  const dim = accent + "55";

  if (motif === "loop") {
    // Corrective RAG: retrieve -> grade -> rewrite -> back
    return (
      <svg viewBox="0 0 100 56" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M22 34 C30 20, 48 20, 56 30 S74 42, 82 30" fill="none" stroke={accent} strokeWidth="0.5" strokeLinecap="round" />
        <path d="M82 30 C74 46, 40 48, 26 40" fill="none" stroke={dim} strokeWidth="0.4" strokeDasharray="2 2" />
        {[[22,34],[56,30],[82,30],[26,40]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r={i===1?2.2:1.5} fill={accent} opacity={i===0?1:0.85} />
        ))}
      </svg>
    );
  }

  if (motif === "fusion") {
    // BM25 + dense streams merging into one ranked list
    return (
      <svg viewBox="0 0 100 56" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M10 16 H40 Q54 16 60 28" fill="none" stroke={dim} strokeWidth="0.45" />
        <path d="M10 40 H40 Q54 40 60 28" fill="none" stroke={dim} strokeWidth="0.45" />
        <path d="M60 28 H90" fill="none" stroke={accent} strokeWidth="0.6" />
        {[16,24,32,40,46].map((y,i)=>(<line key={i} x1="66" y1={24+i*2} x2="86" y2={24+i*2} stroke={accent} strokeWidth="0.4" opacity={0.75-i*0.1} />))}
        <circle cx="60" cy="28" r="2.4" fill={accent} />
      </svg>
    );
  }

  if (motif === "fanout") {
    // Crawler fanning across sources
    return (
      <svg viewBox="0 0 100 56" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="20" cy="28" r="2.6" fill={accent} />
        {[[48,10],[52,22],[50,34],[46,46],[76,16],[80,30],[74,44]].map(([x,y],i)=>(
          <g key={i}>
            <line x1="20" y1="28" x2={x} y2={y} stroke={dim} strokeWidth="0.3" />
            <rect x={x-2} y={y-1.2} width="4" height="2.4" fill={accent} opacity={0.8} />
          </g>
        ))}
      </svg>
    );
  }

  if (motif === "layers") {
    // Full-stack: client -> api -> db
    return (
      <svg viewBox="0 0 100 56" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {[0,1,2].map((i)=>(
          <g key={i}>
            <rect x={18+i*3} y={12+i*11} width="64" height="9" rx="1" fill="none" stroke={i===1?accent:dim} strokeWidth={i===1?0.6:0.35} />
            <line x1={20+i*3} y1={16.5+i*11} x2={34+i*3} y2={16.5+i*11} stroke={accent} strokeWidth="0.3" opacity={0.6} />
          </g>
        ))}
      </svg>
    );
  }

  if (motif === "timeline") {
    // Mood over time
    return (
      <svg viewBox="0 0 100 56" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M10 40 L24 28 L38 34 L52 18 L66 26 L80 14 L92 22" fill="none" stroke={accent} strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 40 L24 28 L38 34 L52 18 L66 26 L80 14 L92 22 L92 48 L10 48 Z" fill={accent} opacity="0.1" />
        {[[24,28],[52,18],[80,14]].map(([x,y],i)=>(<circle key={i} cx={x} cy={y} r="1.4" fill={accent} />))}
      </svg>
    );
  }

  if (motif === "stack") {
    // Gradebook rows
    return (
      <svg viewBox="0 0 100 56" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {[12,22,32,42].map((y,i)=>(
          <g key={y}>
            <rect x="14" y={y} width="30" height="3" rx="1.5" fill={dim} />
            <rect x="14" y={y} width={[18,26,11,22][i]} height="3" rx="1.5" fill={accent} opacity={0.85} />
            <rect x="52" y={y} width="34" height="3" rx="1.5" fill={dim} opacity={0.5} />
          </g>
        ))}
      </svg>
    );
  }

  // chain: proof-of-work blocks
  return (
    <svg viewBox="0 0 100 56" className="absolute inset-0 h-full w-full" aria-hidden="true">
      {[[14,20],[36,26],[58,18],[80,28]].map(([x,y],i)=>(
        <g key={i}>
          {i < 3 ? <line x1={x+8} y1={y+4} x2={[36,58,80][i]} y2={[26,18,28][i]+4} stroke={dim} strokeWidth="0.4" strokeDasharray="1.6 1.6" /> : null}
          <rect x={x} y={y} width="9" height="9" rx="1" fill="none" stroke={accent} strokeWidth="0.5" opacity={0.9-i*0.14} />
          <circle cx={x+4.5} cy={y+4.5} r="1.3" fill={accent} opacity={0.9-i*0.14} />
        </g>
      ))}
    </svg>
  );
}

function Plate({ index, accent }: { index: number; accent: string }) {
  return (
    <div
      className="plate relative aspect-[16/9] w-full"
      style={{
        ["--plate-accent" as string]: accent,
        ["--plate-x" as string]: `${28 + (index % 3) * 14}%`,
        ["--plate-y" as string]: `${34 + (index % 2) * 16}%`
      }}
    >
      <MotifSvg motif={MOTIFS[index % MOTIFS.length]} accent={accent} />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#070a0e] to-transparent" />
    </div>
  );
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (p: Project) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const accent = ACCENTS[index % ACCENTS.length];

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -py * 7, y: px * 9 });
  };

  return (
    <div className="stage-3d h-full">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        className="card-3d ticked panel group relative flex h-full flex-col overflow-hidden"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <button type="button" onClick={() => onOpen(project)} className="block text-left" aria-label={`Open details for ${project.title}`}>
          <div className="relative overflow-hidden">
            <Plate index={index} accent={accent} />
            <span
              className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-[2px] border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] backdrop-blur-sm"
              style={{ borderColor: accent + "55", color: accent, background: "rgba(5,7,10,.72)" }}
            >
              <CircleDot className="size-2.5" />
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="lift-sm p-5">
            <p className="mono-label mb-2">{project.eyebrow}</p>
            <h3 className="flex items-start justify-between gap-3 text-[17px] font-medium leading-snug tracking-[-0.01em] text-ink">
              {project.title}
              <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
            </h3>
            <p className="mt-2.5 line-clamp-3 text-[13.5px] leading-[1.65] text-ink-dim">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((tech) => (
                <span key={tech} className="rounded-[2px] border border-[rgba(150,200,195,.14)] px-2 py-0.5 font-mono text-[10px] text-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </button>

        <div className="mt-auto flex items-center gap-3 border-t border-[rgba(150,200,195,.1)] px-4 py-3">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition hover:text-signal">
            <Github className="size-3.5" /> source
          </a>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.14em] text-signal transition hover:text-[#96ffc0]">
              live <ArrowUpRight className="size-3" />
            </a>
          ) : (
            <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.14em] text-[#3d4d51]">in progress</span>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="shell scroll-mt-16">
      <div className="shell-inner">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mono-label mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-signal/60" /> selected systems
            </p>
            <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink">
              Systems built around the part
              <br className="hidden sm:block" /> that usually breaks.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-[1.7] text-muted">
            Retrieval that abstains, tool calls that stay bounded, and execution that waits for a human.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="reveal"
              style={{ ["--d" as string]: `${(index % 3) * 70}ms` }}
            >
              <ProjectCard project={project} index={index} onOpen={setSelected} />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} open={selected !== null} onOpenChange={(open) => !open && setSelected(null)} />
    </section>
  );
}
