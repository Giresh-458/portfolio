"use client";

import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import dynamic from "next/dynamic";
import { siteConfig } from "@/lib/data";

const IsoStack = dynamic(() => import("@/components/ui/iso-stack").then((m) => m.IsoStack), {
  ssr: false,
  loading: () => (
    <div className="h-[clamp(320px,44vw,470px)] w-full border border-[var(--rule)] bg-[linear-gradient(148deg,#fffdf6,#e8e2d2)]" />
  )
});

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="wrap">
        {/* Masthead rule: publication furniture, not a nav pill. */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-[var(--rule-strong)] pb-4">
          <span className="mono">giresh velaga — portfolio</span>
          <span className="mono">vol. 01 · 2026</span>
          <span className="mono hidden sm:inline">iiit sri city</span>
        </div>

        <div className="grid items-end gap-10 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-14">
          <div>
            <h1 className="display reveal text-[clamp(2.9rem,7.4vw,5.6rem)] text-ink">
              I build agents
              <br />
              that know when
              <br />
              <span className="text-vermilion italic">to stop.</span>
            </h1>

            <div className="reveal mt-9 max-w-[34rem] border-l-2 border-vermilion pl-5" style={{ ["--d" as string]: "180ms" }}>
              <p className="body-text">
                Stateful LLM agents, hybrid retrieval, and the reliability layer around them:
                evidence grading, abstention, bounded tool calls, human approval.
              </p>
              <p className="mono mt-4 text-ink-soft">
                python · langgraph · fastapi · postgresql
              </p>
            </div>

            <div className="reveal mt-9 flex flex-wrap items-center gap-x-6 gap-y-3" style={{ ["--d" as string]: "280ms" }}>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 border border-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                selected work
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="mono link-underline flex items-center gap-1.5 hover:text-ink"
              >
                <Github className="size-3.5" /> github
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mono link-underline flex items-center gap-1.5 hover:text-ink"
              >
                <Linkedin className="size-3.5" /> linkedin
              </a>
              <span className="mono hidden items-center gap-2 sm:flex">
                <span className="vermilion-dot" /> open to agent roles
              </span>
            </div>
          </div>

          <div className="reveal" style={{ ["--d" as string]: "360ms" }}>
            <IsoStack />
          </div>
        </div>
      </div>

      {/* Standing-head strip: the four ideas the rest of the page proves. */}
      <div className="mt-16 border-y border-[var(--rule)] bg-[rgba(232,226,210,0.5)]">
        <div className="wrap flex flex-wrap items-center gap-x-8 gap-y-2 py-3">
          {["evidence grading", "abstention", "bounded tools", "audit trail"].map((item, i) => (
            <span key={item} className="mono flex items-center gap-3">
              {i > 0 ? <span className="text-ink-faint/60">·</span> : null}
              {item}
            </span>
          ))}
          <span className="mono ml-auto hidden md:inline">scroll ↓</span>
        </div>
      </div>
    </section>
  );
}
