"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimeSceneBackdrop } from "@/components/ui/anime-scene-backdrop";
import { zenitsuScene } from "@/lib/anime-art";

const lightningBolts = [
  { d: "M1030 20L958 148L1004 178L910 321L950 348L824 520", duration: 2.5, delay: 0 },
  { d: "M1435 72L1360 193L1398 226L1314 358", duration: 2.2, delay: 0.55 },
  { d: "M895 390L834 464L862 486L797 583", duration: 2.7, delay: 0.9 },
  { d: "M1245 365L1191 438L1217 456L1165 534", duration: 2.3, delay: 0.25 }
];

const embers = [
  { left: "7%", top: "21%", size: 6, delay: 0, duration: 12 },
  { left: "25%", top: "13%", size: 4, delay: 3, duration: 14 },
  { left: "44%", top: "29%", size: 5, delay: 1.5, duration: 13 },
  { left: "62%", top: "11%", size: 5, delay: 5, duration: 15 },
  { left: "84%", top: "24%", size: 6, delay: 2, duration: 12 },
  { left: "94%", top: "45%", size: 4, delay: 4, duration: 16 },
  { left: "37%", top: "57%", size: 4, delay: 1, duration: 11 },
  { left: "71%", top: "69%", size: 5, delay: 6, duration: 14 },
  { left: "16%", top: "67%", size: 3, delay: 2.5, duration: 15 }
];

export function BreathingScene() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" role="img" aria-label="Zenitsu Agatsuma surrounded by golden Thunder Breathing lightning">
      <motion.div
        className="absolute inset-[-2%]"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.04 }}
        animate={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: [1.01, 1.055, 1.01], x: [0, -5, 0] }}
        transition={reduceMotion ? { duration: 0.01 } : { opacity: { duration: 0.6 }, scale: { duration: 16, repeat: Infinity, ease: "easeInOut" }, x: { duration: 20, repeat: Infinity, ease: "easeInOut" } }}
      >
        <AnimeSceneBackdrop scene={zenitsuScene} className="absolute inset-0" priority />
      </motion.div>
      <div className="hero-scene-wash absolute inset-0" />
      <div className="thunder-moon-orb pointer-events-none absolute" />
      <div className="hero-moon-glow pointer-events-none absolute inset-0" />
      <svg className="scene-architecture pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 620L120 544L210 592L328 478L425 562L530 500L634 586L730 530V900H0Z" fill="#080905" fillOpacity=".8" />
        <path d="M0 730L132 650L226 690L345 620L444 680L554 608L665 689L776 634V900H0Z" fill="#070705" fillOpacity=".9" />
        <path d="M1130 900V680L1190 636L1234 667L1274 604L1320 652L1368 615L1418 660L1473 627L1532 677L1600 640V900Z" fill="#080705" />
        <path d="M1190 680V610L1250 560L1310 610V680M1170 610H1330M1205 630H1295" stroke="#F3B52F" strokeOpacity=".34" strokeWidth="3" />
        <path d="M1380 744V678L1432 632L1484 678V744M1360 678H1504M1394 700H1470" stroke="#F3B52F" strokeOpacity=".24" strokeWidth="3" />
        <path d="M0 844C150 812 257 870 394 833S645 827 796 861" stroke="#F3B52F" strokeOpacity=".25" strokeWidth="2" />
      </svg>
      <svg className="pointer-events-none absolute inset-0 z-5 h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="none" fill="none" aria-hidden="true">
        {lightningBolts.map((bolt, index) => (
          <g key={bolt.d}>
            <motion.path d={bolt.d} stroke="#FFB31C" strokeWidth={index === 0 ? 15 : 9} strokeLinejoin="round" strokeLinecap="round" opacity=".7" filter="url(#thunder-glow)" animate={reduceMotion ? undefined : { opacity: [.08, .95, .14, .8, .08], pathLength: [.25, 1, .2] }} transition={{ duration: bolt.duration, delay: bolt.delay, repeat: Infinity, ease: "easeInOut" }} />
            <motion.path d={bolt.d} stroke="#FFF4B0" strokeWidth={index === 0 ? 3.2 : 2} strokeLinejoin="round" strokeLinecap="round" animate={reduceMotion ? undefined : { opacity: [0, .95, 0] }} transition={{ duration: bolt.duration, delay: bolt.delay, repeat: Infinity, ease: "easeInOut" }} />
          </g>
        ))}
        <defs><filter id="thunder-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10" /></filter></defs>
      </svg>
      <div className="pointer-events-none absolute inset-0 z-10">
        {embers.map((ember, index) => (
          <motion.span key={index} className="thunder-ember absolute block rounded-full" style={{ left: ember.left, top: ember.top, width: ember.size, height: ember.size }} animate={reduceMotion ? undefined : { y: ["-2vh", "80vh"], x: [0, index % 2 === 0 ? 30 : -26, index % 2 === 0 ? -12 : 20], opacity: [0, .9, .75, 0], scale: [0.7, 1, 0.5] }} transition={{ duration: ember.duration, delay: ember.delay, repeat: Infinity, ease: "linear" }} />
        ))}
      </div>
      <div className="pointer-events-none absolute right-[6%] top-[18%] z-10 hidden text-right lg:block">
        <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#FFD34F]">Zenitsu Agatsuma</p>
        <p className="mt-3 font-serif text-4xl text-[#FFE9A3]">雷の呼吸</p>
        <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.22em] text-[#D9AB35]">Thunder Breathing</p>
      </div>
      <div className="pointer-events-none absolute bottom-7 left-5 z-20 hidden items-center gap-3 lg:flex">
        <span className="h-10 w-px bg-gradient-to-b from-[#FFD34F] to-transparent" />
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/65">Total concentration · thunder</span>
      </div>
    </div>
  );
}
