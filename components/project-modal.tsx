"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  const reduceMotion = useReducedMotion();

  const details: Array<[string, string | undefined]> = project
    ? [
        ["problem", project.problem],
        ["architecture", project.architecture],
        ["dataset", project.dataset],
        ["models & tools", project.models],
        ["results", project.results]
      ]
    : [];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && project ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                className="fixed inset-0 z-[100] bg-[#020405]/88 backdrop-blur-md"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.99 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="ticked panel fixed left-1/2 top-1/2 z-[101] max-h-[88vh] w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto"
              >
                <div className="flex items-start justify-between gap-4 border-b border-[rgba(150,200,195,.12)] p-6 pr-4 md:p-8">
                  <div>
                    <p className="mono-label mb-2.5">{project.eyebrow}</p>
                    <Dialog.Title className="text-[clamp(1.35rem,3vw,2rem)] font-medium leading-[1.15] tracking-[-0.025em] text-ink">
                      {project.title}
                    </Dialog.Title>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="grid size-9 shrink-0 place-items-center rounded-[2px] border border-[rgba(150,200,195,.2)] text-muted transition hover:border-signal/50 hover:text-signal"
                      aria-label="Close project details"
                    >
                      <X className="size-4" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="grid gap-8 p-6 md:grid-cols-[1.45fr_1fr] md:p-8">
                  <div className="space-y-5">
                    {details
                      .filter((entry) => Boolean(entry[1]?.trim()))
                      .map(([label, value]) => (
                        <div key={label}>
                          <h3 className="mono-label mb-2 text-signal/85">{label}</h3>
                          <p className="text-[13.5px] leading-[1.7] text-ink-dim">{value}</p>
                        </div>
                      ))}

                    <div className="flex flex-wrap gap-1.5 border-t border-[rgba(150,200,195,.1)] pt-5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-[2px] border border-[rgba(150,200,195,.14)] px-2 py-0.5 font-mono text-[10px] text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <aside className="md:border-l md:border-[rgba(150,200,195,.1)] md:pl-8">
                    <h3 className="mono-label mb-3 text-signal/85">contributions</h3>
                    <ul className="space-y-3">
                      {project.contributions.map((item) => (
                        <li key={item} className="flex gap-2.5 text-[13px] leading-[1.65] text-ink-dim">
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-signal/70" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 grid gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-[3px] border border-[rgba(150,200,195,.22)] px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition hover:border-signal/50 hover:text-signal"
                      >
                        <Github className="size-3.5" /> view source
                      </a>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-signal px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] font-semibold text-[#04100a] transition hover:bg-[#96ffc0]"
                        >
                          <ExternalLink className="size-3.5" /> live demo
                        </a>
                      ) : null}
                    </div>
                  </aside>
                </div>

                <Dialog.Description className="sr-only">{project.description}</Dialog.Description>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}
