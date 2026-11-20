"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "@/components/project-modal";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="section-index">01 — selected systems</p>
            <h2 className="display mt-6 max-w-[22ch] text-[clamp(2.1rem,4.4vw,3.4rem)] text-ink">
              Four systems, each solving the part that usually breaks.
            </h2>
          </div>
          <p className="mono max-w-[16rem] leading-[1.9] text-ink-faint">
            retrieval that abstains
            <br />
            tools that stay bounded
            <br />
            execution that waits
          </p>
        </div>

        <div className="mt-12">
          {projects.map((project, index) => (
            <article key={project.id} className="index-row reveal" style={{ ["--d" as string]: `${index * 55}ms` }}>
              <span className="index-num">{String(index + 1).padStart(2, "0")}</span>

              <div className="min-w-0">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="group block text-left"
                  aria-label={`Open details for ${project.title}`}
                >
                  <h3 className="index-title group-hover:text-vermilion transition-colors">
                    {project.title}
                  </h3>
                </button>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                  {project.eyebrow}
                </p>
              </div>

              <div className="flex items-center gap-4 justify-self-end">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={project.title + " source on GitHub"}
                  className="text-ink-faint transition-colors hover:text-ink"
                >
                  <Github className="size-4" />
                </a>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mono flex items-center gap-1 text-vermilion hover:underline"
                  >
                    live <ArrowUpRight className="size-3" />
                  </a>
                ) : (
                  <span className="mono text-ink-faint">in progress</span>
                )}
              </div>

              {/* Spec that opens on hover/focus — CSS only, no JS needed. */}
              <div className="index-spec">
                <div>
                  <div className="grid gap-x-8 gap-y-3 pb-5 pt-3 sm:grid-cols-2">
                    <p className="body-text text-[0.95rem] leading-[1.65]">{project.description}</p>
                    <div>
                      <p className="mono mb-2">stack</p>
                      <p className="font-mono text-[11px] leading-[1.9] text-ink-soft">
                        {project.tech.join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} open={selected !== null} onOpenChange={(open) => !open && setSelected(null)} />
    </section>
  );
}
