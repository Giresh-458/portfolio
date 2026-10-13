"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { wisteriaScene } from "@/lib/anime-art";
import { AnimeSceneBackdrop } from "@/components/ui/anime-scene-backdrop";
import { siteConfig } from "@/lib/data";

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="section-shell section-contact scroll-mt-20">
      <SectionHeader
        eyebrow="Contact · 連絡"
        title="Open to meaningful work."
        description="For AI engineering, software development, internships, research or collaboration, reach out directly."
      />
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <GlassCard className="slayer-panel relative overflow-hidden p-6 md:p-10">
          <AnimeSceneBackdrop scene={wisteriaScene} className="absolute inset-0 opacity-65" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,12,.94)_0%,rgba(7,7,12,.78)_55%,rgba(7,7,12,.68)_100%)]" />
          <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#D33E52]">Direct contact</p>
              <h3 className="mt-4 font-display text-3xl uppercase leading-tight text-[#F2E3D2] md:text-4xl">Let’s talk about what you’re building.</h3>
              <p className="mt-4 text-sm leading-7 text-[#B3A8AB] md:text-base">
                Email is the fastest way to reach me. Explore my repositories to see the code and technical decisions behind my projects.
              </p>
              <p className="mt-4 break-all text-sm text-[#E7C6AF]">{siteConfig.email}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button asChild size="lg">
                <a href={"mailto:" + siteConfig.email}>
                  <Mail className="size-4" /> Email me <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={siteConfig.github} target="_blank" rel="noreferrer">
                  <Github className="size-4" /> GitHub profile <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
