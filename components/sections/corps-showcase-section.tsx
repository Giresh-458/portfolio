"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Flame, Waves, Wind } from "lucide-react";
import { corpsScene, forgeScene, wisteriaScene } from "@/lib/anime-art";
import { AnimeSceneBackdrop } from "@/components/ui/anime-scene-backdrop";

const panels = [
  {
    scene: corpsScene,
    label: "01 / WATER BREATHING",
    title: "Move with intent.",
    description: "Quiet focus. Relentless iteration.",
    icon: Waves,
    className: "corps-showcase-feature"
  },
  {
    scene: forgeScene,
    label: "02 / FLAME BREATHING",
    title: "Build with resolve.",
    description: "Turn ideas into systems that hold up.",
    icon: Flame,
    className: "corps-showcase-side"
  },
  {
    scene: wisteriaScene,
    label: "03 / INSECT BREATHING",
    title: "Precision matters.",
    description: "Make every detail earn its place.",
    icon: Wind,
    className: "corps-showcase-side"
  }
];

export function CorpsShowcaseSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="corps" className="corps-showcase-section relative scroll-mt-20 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 corps-showcase-atmosphere" />
      <div className="container relative z-10 py-16 md:py-24">
        <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D33E52]">
              <span className="h-px w-8 bg-[#F5B82E]" />
              The Corps · 呼吸
            </p>
            <h2 className="max-w-3xl text-balance font-display text-5xl uppercase leading-[0.88] tracking-[0.01em] text-[#F7EBDD] md:text-7xl">
              Many <span className="text-[#D33E52]">breathing</span> styles. One craft.
            </h2>
          </div>
          <p className="max-w-sm border-l border-[#D9BBA9]/30 pl-4 text-sm leading-6 text-[#BEB2B4] md:text-base">
            A little anime. A lot of intent. A portfolio built with the same focus as a perfectly timed strike.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.18fr_.82fr]">
          {panels.map((panel, index) => {
            const Icon = panel.icon;
            const scene = panel.scene;
            return (
              <motion.article
                key={panel.label}
                initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.1 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className={"corps-showcase-card group relative isolate overflow-hidden border border-white/10 " + panel.className}
                style={{ ["--scene-accent" as string]: scene.accent }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <AnimeSceneBackdrop scene={scene} className="absolute inset-0" priority={index === 0} imageClassName="corps-showcase-image" />
                </div>
                <div aria-hidden="true" className="absolute inset-0 corps-showcase-vignette" />
                <div aria-hidden="true" className="absolute inset-0 corps-showcase-grain" />
                <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7 md:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex items-center gap-2 border border-white/20 bg-[#07070B]/55 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.19em] text-[#F4E6D7] backdrop-blur-md">
                      <span className="size-1.5 rounded-full" style={{ backgroundColor: scene.accent, boxShadow: "0 0 12px " + scene.accent }} />
                      {panel.label}
                    </span>
                    <span className="hidden border border-white/15 bg-black/30 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/65 backdrop-blur-md sm:inline-flex">
                      {scene.label}
                    </span>
                  </div>
                  <div className="max-w-[34rem]">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.19em]" style={{ color: scene.accent }}>
                      <Icon className="size-4" />
                      {scene.style}
                    </div>
                    <h3 className="max-w-[14ch] font-display text-4xl uppercase leading-[0.88] tracking-[0.015em] text-white drop-shadow-[0_3px_22px_rgba(0,0,0,0.65)] sm:text-5xl md:text-6xl">
                      {panel.title}
                    </h3>
                    <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/20 pt-4">
                      <p className="text-sm leading-6 text-white/80 sm:text-base">{panel.description}</p>
                      <ArrowDownRight className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" style={{ color: scene.accent }} />
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: scene.accent }} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
