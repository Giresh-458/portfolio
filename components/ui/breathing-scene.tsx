"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { animeScenes } from "@/lib/anime-art";
import { AnimeSceneBackdrop } from "@/components/ui/anime-scene-backdrop";

const characters = [
  {
    id: "tanjiro",
    scene: animeScenes[0],
    name: "Tanjiro Kamado",
    style: "Water Breathing · Hinokami Kagura",
    technique: "水の呼吸",
    accent: animeScenes[0].accent,
    secondary: "#ED493D",
    number: "01"
  },
  {
    id: "nezuko",
    scene: animeScenes[1],
    name: "Nezuko Kamado",
    style: "Blood Demon Art",
    technique: "血鬼術",
    accent: animeScenes[1].accent,
    secondary: "#F42E62",
    number: "02"
  },
  {
    id: "zenitsu",
    scene: animeScenes[2],
    name: "Zenitsu Agatsuma",
    style: "Thunder Breathing",
    technique: "雷の呼吸",
    accent: animeScenes[2].accent,
    secondary: "#FFAE36",
    number: "03"
  },
  {
    id: "inosuke",
    scene: animeScenes[3],
    name: "Inosuke Hashibira",
    style: "Beast Breathing",
    technique: "獣の呼吸",
    accent: animeScenes[3].accent,
    secondary: "#76A8FF",
    number: "04"
  }
];

const petals = [
  { left: "8%", top: "18%", size: 11, delay: 0, duration: 12 },
  { left: "34%", top: "8%", size: 8, delay: 3, duration: 15 },
  { left: "58%", top: "15%", size: 10, delay: 1.5, duration: 13 },
  { left: "76%", top: "12%", size: 7, delay: 5, duration: 16 },
  { left: "91%", top: "38%", size: 12, delay: 2, duration: 14 },
  { left: "42%", top: "58%", size: 7, delay: 4, duration: 11 },
  { left: "14%", top: "64%", size: 10, delay: 1, duration: 17 },
  { left: "69%", top: "74%", size: 8, delay: 6, duration: 13 },
  { left: "84%", top: "60%", size: 7, delay: 2.5, duration: 15 },
  { left: "27%", top: "40%", size: 6, delay: 7, duration: 12 }
];

export function BreathingScene() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = characters[activeIndex];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-label="Animated Demon Slayer character scene">
      <AnimatePresence mode="sync">
        <motion.div
          key={active.id}
          className="absolute inset-[-2%]"
          data-character={active.id}
          role="img"
          aria-label={active.name + " — " + active.style}
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.08, x: 24 }}
          animate={reduceMotion ? { opacity: 1, scale: 1, x: 0 } : { opacity: 1, scale: [1.015, 1.07, 1.015], x: [0, -7, 0] }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.03, x: -18 }}
          transition={reduceMotion ? { duration: 0.01 } : { opacity: { duration: 0.55 }, x: { duration: 12, repeat: Infinity, ease: "easeInOut" }, scale: { duration: active.id === "zenitsu" ? 5 : 18, repeat: Infinity, ease: "easeInOut" } }}
        >
          <AnimeSceneBackdrop scene={active.scene} className="absolute inset-0" priority />
        </motion.div>;
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { animeScenes } from "@/lib/anime-art";
import { AnimeSceneBackdrop } from "@/components/ui/anime-scene-backdrop";

