"use client";

import { stats } from "@/lib/data";

const focus = [
  {
    title: "Agent architecture",
    detail: "Stateful graphs, intent routing, bounded retries, and failure paths that are visible rather than hidden."
  },
  {
    title: "Retrieval quality",
    detail: "Hybrid search, rank fusion, evidence grading, and the discipline to abstain when the evidence is thin."
  },
  {
    title: "Production surfaces",
    detail: "FastAPI, PostgreSQL, migrations, and interfaces that someone can actually operate under pressure."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <p className="section-index">03 — colophon</p>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <h2 className="display max-w-[24ch] text-[clamp(2.1rem,4.4vw,3.4rem)] text-ink">
              Computer science at IIIT Sri City, agent engineering by habit.
            </h2>

            <div className="mt-8 max-w-[34rem] space-y-4">
              <p className="body-text">
                I am a final-year CSE student. Most of what I build sits between a language model and
                the real system it is supposed to act on, which is where the interesting failures live.
              </p>
              <p className="body-text">
                My projects share one assumption: a confident wrong answer is worse than an honest
                refusal. So they grade their own evidence, abstain when it is thin, and stop for a
                human before doing anything they cannot undo.
              </p>
            </div>

            <dl className="mt-11 border-t border-[var(--rule-strong)]">
              {focus.map((item, index) => (
                <div
                  key={item.title}
                  className="reveal grid gap-1 border-b border-[var(--rule)] py-5 sm:grid-cols-[12rem_1fr] sm:gap-8"
                  style={{ ["--d" as string]: `${index * 55}ms` }}
                >
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.13em] text-ink">{item.title}</dt>
                  <dd className="text-[0.96rem] leading-[1.68] text-ink-soft">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="lg:border-l lg:border-[var(--rule)] lg:pl-12">
            <p className="mono mb-5">at a glance</p>
            <div className="grid grid-cols-2 gap-px bg-[var(--rule)]">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-paper px-4 py-5">
                  <p className="font-serif text-[2.1rem] leading-none text-ink">
                    {stat.value}
                    {stat.suffix ?? ""}
                  </p>
                  <p className="mono mt-2 leading-[1.6]">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-[var(--rule)] pt-5">
              <p className="mono mb-2">currently</p>
              <p className="text-[0.9rem] leading-[1.65] text-ink-soft">
                Build passes on the placement pipeline, validation pending. Everything else is
                deployed and linked above.
              </p>
            </div>

            <div className="mt-8 border-t border-[var(--rule)] pt-5">
              <p className="mono mb-2">basis</p>
              <p className="text-[0.9rem] leading-[1.65] text-ink-soft">
                B.Tech CSE, 2023–2027. CGPA 8.33/10.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
