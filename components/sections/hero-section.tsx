"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Github, Mail } from "lucide-react";
import { BreathingScene } from "@/components/ui/breathing-scene";
import { GlowButton } from "@/components/ui/glow-button";
import { ParticleBackground } from "@/components/ui/particle-background";

const rise = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative isolate flex min-h-[min(900px,100svh)] items-center overflow-hidden bg-cinematic-radial pt-20">
      <ParticleBackground />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#070A0E_0%,rgba(7,10,14,.96)_30%,rgba(7,10,14,.38)_70%,rgba(7,10,14,.64)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:74px_74px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <div className="container relative z-10 grid items-center gap-2 py-12 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.04fr_.96fr] lg:gap-0">
        <motion.div
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11, delayChildren: 0.12 } } }}
          className="relative z-10 py-10 lg:py-16"
        >
          <motion.div variants={reduceMotion ? undefined : rise} className="mb-7 flex items-center gap-3">
            <span className="relative grid size-2.5 place-items-center">
              <span className="absolute size-full animate-ping rounded-full bg-[#77E9E0]/60" />
              <span className="relative size-1.5 rounded-full bg-[#A6FFF7]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#B8C7C9] sm:text-xs">
              Computer Science · IIIT Sri City
            </span>
          </motion.div>

          <motion.p variants={reduceMotion ? undefined : rise} className="mb-3 font-mono text-xs uppercase tracking-[0.34em] text-[#79DED7]">
            Giresh Komal Velaga <span className="text-white/25">// PORTFOLIO</span>
          </motion.p>

          <motion.h1
            variants={reduceMotion ? undefined : rise}
            className="max-w-4xl text-balance font-display text-[clamp(3.4rem,8.2vw,7.6rem)] font-black leading-[.87] tracking-[-.075em] text-[#F4F1EA]"
          >
            AI with <span className="relative inline-block whitespace-nowrap text-[#75E0D9]">
              intent.
              <motion.svg
                viewBox="0 0 340 24"
                preserveAspectRatio="none"
                className="absolute -bottom-3 left-0 h-3.5 w-full overflow-visible"
                aria-hidden="true"
              >
                <motion.path
                  d="M3 17C75 4 173 3 336 12"
                  stroke="#75E0D9"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.15, delay: 0.8, ease: "easeOut" }}
                />
              </motion.svg>
            </span>
            <br />
            <span className="text-[#F4F1EA]">built to</span>{" "}
            <span className="hero-gradient-text">ship.</span>
          </motion.h1>

          <motion.p variants={reduceMotion ? undefined : rise} className="mt-8 max-w-xl text-base leading-7 text-[#A5B0B4] sm:text-lg sm:leading-8">
            I build across two worlds: intelligent systems that reason over data, and full-stack products people can actually use.
          </motion.p>

          <motion.div variants={reduceMotion ? undefined : rise} className="mt-5 flex flex-wrap gap-2">
            {["AI agents & RAG", "Applied ML", "Full-stack products"].map((item, index) => (
              <motion.span
                key={item}
                whileHover={reduceMotion ? undefined : { y: -3, borderColor: index === 1 ? "rgba(255,145,105,.7)" : "rgba(117,224,217,.7)" }}
                className={index === 1
                  ? "rounded-full border border-[#FF9169]/20 bg-[#FF9169]/[0.055] px-3 py-1.5 font-mono text-[10px] tracking-wide text-[#FFC0A8] sm:text-xs"
                  : "rounded-full border border-[#75E0D9]/20 bg-[#75E0D9]/[0.045] px-3 py-1.5 font-mono text-[10px] tracking-wide text-[#B9F7F1] sm:text-xs"}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={reduceMotion ? undefined : rise} className="mt-9 flex flex-wrap gap-3">
            <GlowButton href="#projects" variant="secondary">Explore my work <ArrowRight className="size-4" /></GlowButton>
            <GlowButton href="https://github.com/Giresh-458" variant="outline"><Github className="size-4" /> GitHub</GlowButton>
            <GlowButton href="#contact" variant="outline"><Mail className="size-4" /> Contact</GlowButton>
          </motion.div>

          <motion.div variants={reduceMotion ? undefined : rise} className="mt-12 flex items-center gap-4 border-t border-white/[0.09] pt-5">
            <div className="flex -space-x-1">
              <span className="grid size-7 place-items-center rounded-full border border-[#75E0D9]/25 bg-[#75E0D9]/10 text-[#75E0D9]"><span className="text-[10px]">水</span></span>
              <span className="grid size-7 place-items-center rounded-full border border-[#FF9169]/25 bg-[#FF9169]/10 text-[#FF9169]"><span className="text-[10px]">火</span></span>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
              Explore the craft <span className="mx-1 text-white/20">·</span> AI × full-stack engineering
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.88, x: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[620px] lg:-ml-4"
        >
          <BreathingScene />
          <motion.div
            className="absolute left-[4%] top-[22%] hidden max-w-[148px] rounded-xl border border-white/[0.09] bg-[#0A1115]/75 p-3 shadow-2xl backdrop-blur-xl sm:block"
            animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#78DED7]">01 / Intelligence</p>
            <p className="mt-2 text-xs font-semibold text-white/85">Models → decisions</p>
          </motion.div>
          <motion.div
            className="absolute bottom-[22%] right-[1%] hidden max-w-[158px] rounded-xl border border-[#FF9169]/15 bg-[#150F0E]/75 p-3 shadow-2xl backdrop-blur-xl sm:block"
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FF9C76]">02 / Engineering</p>
            <p className="mt-2 text-xs font-semibold text-white/85">Ideas → products</p>
          </motion.div>
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 transition hover:text-[#A6FFF7] md:flex">
        <span>Scroll to explore</span><ArrowDown className="size-3.5 animate-bounce" />
      </a>
    </section>
  );
}
