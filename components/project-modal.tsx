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
                className="fixed inset-0 z-[100] bg-[rgba(22,19,14,0.42)] backdrop-blur-[2px]"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                className="fixed left-1/2 top-1/2 z-[101] max-h-[86vh] w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-ink/80 bg-paper"
              >
                <div className="flex items-start justify-between gap-5 border-b border-[var(--rule-strong)] px-6 py-5 md:px-9">
                  <div>
                    <p className="mono mb-2">{project.eyebrow}</p>
                    <Dialog.Title className="display text-[clamp(1.5rem,3.4vw,2.15rem)] text-ink">
                      {project.title}
                    </Dialog.Title>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="grid size-8 shrink-0 place-items-center border border-[var(--rule-strong)] text-ink-soft transition-colors hover:border-ink hover:text-vermilion"
                      aria-label="Close project details"
                    >
                      <X className="size-4" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="grid gap-9 px-6 py-7 md:grid-cols-[1.5fr_1fr] md:px-9">
                  <div className="space-y-5">
                    {details
                      .filter((entry) => Boolean(entry[1]?.trim()))
                      .map(([label, value]) => (
                        <div key={label}>
                          <h3 className="mono mb-1.5 text-vermilion">{label}</h3>
                          <p className="text-[0.95rem] leading-[1.68] text-ink-soft">{value}</p>
                        </div>
                      ))}
                  </div>

                  <aside className="md:border-l md:border-[var(--rule)] md:pl-8">
                    <h3 className="mono mb-3 text-vermilion">contributions</h3>
                    <ul className="space-y-2.5">
                      {project.contributions.map((item) => (
                        <li key={item} className="flex gap-2.5 text-[0.9rem] leading-[1.6] text-ink-soft">
                          <span className="mt-2 h-px w-2 shrink-0 bg-vermilion" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 border-t border-[var(--rule)] pt-4">
                      <p className="mono mb-2">stack</p>
                      <p className="font-mono text-[10.5px] leading-[1.9] text-ink-soft">
                        {project.tech.join(" · ")}
                      </p>
                    </div>

                    <div className="mt-6 grid gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-ink px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.13em] text-ink transition-colors hover:bg-ink hover:text-paper"
                      >
                        <Github className="size-3.5" /> source
                      </a>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-vermilion px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.13em] text-[#f8f4ea] transition-opacity hover:opacity-90"
                        >
                          <ExternalLink className="size-3.5" /> live
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
