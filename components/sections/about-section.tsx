"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { stats } from "@/lib/data";

const focus = [
  { title: "Agent architecture", detail: "Stateful graphs, intent routing, bounded retries, failure paths that are visible." },
  { title: "Retrieval quality", detail: "Hybrid search, rank fusion, evidence grading, and knowing when to abstain." },
  { title: "Production surfaces", detail: "FastAPI, PostgreSQL, migrations, and interfaces people can actually operate." }
];

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="shell scroll-mt-16">
      <div className="shell-inner">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="mono-label mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-signal/60" /> about
            </p>
            <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink">
              Computer science at IIIT Sri City,
              <br className="hidden md:block" /> agent engineering by habit.
            </h2>

            <div className="mt-7 max-w-xl space-y-4 text-[15px] leading-[1.75] text-ink-dim">
              <p>
                I am a final-year CSE student. Most of what I build sits between a language model and
                the real system it is supposed to act on, which is where the interesting failures live.
              </p>
              <p>
                My projects share one assumption: a confident wrong answer is worse than an honest
                refusal. So they grade their own evidence, abstain when it is thin, and stop for a
                human before doing anything they cannot undo.
              </p>
            </div>

            <div className="mt-10 grid gap-px border-t border-[rgba(150,200,195,.1)]">
              {focus.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.06 }}
                  className="group flex flex-col gap-1 border-b border-[rgba(150,200,195,.1)] py-4 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#3d4d51] transition group-hover:text-signal sm:w-44 sm:shrink-0">
                    {item.title}
                  </span>
                  <span className="text-[13.5px] leading-[1.65] text-muted">{item.detail}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.label} className="ticked panel px-5 py-5">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mono-label mt-2">{stat.label}</p>
              </div>
            ))}
            <div className="panel px-5 py-5">
              <p className="mono-label mb-3">currently</p>
              <p className="text-[13.5px] leading-[1.65] text-ink-dim">
                Build passes, validation pending on the placement pipeline. Everything else is deployed
                and linked above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
