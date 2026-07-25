import { GITHUB_USERNAME } from "@/lib/data";

const BASE = "https://api.github.com";

async function ghFetch<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

export interface GitHubProfile {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface LanguageInfo {
  name: string;
  bytes: number;
  color: string | null;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  totalContributions: number;
}

const LANG_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Java: "#b07219",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C++": "#f34b7d",
  C: "#555555",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  Vue: "#41b883",
  SCSS: "#c6538c",
  Bash: "#89e051",
};

export async function fetchProfile(): Promise<GitHubProfile> {
  return ghFetch<GitHubProfile>(`${BASE}/users/${GITHUB_USERNAME}`);
}

export async function fetchRepos(): Promise<GitHubRepo[]> {
  return ghFetch<GitHubRepo[]>(
    `${BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
  );
}

export async function fetchLanguages(): Promise<LanguageInfo[]> {
  const repos = await fetchRepos();
  const langMap: Record<string, number> = {};

  await Promise.all(
    repos.slice(0, 10).map(async (repo) => {
      try {
        const langs = await ghFetch<Record<string, number>>(
          `${BASE}/repos/${GITHUB_USERNAME}/${repo.name}/languages`
        );
        for (const [lang, bytes] of Object.entries(langs)) {
          langMap[lang] = (langMap[lang] || 0) + bytes;
        }
      } catch {
        // skip failed repos
      }
    })
  );

  const sorted = Object.entries(langMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8)
    .map(([name, bytes]) => ({
      name,
      bytes,
      color: LANG_COLORS[name] || null,
    }));

  return sorted;
}

export async function fetchContributions(): Promise<ContributionDay[]> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const days: ContributionDay[] = [];
    for (const week of data.contributions || []) {
      for (const day of week) {
        days.push({
          date: day.date,
          count: day.count,
          level: day.level,
        });
      }
    }
    return days;
  } catch {
    return [];
  }
}

export async function fetchStreak(): Promise<StreakData> {
  const contributions = await fetchContributions();

  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;
  let totalContributions = 0;

  for (const day of contributions) {
    totalContributions += day.count;
    if (day.count > 0) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  }

  const today = new Date().toISOString().split("T")[0];
  for (let i = contributions.length - 1; i >= 0; i--) {
    if (contributions[i].date <= today && contributions[i].count > 0) {
      currentStreak++;
    } else if (contributions[i].date <= today) {
      break;
    }
  }

  return { currentStreak, longestStreak, totalContributions };
}

export async function fetchStats() {
  const [profile, repos] = await Promise.all([fetchProfile(), fetchRepos()]);

  let totalStars = 0;
  let totalForks = 0;
  for (const repo of repos) {
    totalStars += repo.stargazers_count;
    totalForks += repo.forks_count;
  }

  return {
    publicRepos: profile.public_repos,
    followers: profile.followers,
    following: profile.following,
    totalStars,
    totalForks,
  };
}
