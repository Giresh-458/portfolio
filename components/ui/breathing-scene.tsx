"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const characters = [
  { id: "tanjiro", name: "Tanjiro Kamado", style: "Water Breathing · Hinokami Kagura", shortStyle: "WATER / HINOKAMI", image: "https://demonslayer-anime.com/mugentrain/assets/img/character/img_cha_01.jpg", imagePosition: "center 25%", accent: "#62D6E0", secondary: "#F16A50", index: "01" },
  { id: "nezuko", name: "Nezuko Kamado", style: "Blood Demon Art", shortStyle: "BLOOD DEMON ART", image: "https://demonslayer-anime.com/hta/assets/img/chara/img_chara_nezuko.jpg", imagePosition: "center 24%", accent: "#F18CB5", secondary: "#D64F68", index: "02" },
  { id: "zenitsu", name: "Zenitsu Agatsuma", style: "Thunder Breathing", shortStyle: "THUNDER BREATHING", image: "https://demonslayer-anime.com/hta/assets/img/chara/img_chara_zennitsu.jpg", imagePosition: "center 24%", accent: "#F5D36A", secondary: "#EBA449", index: "03" },
  { id: "inosuke", name: "Inosuke Hashibira", style: "Beast Breathing", shortStyle: "BEAST BREATHING", image: "https://demonslayer-anime.com/hta/assets/img/chara/img_chara_inosuke.jpg", imagePosition: "center 25%", accent: "#B7D8ED", secondary: "#5F96B7", index: "04" }
];

