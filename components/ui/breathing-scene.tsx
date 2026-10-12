"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimeSceneBackdrop } from "@/components/ui/anime-scene-backdrop";
import { corpsScene } from "@/lib/anime-art";

const petals = [
  { left: "8%", top: "18%", size: 10, delay: 0, duration: 13 },
  { left: "27%", top: "11%", size: 7, delay: 3, duration: 15 },
  { left: "45%", top: "25%", size: 9, delay: 1.5, duration: 12 },
  { left: "63%", top: "13%", size: 7, delay: 5, duration: 16 },
  { left: "84%", top: "27%", size: 11, delay: 2, duration: 14 },
  { left: "93%", top: "44%", size: 7, delay: 4, duration: 17 },
  { left: "36%", top: "58%", size: 6, delay: 1, duration: 12 },
  { left: "70%", top: "71%", size: 8, delay: 6, duration: 15 },
  { left: "16%", top: "67%", size: 6, delay: 2.5, duration: 14 }
];

export function BreathingScene() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" role="img" aria-label="Demon Slayer Corps-inspired night shrine, with wisteria petals and layered breathing-style effects">
      <motion.div
        className="absolute inset-[-2%]"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.035 }}
        animate={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: [1.01, 1.055, 1.01], x: [0, -5, 0] }}
        transition={reduceMotion ? { duration: 0.01 } : { opacity: { duration: 0.65 }, scale: { duration: 18, repeat: Infinity, ease: "easeInOut" }, x: { duration: 24, repeat: Infinity, ease: "easeInOut" } }}
      >
        <AnimeSceneBackdrop scene={corpsScene} className="absolute inset-0" priority />
      </motion.div>
      <div className="hero-scene-wash absolute inset-0" />
      <div className="corps-moon-glow pointer-events-none absolute inset-0" />
      <div className="breathing-trail breathing-trail-water absolute" />
      <div className="breathing-trail breathing-trail-flame absolute" />
      <div className="breathing-trail breathing-trail-wisteria absolute" />
      <div className="pointer-events-none absolute inset-0 z-10">
        {petals.map((petal, index) => (
          <motion.span
            key={index}
            className="corps-petal absolute block"
            style={{ left: petal.left, top: petal.top, width: petal.size, height: petal.size * .62 }}
            animate={reduceMotion ? undefined : { y: ["-3vh", "84vh"], x: [0, index % 2 === 0 ? 52 : -38, index % 2 === 0 ? -20 : 31], rotate: [0, 135, 320], opacity: [0, .8, .65, 0] }}
            transition={{ duration: petal.duration, delay: petal.delay, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute right-[6%] top-[18%] z-10 hidden text-right lg:block">
        <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#D85A6A]">Demon Slayer Corps</p>
        <p className="mt-3 font-serif text-4xl text-[#E9D9F0]">鬼殺隊</p>
        <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.22em] text-[#B5A0D1]">Total concentration</p>
      </div>
      <div className="pointer-events-none absolute bottom-7 left-5 z-20 hidden items-center gap-3 lg:flex">
        <span className="h-10 w-px bg-gradient-to-b from-[#C83F55] to-transparent" />
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/65">Corps archive · breathing styles</span>
      </div>
    </div>
  );
}