const characters = [
  {
    id: "tanjiro",
    scene: animeScenes[0],
    name: "Tanjiro Kamado",
    style: "Water Breathing · Hinokami Kagura",
    technique: "水の呼吸",
    accent: animeScenes[0].accent,
    secondary: "#ED493D",
    number: "01"
  },
  {
    id: "nezuko",
    scene: animeScenes[1],
    name: "Nezuko Kamado",
    style: "Blood Demon Art",
    technique: "血鬼術",
    accent: animeScenes[1].accent,
    secondary: "#F42E62",
    number: "02"
  },
  {
    id: "zenitsu",
    scene: animeScenes[2],
    name: "Zenitsu Agatsuma",
    style: "Thunder Breathing",
    technique: "雷の呼吸",
    accent: animeScenes[2].accent,
    secondary: "#FFAE36",
    number: "03"
  },
  {
    id: "inosuke",
    scene: animeScenes[3],
    name: "Inosuke Hashibira",
    style: "Beast Breathing",
    technique: "獣の呼吸",
    accent: animeScenes[3].accent,
    secondary: "#76A8FF",
    number: "04"
  }
];

const petals = [
  { left: "8%", top: "18%", size: 11, delay: 0, duration: 12 },
  { left: "34%", top: "8%", size: 8, delay: 3, duration: 15 },
  { left: "58%", top: "15%", size: 10, delay: 1.5, duration: 13 },
  { left: "76%", top: "12%", size: 7, delay: 5, duration: 16 },
  { left: "91%", top: "38%", size: 12, delay: 2, duration: 14 },
  { left: "42%", top: "58%", size: 7, delay: 4, duration: 11 },
  { left: "14%", top: "64%", size: 10, delay: 1, duration: 17 },
  { left: "69%", top: "74%", size: 8, delay: 6, duration: 13 },
  { left: "84%", top: "60%", size: 7, delay: 2.5, duration: 15 },
  { left: "27%", top: "40%", size: 6, delay: 7, duration: 12 }
];