export function BreathingScene() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = characters[activeIndex];

  return (
    <div className="relative mx-auto w-full max-w-[590px]">
      <div className="pointer-events-none absolute -inset-5 rounded-[2rem] opacity-70 blur-2xl transition-colors duration-700" style={{ background: "radial-gradient(ellipse at 58% 35%, " + active.accent + "24, transparent 62%), radial-gradient(ellipse at 50% 80%, " + active.secondary + "20, transparent 60%)" }} />
      <div className="relative overflow-hidden rounded-t-[1.35rem] border border-white/10 bg-[#10131B] shadow-[0_26px_90px_rgba(0,0,0,.5)]">
        <AnimatePresence mode="wait">
          <motion.div key={active.id} initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.08, x: 16 }}
            animate={reduceMotion ? { opacity: 1, scale: 1, x: 0 } : { opacity: 1, x: 0, scale: [1.01, 1.06, 1.01] }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.02, x: -12 }}
            transition={reduceMotion ? { duration: 0.01 } : { opacity: { duration: 0.35 }, x: { duration: 0.55 }, scale: { duration: 16, repeat: Infinity, ease: "easeInOut" } }}
            className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/6]" aria-label={active.name + ", " + active.style} role="img"
            style={{ backgroundImage: "url('" + active.image + "')", backgroundSize: "cover", backgroundPosition: active.imagePosition }}>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,14,.05)_0%,rgba(5,8,14,.06)_34%,rgba(5,8,14,.35)_57%,rgba(5,8,14,.96)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,14,.42),transparent_40%,rgba(5,8,14,.12))]" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 500 600" fill="none" aria-hidden="true">
              {active.id === "tanjiro" ? <>
                <motion.path d="M-20 430C80 355 42 287 153 244C254 205 328 284 520 176" stroke={active.accent} strokeWidth="7" strokeLinecap="round" opacity=".85" animate={reduceMotion ? undefined : { pathLength: [0.28, 1, 0.28], opacity: [0.24, 0.84, 0.24] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }} />
                <motion.path d="M-15 492C105 407 112 349 211 338C317 326 364 404 515 303" stroke="#D9FAF6" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 12" opacity=".7" animate={reduceMotion ? undefined : { strokeDashoffset: [0, -92] }} transition={{ duration: 6.2, repeat: Infinity, ease: "linear" }} />
                <motion.path d="M365 600C389 534 462 519 514 468" stroke={active.secondary} strokeWidth="10" strokeLinecap="round" animate={reduceMotion ? undefined : { pathLength: [0.1, 1, 0.1], opacity: [0.1, 0.8, 0.1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: .5 }} />
              </> : null}
              {active.id === "nezuko" ? <>
                <motion.path d="M-20 423C73 306 143 493 234 405C323 320 405 437 520 306" stroke={active.accent} strokeWidth="7" strokeLinecap="round" opacity=".8" animate={reduceMotion ? undefined : { pathLength: [0.18, 1, 0.18], opacity: [0.2, 0.9, 0.2] }} transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" }} />
                <motion.path d="M-15 510C103 447 124 561 236 498C341 439 428 542 518 432" stroke={active.secondary} strokeWidth="3" strokeLinecap="round" strokeDasharray="5 10" animate={reduceMotion ? undefined : { strokeDashoffset: [0, -75] }} transition={{ duration: 5.4, repeat: Infinity, ease: "linear" }} />
              </> : null}
              {active.id === "zenitsu" ? <>
                <motion.path d="M65 65L148 187L112 224L220 336L173 384L294 534" stroke={active.accent} strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" animate={reduceMotion ? undefined : { opacity: [0.08, 1, 0.18, 0.85, 0.08], pathLength: [0.15, 1, 0.15] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }} />
                <motion.path d="M467 105L397 221L427 252L354 365" stroke="#FFF5C7" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" animate={reduceMotion ? undefined : { opacity: [0, .9, 0] }} transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: .6 }} />
              </> : null}
              {active.id === "inosuke" ? <>
                <motion.path d="M-25 350C52 183 203 147 355 218C455 264 494 359 430 423C376 478 276 456 248 391" stroke={active.accent} strokeWidth="6" strokeLinecap="round" animate={reduceMotion ? undefined : { pathLength: [0.24, 1, 0.24], opacity: [0.18, .88, .18] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} />
                <motion.path d="M-20 452C70 543 230 558 359 492C428 456 455 408 475 349" stroke="#E5F5FF" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="3 12" animate={reduceMotion ? undefined : { strokeDashoffset: [0, -96] }} transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }} />
              </> : null}
            </svg>
            <div className="pointer-events-none absolute left-5 top-5 z-10 flex items-center gap-2 border border-white/20 bg-[#080B12]/60 px-3 py-2 backdrop-blur-md">
              <span className="size-1.5 rounded-full" style={{ backgroundColor: active.accent, boxShadow: "0 0 14px " + active.accent }} />
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#F5F0E9]">Corps archive / {active.index}</span>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: active.accent }}>{active.shortStyle}</p>
              <h2 className="mt-2 font-display text-4xl leading-none tracking-wide text-white sm:text-5xl">{active.name}</h2>
              <p className="mt-2 text-sm text-[#C4CCD7]">{active.style}</p>
              <div className="mt-5 h-px w-full bg-white/15"><motion.div key={active.id} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: .7 }} className="h-full origin-left" style={{ backgroundColor: active.accent, width: "100%" }} /></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="grid grid-cols-4 border-x border-b border-white/10 bg-[#0B0E16]">
        {characters.map((character, index) => (
          <button key={character.id} type="button" onClick={() => setActiveIndex(index)} aria-pressed={activeIndex === index} aria-label={"Show " + character.name}
            className={"group relative min-w-0 border-r border-white/[0.07] p-2 text-left transition-colors last:border-r-0 sm:p-3 " + (activeIndex === index ? "bg-white/[0.075]" : "bg-transparent hover:bg-white/[0.035]")}>
            <span className="relative block aspect-[5/4] overflow-hidden bg-[#151B26]">
              <span className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: "url('" + character.image + "')" }} />
              <span className="absolute inset-0 bg-gradient-to-t from-[#07090F]/70 to-transparent" />
              {activeIndex === index ? <span className="absolute inset-x-0 bottom-0 h-[2px]" style={{ backgroundColor: character.accent }} /> : null}
            </span>
            <span className={"mt-2 block truncate text-[10px] font-semibold sm:text-xs " + (activeIndex === index ? "text-white" : "text-[#8895A6]")}>{character.name.split(" ")[0]}</span>
            <span className="mt-1 hidden truncate font-mono text-[8px] tracking-[0.08em] text-[#778497] sm:block">{character.index} / 04</span>
          </button>
        ))}
      </div>
      <p className="mt-2 text-right font-mono text-[8px] uppercase tracking-[0.15em] text-[#596678]">Select a fighter to change the breathing effect</p>
    </div>
  );
}
