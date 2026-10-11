"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimeSceneBackdrop } from "@/components/ui/anime-scene-backdrop";
import { zenitsuScene } from "@/lib/anime-art";

export function BreathingScene() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="zenitsu-hero-art pointer-events-none absolute inset-y-0 right-0 z-0 w-full overflow-hidden md:w-[72%]">
      <AnimeSceneBackdrop scene={zenitsuScene} className="absolute inset-0" priority imageClassName="zenitsu-hero-image" />
      <div className="zenitsu-image-wash absolute inset-0" />
      <div className="zenitsu-image-fade absolute inset-0" />
      <motion.svg className="absolute right-[8%] top-[12%] h-[76%] w-[46%] opacity-40" viewBox="0 0 420 620" fill="none" preserveAspectRatio="xMidYMid meet">
        <motion.path
          d="M270 0 L176 152 L226 187 L113 345 L165 372 L48 568"
          stroke="#F1C75B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          initial={reduceMotion ? { pathLength: 1, opacity: 0.35 } : { pathLength: 0, opacity: 0 }}
          animate={reduceMotion ? undefined : { pathLength: [0.25, 1, 0.25], opacity: [0.12, 0.62, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
      <div className="absolute bottom-0 right-0 h-40 w-full bg-gradient-to-t from-[#0A0A0C] to-transparent" />
    </div>
  );
}
