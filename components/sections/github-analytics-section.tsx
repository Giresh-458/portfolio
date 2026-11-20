"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, ExternalLink, GitFork, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils";
import type { GitHubAnalytics } from "@/types";

function Skeleton() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="h-24 animate-pulse rounded-[4px] border border-[rgba(150,200,195,.1)] bg-[rgba(150,200,195,.02)]" />
      ))}
    </div>
  );
}

export function GitHubAnalyticsSection() {
  const [data, setData] = useState<GitHubAnalytics | null>(null);
  const [error, setError] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/github", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load GitHub analytics");
        return response.json() as Promise<GitHubAnalytics>;
      })
      .then(setData)
      .catch((requestError: unknown) => {
        if (requestError instanceof DOMException && requestError.name === "AbortError") return;
        setError(true);
      });
    return () => controller.abort();
  }, []);

  return (
    <section id="github" className="shell scroll-mt-16 border-t border-[rgba(150,200,195,.08)]">
      <div className="shell-inner">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mono-label mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-signal/60" /> live from github
            </p>
            <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink">
              Not hand-typed numbers.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-[1.7] text-muted">
            Fetched from the GitHub API on load: repositories, language mix and recent activity.
          </p>
        </div>

        {!data && !error ? <Skeleton /> : null}

        {error ? (
          <div className="panel p-6 text-[13.5px] text-muted">
            GitHub analytics are unavailable right now. The systems above are unaffected.
          </div>
        ) : null}

        {data ? (
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { icon: BookOpen, label: "public repos", value: data.publicRepos },
                { icon: Star, label: "stars", value: data.totalStars },
                { icon: Users, label: "followers", value: data.followers },
                { icon: GitFork, label: "recent events", value: data.recentActivityAvailable ? data.recentActivity.length : "—" }
              ].map((metric) => (
                <div key={metric.label} className="ticked panel px-5 py-4">
                  <div className="flex items-center justify-between">
                    <metric.icon className="size-4 text-signal/70" />
                    <span className="mono-label">{metric.label}</span>
                  </div>
                  <p className="mt-3 text-[28px] font-medium leading-none tracking-[-0.02em] text-ink">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="panel p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-[14px] font-medium text-ink">language mix</h3>
                <span className="mono-label flex items-center gap-2">
                  <span className="signal-dot" /> live
                </span>
              </div>
              <div className="flex h-1.5 overflow-hidden rounded-full bg-[rgba(150,200,195,.08)]">
                {data.languages.map((language) => (
                  <span
                    key={language.name}
                    className="h-full transition-[width] duration-700"
                    style={{ width: language.percentage + "%", backgroundColor: language.color }}
                  />
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {data.languages.map((language) => (
                  <div key={language.name} className="flex items-center gap-1.5 font-mono text-[10.5px] text-ink-dim">
                    <span className="size-2" style={{ backgroundColor: language.color }} />
                    {language.name}
                    <span className="text-muted">{language.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-2">
              <div className="panel p-6">
                <h3 className="mb-4 text-[14px] font-medium text-ink">top repositories</h3>
                <div className="divide-y divide-[rgba(150,200,195,.09)]">
                  {data.topRepos.slice(0, 5).map((repo) => (
                    <a key={repo.name} href={repo.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-3 py-3">
                      <div className="min-w-0">
                        <p className="truncate font-mono text-[12px] text-ink-dim transition group-hover:text-signal">{repo.name}</p>
                        <p className="mt-0.5 truncate text-[11.5px] text-[#4a5a5e]">{repo.description ?? "repository"}</p>
                      </div>
                      <span className="flex shrink-0 items-center gap-1 font-mono text-[10px] text-muted">
                        <Star className="size-3" /> {repo.stars}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="panel p-6">
                <h3 className="mb-4 text-[14px] font-medium text-ink">recent activity</h3>
                {!data.recentActivityAvailable ? (
                  <p className="text-[13px] leading-[1.65] text-muted">Activity is temporarily unavailable.</p>
                ) : data.recentActivity.length === 0 ? (
                  <p className="text-[13px] leading-[1.65] text-muted">No recent public activity returned.</p>
                ) : (
                  <div className="divide-y divide-[rgba(150,200,195,.09)]">
                    {data.recentActivity.slice(0, 5).map((event) => (
                      <div key={event.id} className="flex items-center justify-between gap-3 py-3">
                        <div className="min-w-0">
                          <p className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-dim">
                            {event.type.replace("Event", "")}
                          </p>
                          <p className="mt-0.5 truncate text-[11.5px] text-[#4a5a5e]">{event.repo}</p>
                        </div>
                        <time className="shrink-0 font-mono text-[10px] text-muted">{formatDate(event.createdAt)}</time>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <a
              href={data.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted transition hover:text-signal"
            >
              github.com/Giresh-458 <ExternalLink className="size-3" />
            </a>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