export function BreathingScene() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = characters[activeIndex];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-label="Animated Demon Slayer character scene">
      <AnimatePresence mode="sync">
        <motion.div
          key={active.id}
          className="character-scene-image absolute inset-[-2%]"
          data-character={active.id}
          role="img"
          aria-label={active.name + " — " + active.style}
          style={{
            backgroundImage: "url('" + active.image + "')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            ["--scene-position" as string]: active.position,
            ["--scene-mobile-position" as string]: active.mobilePosition,
            backgroundColor: "#080C17"
          }}
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.08, x: 24 }}
          animate={reduceMotion ? { opacity: 1, scale: 1, x: 0 } : { opacity: 1, scale: [1.015, 1.07, 1.015], x: [0, -7, 0] }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.03, x: -18 }}
          transition={reduceMotion ? { duration: 0.01 } : { opacity: { duration: 0.55 }, x: { duration: 12, repeat: Infinity, ease: "easeInOut" }, scale: { duration: active.id === "zenitsu" ? 5 : 18, repeat: Infinity, ease: "easeInOut" } }}
        />
      </AnimatePresence>

      <div className="hero-scene-wash absolute inset-0" />
      <div className="blood-moon-orb pointer-events-none absolute" />
      <div className="hero-moon-glow pointer-events-none absolute inset-0" />
      <svg className="scene-architecture pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 630L96 574L159 600L253 520L320 574L405 492L489 560L565 520L670 604L740 550V900H0Z" fill="#07101C" fillOpacity=".88" />
        <path d="M0 720L95 661L174 687L267 624L357 680L442 609L532 683L625 631L758 704V900H0Z" fill="#080C15" fillOpacity=".9" />
        <path d="M0 777L68 760L112 711L155 757L196 735L241 780V900H0Z" fill="#05070D" />
        <path d="M60 729L152 729L152 785M43 729L168 729L152 704L119 690L86 704Z" stroke="#C93C49" strokeOpacity=".3" strokeWidth="3" />
        <path d="M182 786L266 786L266 820M162 786L284 786L265 761L223 744L181 761Z" stroke="#D3A88D" strokeOpacity=".22" strokeWidth="3" />
        <path d="M337 696L430 696L430 748M315 696L452 696L430 670L392 649L354 670Z" stroke="#D3A88D" strokeOpacity=".28" strokeWidth="3" />
        <path d="M347 696L347 673L392 648L437 673L437 696M359 687L425 687M370 673L392 661L414 673" stroke="#D3A88D" strokeOpacity=".25" strokeWidth="2" />
        <path d="M510 732L584 732L584 778M494 732L602 732L585 709L548 691L511 709Z" stroke="#C93C49" strokeOpacity=".28" strokeWidth="3" />
        <path d="M0 850C153 815 222 864 365 837S592 822 739 858" stroke="#40C9E4" strokeOpacity=".16" strokeWidth="2" />
      </svg>

      <svg className="pointer-events-none absolute inset-0 z-5 h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="none" fill="none" aria-hidden="true">
        {active.id === "tanjiro" ? <>
          <motion.path d="M640 760C760 682 766 556 890 503C1028 443 1225 529 1460 287" stroke={active.accent} strokeWidth="19" strokeLinecap="round" opacity=".7" filter="url(#glow-water)" animate={reduceMotion ? undefined : { pathLength: [0.65, 1, 0.65], opacity: [.22, .75, .22] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }} />
          <motion.path d="M600 770C720 690 806 620 928 593C1100 553 1258 642 1530 431" stroke="#E9FFFF" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="4 15" animate={reduceMotion ? undefined : { strokeDashoffset: [0, -160] }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} opacity=".85" />
          <motion.path d="M905 420C1017 252 1178 248 1288 345C1384 430 1454 421 1608 335" stroke="#6DE8FF" strokeWidth="6" strokeLinecap="round" opacity=".7" animate={reduceMotion ? undefined : { pathLength: [0.15, 1, 0.15] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
          <motion.path d="M890 830C1060 743 1177 792 1300 725C1430 655 1504 725 1620 646" stroke={active.secondary} strokeWidth="7" strokeLinecap="round" opacity=".65" animate={reduceMotion ? undefined : { pathLength: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: .8 }} />
        </> : null}
        {active.id === "nezuko" ? <>
          <motion.path d="M610 800C760 625 882 750 1017 605C1143 470 1280 645 1518 430" stroke={active.accent} strokeWidth="16" strokeLinecap="round" opacity=".62" filter="url(#glow-water)" animate={reduceMotion ? undefined : { pathLength: [0.1, 1, 0.1], opacity: [.12, .8, .12] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
          <motion.path d="M800 850C920 724 1040 844 1190 710C1340 575 1420 725 1600 570" stroke="#FFB5E0" strokeWidth="4" strokeLinecap="round" strokeDasharray="5 13" animate={reduceMotion ? undefined : { strokeDashoffset: [0, -120] }} transition={{ duration: 5.4, repeat: Infinity, ease: "linear" }} />
          <motion.path d="M1060 300C1160 188 1260 210 1340 295" stroke={active.secondary} strokeWidth="5" strokeLinecap="round" animate={reduceMotion ? undefined : { pathLength: [0, 1, 0], opacity: [0, .95, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }} />
        </> : null}
        {active.id === "zenitsu" ? <>
          <motion.path d="M950 90L1070 275L1026 319L1154 470L1100 525L1270 760" stroke={active.accent} strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" filter="url(#glow-water)" animate={reduceMotion ? undefined : { opacity: [.08, 1, .1, .8, .08], pathLength: [.2, 1, .2] }} transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }} />
          <motion.path d="M1450 160L1350 318L1390 360L1300 478" stroke="#FFF4BF" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" animate={reduceMotion ? undefined : { opacity: [0, 1, 0] }} transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: .6 }} />
          <motion.path d="M830 425L895 510L867 540L960 650" stroke={active.secondary} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" animate={reduceMotion ? undefined : { opacity: [0, .9, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: .4 }} />
        </> : null}
        {active.id === "inosuke" ? <>
          <motion.path d="M680 690C800 450 1000 390 1202 500C1384 601 1393 741 1260 788C1150 825 1012 752 1000 660" stroke={active.accent} strokeWidth="12" strokeLinecap="round" opacity=".72" filter="url(#glow-water)" animate={reduceMotion ? undefined : { pathLength: [.12, 1, .12], opacity: [.12, .85, .12] }} transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }} />
          <motion.path d="M760 790C894 890 1112 874 1305 758C1430 680 1490 590 1530 510" stroke="#DDF9FF" strokeWidth="4" strokeLinecap="round" strokeDasharray="3 16" animate={reduceMotion ? undefined : { strokeDashoffset: [0, -180] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
          <motion.path d="M1020 250L1458 714M1160 205L1510 580" stroke={active.secondary} strokeWidth="3" strokeLinecap="round" opacity=".8" animate={reduceMotion ? undefined : { opacity: [.12, .75, .12] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} />
        </> : null}
        <defs><filter id="glow-water" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="11" /></filter></defs>
      </svg>

      <div className="pointer-events-none absolute inset-0 z-10">
        {petals.map((petal, index) => (
          <motion.span key={index} className="sakura-petal absolute block" style={{ left: petal.left, top: petal.top, width: petal.size, height: petal.size * .62 }}
            animate={reduceMotion ? undefined : { y: ["-3vh", "84vh"], x: [0, index % 2 === 0 ? 70 : -60, index % 2 === 0 ? -30 : 48], rotate: [0, 130, 320], opacity: [0, .9, .75, 0] }}
            transition={{ duration: petal.duration, delay: petal.delay, repeat: Infinity, ease: "linear" }} />
        ))}
      </div>

      <div className="pointer-events-none absolute right-[7%] top-[18%] z-10 hidden text-right lg:block">
        <motion.p key={active.id} initial={reduceMotion ? undefined : { opacity: 0, x: 12 }} animate={{ opacity: .9, x: 0 }} className="font-mono text-[9px] uppercase tracking-[0.28em]" style={{ color: active.accent }}>{active.style}</motion.p>
        <motion.p key={active.id + "-jp"} initial={reduceMotion ? undefined : { opacity: 0, y: 8 }} animate={{ opacity: .8, y: 0 }} className="mt-3 font-serif text-4xl" style={{ color: active.accent }}>{active.technique}</motion.p>
      </div>

      <div className="pointer-events-auto absolute bottom-6 left-4 right-4 z-30 sm:bottom-7 sm:left-auto sm:right-[5.5%] sm:w-[min(660px,52vw)]">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#E8DCD5]/75">Choose your breathing style</span>
          <span className="font-mono text-[8px] tracking-[0.2em] text-[#E8DCD5]/45">CORPS ARCHIVE / {active.number}</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {characters.map((character, index) => (
            <button key={character.id} type="button" onClick={() => setActiveIndex(index)} aria-pressed={activeIndex === index} aria-label={"Show " + character.name + " scene"}
              className={"slayer-character-tab group relative min-w-0 overflow-hidden border text-left transition duration-300 " + (activeIndex === index ? "is-active" : "")}
              style={{ borderColor: activeIndex === index ? character.accent : "rgba(243,226,211,.26)", ["--character-accent" as string]: character.accent }}>
              <AnimeSceneBackdrop scene={character.scene} className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute inset-0 bg-linear-to-t from-[#050609] via-[#06070B]/40 to-transparent" />
              {activeIndex === index ? <span className="absolute inset-x-0 top-0 h-[3px]" style={{ backgroundColor: character.accent }} /> : null}
              <span className="relative flex min-h-[64px] flex-col justify-end p-2 sm:min-h-[76px] sm:p-3">
                <span className="font-mono text-[8px] tracking-[0.16em]" style={{ color: activeIndex === index ? character.accent : "#D5CDD0" }}>{character.number}</span>
                <span className="mt-1 truncate text-[10px] font-semibold text-[#FFF4E9] sm:text-xs">{character.name.split(" ")[0]}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
