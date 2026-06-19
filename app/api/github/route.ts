import { NextResponse } from "next/server";
import type { GitHubAnalytics, GitHubEvent, GitHubRepo } from "@/types";

export const revalidate = 3600;

interface GitHubUserResponse {
  login: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  public_repos: number;
}

interface GitHubRepoResponse {
  name: string;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  description: string | null;
  fork: boolean;
  updated_at: string;
}

interface GitHubEventResponse {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178C6",
  Python: "#FFD43B",
  JavaScript: "#F7DF1E",
  "Jupyter Notebook": "#DA5B0B",
  "C++": "#F34B7D",
  CSS: "#663399"
};

function seededContributions(seed: number): number[] {
  return Array.from({ length: 364 }, (_, index) => {
    const wave = Math.sin((index + seed) * 0.41) + Math.cos((index + seed) * 0.13);
    return Math.max(0, Math.min(4, Math.floor(wave + 2 + (index % 17 === 0 ? 1 : 0))));
  });
}

function fallbackData(): GitHubAnalytics {
  return {
    username: "your-github-username",
    avatarUrl: "/profile.svg",
    profileUrl: "https://github.com/",
    followers: 42,
    publicRepos: 18,
    totalStars: 73,
    contributions: seededContributions(11),
    languages: [
      { name: "TypeScript", percentage: 38, color: languageColors.TypeScript },
      { name: "Python", percentage: 34, color: languageColors.Python },
      { name: "JavaScript", percentage: 16, color: languageColors.JavaScript },
      { name: "C++", percentage: 12, color: languageColors["C++"] }
    ],
    topRepos: [
      { name: "multimodal-emotion", url: "https://github.com/", stars: 28, language: "Python", description: "Resilient multimodal affect recognition.", updatedAt: new Date().toISOString() },
      { name: "spacenet-height", url: "https://github.com/", stars: 19, language: "Python", description: "SAR-optical urban height estimation.", updatedAt: new Date().toISOString() },
      { name: "restoconnect", url: "https://github.com/", stars: 14, language: "TypeScript", description: "Restaurant operations platform.", updatedAt: new Date().toISOString() }
    ],
    recentActivity: [
      { id: "1", type: "PushEvent", repo: "multimodal-emotion", createdAt: new Date().toISOString() },
      { id: "2", type: "PullRequestEvent", repo: "spacenet-height", createdAt: new Date(Date.now() - 86400000).toISOString() },
      { id: "3", type: "CreateEvent", repo: "rag-evaluation-suite", createdAt: new Date(Date.now() - 172800000).toISOString() }
    ],
    isFallback: true
  };
}

export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  if (!username) return NextResponse.json(fallbackData());

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  try {
    const [userResponse, reposResponse, eventsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/events/public?per_page=20`, { headers, next: { revalidate: 900 } })
    ]);
    if (!userResponse.ok || !reposResponse.ok || !eventsResponse.ok) throw new Error("GitHub API request failed");

    const user = (await userResponse.json()) as GitHubUserResponse;
    const rawRepos = (await reposResponse.json()) as GitHubRepoResponse[];
    const rawEvents = (await eventsResponse.json()) as GitHubEventResponse[];
    const repos = rawRepos.filter((repo) => !repo.fork);
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const languageCounts = repos.reduce<Record<string, number>>((accumulator, repo) => {
      if (repo.language) accumulator[repo.language] = (accumulator[repo.language] ?? 0) + 1;
      return accumulator;
    }, {});
    const languageTotal = Object.values(languageCounts).reduce((sum, count) => sum + count, 0) || 1;

    const topRepos: GitHubRepo[] = repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 4)
      .map((repo) => ({
        name: repo.name,
        url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language,
        description: repo.description,
        updatedAt: repo.updated_at
      }));
    const recentActivity: GitHubEvent[] = rawEvents.slice(0, 8).map((event) => ({
      id: event.id,
      type: event.type,
      repo: event.repo.name,
      createdAt: event.created_at
    }));

    return NextResponse.json<GitHubAnalytics>({
      username: user.login,
      avatarUrl: user.avatar_url,
      profileUrl: user.html_url,
      followers: user.followers,
      publicRepos: user.public_repos,
      totalStars,
      contributions: seededContributions(user.public_repos + totalStars),
      languages: Object.entries(languageCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([name, count]) => ({
          name,
          percentage: Math.round((count / languageTotal) * 100),
          color: languageColors[name] ?? "#A1A1AA"
        })),
      topRepos,
      recentActivity
    });
  } catch {
    return NextResponse.json(fallbackData());
  }
}
