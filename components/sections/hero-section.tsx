"use client";

import { ArrowDown, Github, Linkedin } from "lucide-react";
import dynamic from "next/dynamic";
import { siteConfig } from "@/lib/data";

const AgentGraph = dynamic(() => import("@/components/ui/agent-graph").then((m) => m.AgentGraph), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center">
      <span className="mono-label flex items-center gap-2">
        <span className="signal-dot" /> initialising agent graph
      </span>
    </div>
  )
});

const KEYWORDS = ["retrieval evaluation", "abstention", "bounded tools", "audit logging"];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[min(100svh,54rem)] flex-col justify-end overflow-hidden pt-28 md:justify-center md:pt-24"
    >
      {/* The graph owns the upper-right mass; copy sits lower-left. */}
      <div className="absolute inset-0 z-0">
        <AgentGraph className="h-full w-full" />
      </div>

      {/* Keeps copy legible without hiding the graph. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(100deg, #05070a 8%, rgba(5,7,10,.92) 30%, rgba(5,7,10,.42) 52%, rgba(5,7,10,.08) 74%, rgba(5,7,10,.55) 100%)"
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40"
        style={{ background: "linear-gradient(to top, #05070a 6%, transparent)" }}
      />

      <div className="shell-inner relative z-20 w-full pb-16 md:pb-24">
        <div className="max-w-[42rem]">
          <p className="reveal mono-label mb-6 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "60ms" }}>
            <span className="signal-dot" />
            <span className="text-signal">available for agent engineering roles</span>
            <span className="text-muted">/</span>
            <span>iiit sri city · cse ’27</span>
          </p>

          <h1
            className="reveal text-balance text-[clamp(2.4rem,5.6vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.035em] text-ink"
            style={{ ["--d" as string]: "150ms" }}
          >
            I build agents that
            <br />
            <span className="text-signal">know when to stop.</span>
          </h1>

          <p
            className="reveal mt-7 max-w-xl text-[15px] leading-[1.75] text-ink-dim sm:text-base"
            style={{ ["--d" as string]: "240ms" }}
          >
            Stateful LLM agents, hybrid retrieval and the reliability layer around them: evidence
            grading, abstention, bounded tool calls and human approval. Python, LangGraph, FastAPI,
            PostgreSQL.
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "330ms" }}>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-[3px] bg-signal px-5 py-3 text-sm font-semibold text-[#04100a] transition hover:bg-[#96ffc0]"
            >
              See the systems
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[3px] border border-[rgba(150,200,195,.24)] px-5 py-3 text-sm font-medium text-ink transition hover:border-signal/50 hover:text-signal"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="grid size-11 place-items-center rounded-[3px] border border-[rgba(150,200,195,.24)] text-ink-dim transition hover:border-signal/50 hover:text-signal"
            >
              <Linkedin className="size-4" />
            </a>
          </div>

          <div className="reveal mt-12 flex flex-wrap items-center gap-x-6 gap-y-2" style={{ ["--d" as string]: "420ms" }}>
            {KEYWORDS.map((item) => (
              <span key={item} className="mono-label flex items-center gap-2">
                <span className="h-px w-4 bg-[rgba(150,200,195,.3)]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 right-5 z-20 hidden items-center gap-3 lg:flex">
        <span className="mono-label">scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-signal/60 to-transparent" />
      </div>
    </section>
  );
}
