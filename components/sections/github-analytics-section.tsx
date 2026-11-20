"use client";

import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils";
import type { GitHubAnalytics } from "@/types";

function Skeleton() {
  return (
    <div className="space-y-3">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="h-11 animate-pulse border-b border-[var(--rule)] bg-[rgba(22,19,14,0.03)]" />
      ))}
    </div>
  );
}

export function GitHubAnalyticsSection() {
  const [data, setData] = useState<GitHubAnalytics | null>(null);
  const [error, setError] = useState(false);

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
    <section id="github" className="section">
      <div className="wrap">
        <p className="section-index">05 — record</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <h2 className="display text-[clamp(2.1rem,4.4vw,3.4rem)] text-ink">
              Not hand-typed
              <br />
              numbers.
            </h2>
            <p className="body-text mt-7 max-w-[22rem] text-ink-faint">
              Fetched from the GitHub API when the page loads. Repositories, language distribution,
              and recent public activity.
            </p>

            {data ? (
              <a
                href={data.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="mono link-underline mt-6 inline-flex items-center gap-1.5 text-ink-soft hover:text-ink"
              >
                github.com/Giresh-458 <ExternalLink className="size-3" />
              </a>
            ) : null}
          </div>

          <div>
            {!data && !error ? <Skeleton /> : null}

            {error ? (
              <p className="border-t border-[var(--rule)] py-5 text-[0.94rem] text-ink-faint">
                GitHub analytics are unavailable right now. The systems above are unaffected.
              </p>
            ) : null}

            {data ? (
              <div className="reveal">
                <dl className="grid grid-cols-2 gap-px bg-[var(--rule)] sm:grid-cols-4">
                  {[
                    { label: "public repos", value: data.publicRepos },
                    { label: "stars", value: data.totalStars },
                    { label: "followers", value: data.followers },
                    { label: "events", value: data.recentActivityAvailable ? data.recentActivity.length : "—" }
                  ].map((metric) => (
                    <div key={metric.label} className="bg-paper px-4 py-5">
                      <dd className="font-serif text-[1.9rem] leading-none text-ink">{metric.value}</dd>
                      <dt className="mono mt-2 leading-[1.5]">{metric.label}</dt>
                    </div>
                  ))}
                </dl>

                <div className="mt-9">
                  <p className="mono mb-3">language distribution</p>
                  <div className="flex h-2 overflow-hidden border border-[var(--rule)]">
                    {data.languages.map((language) => (
                      <span
                        key={language.name}
                        className="h-full transition-[width] duration-700"
                        style={{ width: language.percentage + "%", backgroundColor: language.color }}
                        title={language.name + " " + language.percentage + "%"}
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                    {data.languages.map((language) => (
                      <span key={language.name} className="flex items-center gap-1.5 font-mono text-[10.5px] text-ink-soft">
                        <span className="size-1.5" style={{ backgroundColor: language.color }} />
                        {language.name}
                        <span className="text-ink-faint">{language.percentage}%</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-9 grid gap-x-10 gap-y-8 md:grid-cols-2">
                  <div>
                    <p className="mono mb-3">top repositories</p>
                    <ul>
                      {data.topRepos.slice(0, 5).map((repo) => (
                        <li key={repo.name}>
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-baseline justify-between gap-3 border-b border-[var(--rule)] py-2.5"
                          >
                            <span className="truncate font-mono text-[11.5px] text-ink-soft transition group-hover:text-vermilion">
                              {repo.name}
                            </span>
                            <span className="shrink-0 font-mono text-[10px] text-ink-faint">{repo.stars} ★</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mono mb-3">recent activity</p>
                    {!data.recentActivityAvailable ? (
                      <p className="text-[0.9rem] text-ink-faint">Activity is temporarily unavailable.</p>
                    ) : data.recentActivity.length === 0 ? (
                      <p className="text-[0.9rem] text-ink-faint">No recent public activity returned.</p>
                    ) : (
                      <ul>
                        {data.recentActivity.slice(0, 5).map((event) => (
                          <li
                            key={event.id}
                            className="flex items-baseline justify-between gap-3 border-b border-[var(--rule)] py-2.5"
                          >
                            <span className="truncate font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft">
                              {event.type.replace("Event", "")}
                            </span>
                            <time className="shrink-0 font-mono text-[10px] text-ink-faint">
                              {formatDate(event.createdAt)}
                            </time>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
