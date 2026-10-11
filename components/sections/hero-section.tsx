"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Github } from "lucide-react";
import { BreathingScene } from "@/components/ui/breathing-scene";
import { GlowButton } from "@/components/ui/glow-button";

const rise = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="slayer-hero relative isolate min-h-[1000px] overflow-hidden bg-background pt-[72px] lg:h-svh lg:min-h-[860px]">
      <BreathingScene />
      <div className="hero-vignette pointer-events-none absolute inset-0 z-5" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-linear-to-r from-transparent via-[#E33243]/80 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-28 bg-linear-to-t from-[#07070B] to-transparent" />

      <div className="container relative z-10 flex min-h-[928px] items-start pt-24 md:pt-28 lg:h-full lg:min-h-0 lg:items-center lg:pt-0">
        <motion.div initial={reduceMotion ? undefined : "hidden"} animate={reduceMotion ? undefined : "visible"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }} className="relative z-20 w-full max-w-[660px] pb-44 lg:pb-20">
          <motion.div variants={reduceMotion ? undefined : rise} className="mb-7 flex items-center gap-3">
            <span className="corps-seal grid size-11 shrink-0 place-items-center border border-[#E43D48]/80 bg-[#7C111F]/60 font-display text-2xl text-[#FFF0D8]">滅</span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#F27678]">Demon Slayer Corps · Field Journal</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[#B3B2B7]">Aspiring AI engineer · IIIT Sri City</p>
            </div>
          </motion.div>

          <motion.h1 variants={reduceMotion ? undefined : rise} className="hero-title max-w-[780px] text-balance font-display text-[clamp(4.3rem,8.5vw,8.3rem)] uppercase leading-[.78] tracking-[.01em] text-[#F8EFE1]">
            <span className="block">Code with</span>
            <span className="hero-brush mt-3 block pr-2 italic">purpose.</span>
          </motion.h1>

          <motion.div variants={reduceMotion ? undefined : rise} className="mt-7 flex items-start gap-4">
            <span className="mt-1 h-[54px] w-[3px] shrink-0 bg-linear-to-b from-[#E73A47] via-[#E73A47] to-transparent" />
            <p className="max-w-lg text-base leading-7 text-[#DED8D4] sm:text-lg sm:leading-8">
              Building intelligent systems. Solving real problems.
              <span className="block text-[#F2C9BC]">One project at a time.</span>
            </p>
          </motion.div>

          <motion.div variants={reduceMotion ? undefined : rise} className="mt-8 flex flex-wrap gap-3">
            <GlowButton href="#projects" variant="default">View missions <ArrowRight className="size-4" /></GlowButton>
            <GlowButton href="#about" variant="outline">My training <ArrowDownRight className="size-4" /></GlowButton>
            <a href="https://github.com/Giresh-458" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid size-12 place-items-center border border-white/20 bg-black/30 text-[#F4E8DC] transition hover:border-[#E43D48] hover:text-white"><Github className="size-4" /></a>
          </motion.div>

          <motion.div variants={reduceMotion ? undefined : rise} className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#B1AEB0]">
            <span className="text-[#E85A60]">01</span><span>AI / ML</span><span className="text-[#E85A60]">×</span><span>Full-stack</span><span className="text-[#E85A60]">×</span><span>Build & learn</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-[136px] left-5 z-20 hidden items-center gap-3 lg:flex">
        <span className="h-10 w-px bg-linear-to-b from-[#EA4550] to-transparent" />
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/65">Scroll to enter the archive</span>
      </div>
      <div className="pointer-events-none absolute left-[3.6%] top-[36%] z-20 hidden select-none font-serif text-[14px] leading-[1.85] tracking-[.35em] text-[#F3D6C9]/75 [writing-mode:vertical-rl] lg:block">夢を現実に</div>
      <div className="pointer-events-none absolute right-[3.6%] top-[23%] z-20 hidden border-y border-[#F0D5C1]/35 py-3 font-serif text-sm tracking-[.3em] text-[#F0D5C1]/80 [writing-mode:vertical-rl] lg:block">水の呼吸</div>
    </section>
  );
}
