import { NextResponse } from "next/server";
import { GITHUB_USERNAME } from "@/lib/data";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const QUERY = `
  query ($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

let cachedData: unknown = null;
let cacheTime = 0;
const CACHE_DURATION = 30 * 60 * 1000;

export async function GET() {
  const now = Date.now();
  if (cachedData && now - cacheTime < CACHE_DURATION) {
    return NextResponse.json(cachedData);
  }

  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN not set" },
      { status: 500 }
    );
  }

  const to = new Date();
  const from = new Date();
  from.setFullYear(from.getFullYear() - 1);

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: {
          username: GITHUB_USERNAME,
          from: from.toISOString(),
          to: to.toISOString(),
        },
      }),
      next: { revalidate: 1800 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `GitHub API ${res.status}` },
        { status: 502 }
      );
    }

    const json = await res.json();
    const calendar =
      json.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return NextResponse.json({ days: [], total: 0 });
    }

    const days: { date: string; count: number }[] = [];
    for (const week of calendar.weeks) {
      for (const day of week.contributionDays) {
        days.push({ date: day.date, count: day.contributionCount });
      }
    }

    const data = { days, total: calendar.totalContributions };
    cachedData = data;
    cacheTime = now;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch contributions" },
      { status: 502 }
    );
  }
}
