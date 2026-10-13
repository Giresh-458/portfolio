"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/ui/tech-badge";
import type { Project } from "@/types";
import { AnimeSceneBackdrop } from "@/components/ui/anime-scene-backdrop";
import { corpsScenes } from "@/lib/anime-art";
import { projects } from "@/lib/data";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  const reduceMotion = useReducedMotion();
  const details: Array<[string, string | undefined]> = project
    ? [
        ["Problem", project.problem],
        ["Architecture", project.architecture],
        ["Dataset", project.dataset],
        ["Models & tools", project.models],
        ["Results", project.results]
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
                className="fixed inset-0 z-100 bg-black/80 backdrop-blur-md"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="glass-strong fixed left-1/2 top-1/2 z-101 max-h-[90vh] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl shadow-2xl"
              >
                <div className="relative aspect-16/6 min-h-64 overflow-hidden">
                  <AnimeSceneBackdrop
                    scene={{
                      ...corpsScenes[Math.max(0, projects.findIndex((item) => item.id === project.id)) % corpsScenes.length],
                      id: project.id,
                      label: project.title,
                      image: project.liveUrl ? project.image : corpsScenes[Math.max(0, projects.findIndex((item) => item.id === project.id)) % corpsScenes.length].image,
                      fallbacks: [corpsScenes[Math.max(0, projects.findIndex((item) => item.id === project.id)) % corpsScenes.length].image, ...corpsScenes[Math.max(0, projects.findIndex((item) => item.id === project.id)) % corpsScenes.length].fallbacks]
                    }}
                    className="absolute inset-0"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/20 to-transparent" />
                  <Dialog.Close asChild>
                    <Button variant="outline" size="icon" className="absolute right-4 top-4 rounded-full bg-black/50" aria-label="Close project details">
                      <X className="size-5" />
                    </Button>
                  </Dialog.Close>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-netflix">{project.eyebrow}</p>
                    <Dialog.Title className="font-display text-3xl font-black tracking-tight text-white md:text-5xl">
                      {project.title}
                    </Dialog.Title>
                  </div>
                </div>
                <div className="grid gap-8 p-6 md:grid-cols-[1.5fr_1fr] md:p-8">
                  <div className="space-y-6">
                    {details.filter((entry) => Boolean(entry[1]?.trim())).map(([label, value]) => (
                      <div key={label}>
                        <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-white">{label}</h3>
                        <p className="leading-7 text-zinc-400">{value}</p>
                      </div>
                    ))}
                  </div>
                  <aside>
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Contributions</h3>
                    <ul className="space-y-3 text-sm leading-6 text-zinc-400">
                      {project.contributions.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-netflix" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}
                    </div>
                    <div className="mt-8 grid gap-3">
                      <Button asChild>
                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                          <Github className="size-4" /> View source
                        </a>
                      </Button>
                      {project.liveUrl ? (
                        <Button asChild variant="outline">
                          <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            <ExternalLink className="size-4" /> Live experience
                          </a>
                        </Button>
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
