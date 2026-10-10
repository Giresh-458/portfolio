"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SectionHeader } from "@/components/ui/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import { stats } from "@/lib/data";

const skillPreview = ["AI agents", "RAG systems", "Multimodal ML", "React", "APIs", "Data systems"];

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="The person behind the practice" title="Train the fundamentals. Build for the real world." description="Inspired by discipline and constant improvement; grounded in real AI engineering and product development." />
      <motion.div
        variants={reduceMotion ? undefined : stagger}
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={viewport}
        className="mission-card grid overflow-hidden border border-[#879C7C]/20 shadow-card lg:grid-cols-[0.85fr_1.15fr]"
      >
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="relative min-h-[420px] overflow-hidden">
          <Image src="/profile.svg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B100C] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-netflix">Now building</p>
            <p className="mt-2 text-xl font-bold text-[#F3EEE3]">From experiments to useful software</p>
          </div>
        </motion.div>
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="flex flex-col justify-center p-7 md:p-12">
          <h3 className="text-3xl font-black tracking-tight text-[#F3EEE3] md:text-4xl">Research the idea. Engineer the experience.</h3>
          <p className="mt-5 leading-8 text-zinc-400">
            I’m a fourth-year Computer Science and Engineering student at IIIT Sri City. My projects span LLM-powered workflows, retrieval systems, multimodal machine learning, and full-stack web applications.
          </p>
          <p className="mt-4 leading-8 text-zinc-400">
            My approach is simple: learn the fundamentals, choose a practical architecture, build the interface and backend, then test the edges that a demo can miss. Consistency matters more than flashy claims.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {skillPreview.map((skill) => <TechBadge key={skill}>{skill}</TechBadge>)}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#879C7C]/20 pt-8 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-xs leading-5 text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
