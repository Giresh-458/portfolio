"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, ExternalLink, GitFork, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { formatDate } from "@/lib/utils";
import type { GitHubAnalytics } from "@/types";

function AnalyticsSkeleton() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {[0, 1, 2].map((item) => (
        <div key={item} className="h-52 animate-pulse rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] via-white/[0.07] to-white/[0.03] bg-[length:200%_100%]" />
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
    <section id="github" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="Open source signal" title="GitHub analytics, live." description="A current view of repository activity, language distribution, and work shipped in public." />
      {!data && !error ? <AnalyticsSkeleton /> : null}
      {error ? (
        <GlassCard className="p-8 text-center text-zinc-400">GitHub analytics are temporarily unavailable. The project cards above remain fully accessible.</GlassCard>
      ) : null}
      {data ? (
        <motion.div initial={reduceMotion ? undefined : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: BookOpen, label: "Public repositories", value: data.publicRepos },
              { icon: Star, label: "Stars earned", value: data.totalStars },
              { icon: Users, label: "Followers", value: data.followers },
              { icon: GitFork, label: "Recent events", value: data.recentActivity.length }
            ].map((metric) => (
              <GlassCard key={metric.label} className="p-6">
                <metric.icon className="size-5 text-netflix" />
                <p className="mt-5 font-display text-3xl font-black text-white">{metric.value}</p>
                <p className="mt-1 text-sm text-zinc-500">{metric.label}</p>
              </GlassCard>
            ))}
          </div>
          <GlassCard className="p-6 md:p-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Language mix across public repositories</h3>
                <p className="mt-1 text-sm text-zinc-500">Calculated from each repository’s reported primary language, not lines of code.</p>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A6C69E]/75">Live GitHub data</span>
            </div>
            <div className="flex h-2 overflow-hidden rounded-full bg-white/[0.05]">
              {data.languages.map((language) => (
                <span key={language.name} className="h-full transition-[width] duration-700" style={{ width: `${language.percentage}%`, backgroundColor: language.color }} />
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
              {data.languages.map((language) => (
                <div key={language.name} className="flex items-center gap-2 text-sm">
                  <span className="size-2.5 rounded-full" style={{ backgroundColor: language.color }} />
                  <span className="text-zinc-300">{language.name}</span>
                  <span className="font-mono text-xs text-zinc-600">{language.percentage}%</span>
                </div>
              ))}
            </div>
          </GlassCard>
          <div className="grid gap-5 lg:grid-cols-2">
            <GlassCard className="p-6 md:p-8">
              <h3 className="text-lg font-bold text-white">Top repositories</h3>
              <div className="mt-5 divide-y divide-white/10">
                {data.topRepos.map((repo) => (
                  <a key={repo.name} href={repo.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 py-4">
                    <div>
                      <p className="font-medium text-zinc-200 group-hover:text-netflix">{repo.name}</p>
                      <p className="mt-1 line-clamp-1 text-sm text-zinc-600">{repo.description ?? "Open-source repository"}</p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 text-xs text-zinc-500"><Star className="size-3.5" /> {repo.stars}</span>
                  </a>
                ))}
              </div>
            </GlassCard>
            <GlassCard className="p-6 md:p-8">
              <h3 className="text-lg font-bold text-white">Recent activity</h3>
              <div className="mt-5 divide-y divide-white/10">
                {data.recentActivity.slice(0, 5).map((event) => (
                  <div key={event.id} className="flex items-center justify-between gap-4 py-4">
                    <div>
                      <p className="text-sm font-medium text-zinc-300">{event.type.replace("Event", "")}</p>
                      <p className="mt-1 text-xs text-zinc-600">{event.repo}</p>
                    </div>
                    <time className="shrink-0 font-mono text-[10px] text-zinc-600">{formatDate(event.createdAt)}</time>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
          <Button asChild variant="outline">
            <a href={data.profileUrl} target="_blank" rel="noreferrer">View GitHub profile <ExternalLink className="size-4" /></a>
          </Button>
        </motion.div>
      ) : null}
    </section>
  );
}
