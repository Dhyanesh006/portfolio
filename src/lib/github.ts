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
  percent: number;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  totalContributions: number;
}

export interface GitHubDataBundle {
  profile: GitHubProfile;
  stats: {
    publicRepos: number;
    followers: number;
    following: number;
    totalStars: number;
    totalForks: number;
  };
  languages: LanguageInfo[];
}

let cachedBundle: GitHubDataBundle | null = null;
let bundleCacheTime = 0;
const BUNDLE_CACHE = 5 * 60 * 1000;

export async function fetchGitHubData(): Promise<GitHubDataBundle> {
  const now = Date.now();
  if (cachedBundle && now - bundleCacheTime < BUNDLE_CACHE) {
    return cachedBundle;
  }

  const res = await fetch("/api/github", { next: { revalidate: 1800 } });
  if (!res.ok) throw new Error("Failed to fetch GitHub data");
  const data = await res.json();

  cachedBundle = data;
  bundleCacheTime = now;
  return data;
}

export async function fetchContributions(): Promise<ContributionDay[]> {
  try {
    const res = await fetch("/api/contributions", {
      next: { revalidate: 1800 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.days || []).map(
      (d: { date: string; count: number }) => ({
        date: d.date,
        count: d.count,
        level: d.count === 0
          ? 0
          : d.count <= 3
          ? 1
          : d.count <= 6
          ? 2
          : d.count <= 9
          ? 3
          : 4,
      })
    );
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
