import { NextResponse } from "next/server";
import { GITHUB_USERNAME } from "@/lib/data";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const BASE = "https://api.github.com";
const headers: HeadersInit = GITHUB_TOKEN
  ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
  : {};

async function ghFetch(url: string) {
  const res = await fetch(url, { headers, next: { revalidate: 1800 } });
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
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
  CSharp: "#178600",
  Lua: "#000080",
};

let cachedData: unknown = null;
let cacheTime = 0;
const CACHE_DURATION = 30 * 60 * 1000;

export async function GET() {
  const now = Date.now();
  if (cachedData && now - cacheTime < CACHE_DURATION) {
    return NextResponse.json(cachedData);
  }

  try {
    const profile = await ghFetch(`${BASE}/users/${GITHUB_USERNAME}`);
    const repos = await ghFetch(
      `${BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    );

    let totalStars = 0;
    let totalForks = 0;
    const langMap: Record<string, number> = {};

    const langPromises = (repos as Array<{ name: string }>)
      .slice(0, 15)
      .map(async (repo) => {
        try {
          const langs = await ghFetch(
            `${BASE}/repos/${GITHUB_USERNAME}/${repo.name}/languages`
          );
          for (const [lang, bytes] of Object.entries(langs as Record<string, number>)) {
            langMap[lang] = (langMap[lang] || 0) + bytes;
          }
        } catch {
          // skip
        }
      });

    await Promise.all(langPromises);

    for (const repo of repos as Array<{
      stargazers_count: number;
      forks_count: number;
    }>) {
      totalStars += repo.stargazers_count;
      totalForks += repo.forks_count;
    }

    const totalBytes = Object.values(langMap).reduce((a, b) => a + b, 0);
    const languages = Object.entries(langMap)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 8)
      .map(([name, bytes]) => ({
        name,
        bytes,
        color: LANG_COLORS[name] || null,
        percent: totalBytes > 0 ? Math.round((bytes / totalBytes) * 100) : 0,
      }));

    const data = {
      profile: {
        login: profile.login,
        name: profile.name,
        bio: profile.bio,
        avatar_url: profile.avatar_url,
        public_repos: profile.public_repos,
        followers: profile.followers,
        following: profile.following,
      },
      stats: {
        publicRepos: profile.public_repos,
        followers: profile.followers,
        following: profile.following,
        totalStars,
        totalForks,
      },
      languages,
    };

    cachedData = data;
    cacheTime = now;

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 502 }
    );
  }
}
