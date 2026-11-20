"use client";

import { researchTopics } from "@/lib/data";

const trace = [
  { step: "i", name: "ingest", detail: "Parse the request, normalise, and scope it before anything else runs." },
  { step: "ii", name: "route", detail: "Decide between retrieval, tool use, or a direct answer." },
  { step: "iii", name: "retrieve", detail: "Hybrid BM25 and dense search, fused with reciprocal rank fusion." },
  { step: "iv", name: "grade", detail: "Is the evidence sufficient? If not, rewrite and search again, bounded." },
  { step: "v", name: "approve", detail: "A human gate sits before anything irreversible." },
  { step: "vi", name: "log", detail: "Every decision is written to an audit trail that outlives the session." }
];

export function PipelineSection() {
  return (
    <section id="approach" className="section">
      <div className="wrap">
        <p className="section-index">02 — the reliability layer</p>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="display text-[clamp(2.1rem,4.4vw,3.4rem)] text-ink">
              The model is
              <br />
              the easy part.
            </h2>
            <p className="body-text mt-7 max-w-[26rem]">
              A plausible answer is one API call. An answer that is grounded, bounded, and
              reviewable is engineering. That is the layer I work on.
            </p>
            <p className="body-text mt-4 max-w-[26rem] text-ink-faint">
              These six stages are not a diagram drawn for a portfolio. They are the loop my
              <span className="text-ink"> AI Operations Agent</span> actually runs.
            </p>
          </div>

          <ol className="border-t border-[var(--rule-strong)]">
            {trace.map((item, index) => (
              <li
                key={item.step}
                className="reveal grid grid-cols-[2.5rem_6rem_1fr] items-baseline gap-x-4 border-b border-[var(--rule)] py-4 sm:grid-cols-[3rem_7rem_1fr]"
                style={{ ["--d" as string]: `${index * 45}ms` }}
              >
                <span className="font-serif text-[15px] italic text-vermilion">{item.step}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.13em] text-ink">{item.name}</span>
                <span className="text-[0.94rem] leading-[1.6] text-ink-soft">{item.detail}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-7 border-t border-[var(--rule)] pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {researchTopics.map((topic, index) => (
            <div key={topic.name} className="reveal" style={{ ["--d" as string]: `${index * 40}ms` }}>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-px w-4 bg-vermilion" />
                <span className="mono">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-serif text-[1.15rem] leading-snug text-ink">{topic.name}</h3>
              <p className="mt-1.5 text-[0.875rem] leading-[1.6] text-ink-faint">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
