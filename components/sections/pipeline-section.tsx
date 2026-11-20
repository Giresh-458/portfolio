"use client";

import { ArrowRight, Database, GitBranch, ScanSearch, ShieldCheck, Terminal, UserCheck } from "lucide-react";
import { researchTopics } from "@/lib/data";

const trace = [
  { step: "01", name: "ingest", detail: "Parse the request, normalise and scope it.", icon: Terminal },
  { step: "02", name: "route", detail: "Pick retrieval, tool use, or a direct answer.", icon: GitBranch },
  { step: "03", name: "retrieve", detail: "Hybrid BM25 + dense, fused with RRF.", icon: Database },
  { step: "04", name: "grade", detail: "Is the evidence actually sufficient?", icon: ScanSearch },
  { step: "05", name: "approve", detail: "Human gate before anything irreversible.", icon: UserCheck },
  { step: "06", name: "log", detail: "Every decision written to an audit trail.", icon: ShieldCheck }
];

export function PipelineSection() {

  return (
    <section id="approach" className="shell relative scroll-mt-16 border-y border-[rgba(150,200,195,.08)]">
      <div className="shell-inner">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="mono-label mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-signal/60" /> the reliability layer
            </p>
            <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink">
              The model is the
              <br /> easy part.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-ink-dim">
              Getting a plausible answer is one API call. Getting an answer that is grounded, bounded
              and reviewable is the engineering. That is the layer I work on.
            </p>

            <div className="mt-9 space-y-px border-t border-[rgba(150,200,195,.1)]">
              {trace.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="reveal group flex items-start gap-4 border-b border-[rgba(150,200,195,.1)] py-4"
                    style={{ ["--d" as string]: `${index * 50}ms` }}
                  >
                    <span className="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-[#3d4d51] transition group-hover:text-signal">
                      {item.step}
                    </span>
                    <Icon className="mt-0.5 size-4 shrink-0 text-muted transition group-hover:text-signal" />
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition group-hover:text-signal">
                        {item.name}
                      </p>
                      <p className="mt-1 text-[13px] leading-[1.6] text-muted">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid content-start gap-3 sm:grid-cols-2">
            {researchTopics.map((topic, index) => (
              <div
                key={topic.name}
                className="reveal ticked panel panel-hover p-5"
                style={{ ["--d" as string]: `${index * 40}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <topic.icon className="size-4 text-signal/80" />
                  <span className="font-mono text-[9px] tracking-[0.16em] text-[#3d4d51]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-[14px] font-medium text-ink">{topic.name}</h3>
                <p className="mt-2 text-[12.5px] leading-[1.6] text-muted">{topic.description}</p>
              </div>
            ))}
            <div className="mono-label flex items-center gap-2 px-1 pt-2 sm:col-span-2">
              <ArrowRight className="size-3 text-signal/60" />
              each of these shows up in the projects above
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
