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
  return <div className="grid gap-5 lg:grid-cols-3">{[0, 1, 2].map((item) => <div key={item} className="h-52 animate-pulse border border-[#E7C6AF]/10 bg-linear-to-r from-white/3 via-white/[0.07] to-white/3 bg-size-[200%_100%]" />)}</div>;
}

export function GitHubAnalyticsSection() {
  const [data, setData] = useState<GitHubAnalytics | null>(null);
  const [error, setError] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/github", { signal: controller.signal }).then((response) => {
      if (!response.ok) throw new Error("Unable to load GitHub analytics");
      return response.json() as Promise<GitHubAnalytics>;
    }).then(setData).catch((requestError: unknown) => {
      if (requestError instanceof DOMException && requestError.name === "AbortError") return;
      setError(true);
    });
    return () => controller.abort();
  }, []);

  return (
    <section id="github" className="section-shell section-github scroll-mt-20">
      <SectionHeader eyebrow="GitHub activity" title="Work, out in the open." description="A live view of repositories, language distribution and recent activity—pulled from GitHub, not made-up portfolio counters." />
      <div className="portfolio-panel relative mb-8 overflow-hidden rounded-2xl p-6 md:p-8">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#F1C75B]/[0.06] to-transparent" />
        <div className="relative max-w-2xl">
          <p className="text-sm font-medium text-[#F1C75B]">GitHub profile</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#F1F0EA] md:text-3xl">Work, out in the open.</h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#A7A69F]">A live view of repositories, language distribution, and recent activity, pulled from GitHub rather than manually entered counters.</p>
          <a href="https://github.com/Giresh-458" target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-medium text-[#F1C75B] hover:text-[#FFDA76]">View GitHub profile ↗</a>
        </div>
      </div>
      {!data && !error ? <AnalyticsSkeleton /> : null}
      {error ? <GlassCard className="portfolio-panel p-8 text-center text-muted">GitHub analytics are temporarily unavailable. The project records above remain accessible.</GlassCard> : null}
      {data ? (
        <motion.div initial={reduceMotion ? undefined : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: BookOpen, label: "Public repositories", value: data.publicRepos },
              { icon: Star, label: "Stars earned", value: data.totalStars },
              { icon: Users, label: "Followers", value: data.followers },
              { icon: GitFork, label: "Recent events", value: data.recentActivityAvailable ? data.recentActivity.length : "—" }
            ].map((metric, index) => <GlassCard key={metric.label} className="portfolio-panel p-6">
              <div className="flex items-center justify-between"><metric.icon className="size-5 text-[#43D5ED]" /><span className="font-serif text-2xl text-netflix/75">{["壱", "弐", "参", "肆"][index]}</span></div>
              <p className="mt-5 text-4xl font-semibold tracking-tight text-foreground">{metric.value}</p><p className="mt-1 text-sm text-[#AFA3A7]">{metric.label}</p>
            </GlassCard>)}
          </div>
          <GlassCard className="portfolio-panel p-6 md:p-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><h3 className="text-xl font-semibold tracking-tight text-foreground">Language mix</h3><p className="mt-1 text-sm text-[#AFA3A7]">Primary language reported for each public repository.</p></div><span className="font-mono text-[8px] uppercase tracking-[.2em] text-[#4AD6EC]">Live GitHub data</span></div>
            <div className="flex h-2 overflow-hidden bg-white/5">{data.languages.map((language) => <span key={language.name} className="h-full transition-[width] duration-700" style={{ width: language.percentage + "%", backgroundColor: language.color }} />)}</div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">{data.languages.map((language) => <div key={language.name} className="flex items-center gap-2 text-sm"><span className="size-2.5" style={{ backgroundColor: language.color }} /><span className="text-[#D3C8C8]">{language.name}</span><span className="font-mono text-xs text-[#84787D]">{language.percentage}%</span></div>)}</div>
          </GlassCard>
          <div className="grid gap-5 lg:grid-cols-2">
            <GlassCard className="portfolio-panel p-6 md:p-8"><h3 className="text-xl font-semibold tracking-tight text-foreground">Top repositories</h3><div className="mt-5 divide-y divide-[#E7C6AF]/10">{data.topRepos.map((repo) => <a key={repo.name} href={repo.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 py-4"><div><p className="font-medium text-[#E5D8D6] group-hover:text-[#50D7ED]">{repo.name}</p><p className="mt-1 line-clamp-1 text-sm text-[#8D8185]">{repo.description ?? "Open-source repository"}</p></div><span className="flex shrink-0 items-center gap-1 text-xs text-[#B4A3A5]"><Star className="size-3.5" /> {repo.stars}</span></a>)}</div></GlassCard>
            <GlassCard className="portfolio-panel p-6 md:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">Recent activity</h3>
              {!data.recentActivityAvailable ? (
                <p className="mt-5 text-sm leading-6 text-[#AFA3A7]">Recent activity is temporarily unavailable. Profile and repository metrics are still available.</p>
              ) : data.recentActivity.length === 0 ? (
                <p className="mt-5 text-sm leading-6 text-[#AFA3A7]">GitHub returned no recent public activity.</p>
              ) : (
                <div className="mt-5 divide-y divide-[#E7C6AF]/10">{data.recentActivity.slice(0, 5).map((event) => <div key={event.id} className="flex items-center justify-between gap-4 py-4"><div><p className="text-sm font-medium text-[#D3C8C8]">{event.type.replace("Event", "")}</p><p className="mt-1 text-xs text-[#8D8185]">{event.repo}</p></div><time className="shrink-0 font-mono text-[10px] text-[#8D8185]">{formatDate(event.createdAt)}</time></div>)}</div>
              )}
            </GlassCard>
          </div>
          <Button asChild variant="outline"><a href={data.profileUrl} target="_blank" rel="noreferrer">View GitHub profile <ExternalLink className="size-4" /></a></Button>
        </motion.div>
      ) : null}
    </section>
  );
}
