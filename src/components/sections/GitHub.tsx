"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitFork, Star, ExternalLink, Loader2 } from "lucide-react";
import { GithubIcon } from "@/lib/brand-icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { fetchGitHubData, fetchStreak, type GitHubDataBundle, type StreakData } from "@/lib/github";
import type { GitHubData, GitHubRepo } from "@/types";
import GitHubContributionGraph from "@/components/github/GitHubContributionGraph";
import GitHubStats from "@/components/github/GitHubStats";
import GitHubStreak from "@/components/github/GitHubStreak";
import GitHubTopLanguages from "@/components/github/GitHubTopLanguages";
import GitHubProfileSummary from "@/components/github/GitHubProfileSummary";

export default function GitHubSection() {
  const [profile, setProfile] = useState<GitHubData | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [bundle, setBundle] = useState<GitHubDataBundle | null>(null);
  const [streak, setStreak] = useState<StreakData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [bundleData, streakData] = await Promise.all([
          fetchGitHubData(),
          fetchStreak().catch(() => null),
        ]);

        const reposRes = await fetch(
          `https://api.github.com/users/${bundleData.profile.login}/repos?sort=updated&per_page=6`
        );
        const reposData = reposRes.ok ? await reposRes.json() : [];

        setProfile(bundleData.profile as unknown as GitHubData);
        setRepos(reposData);
        setBundle(bundleData);
        setStreak(streakData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section id="github" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading title="GitHub" subtitle="Open Source" />

        {loading ? (
          <div className="flex items-center justify-center py-16 sm:py-20">
            <Loader2 size={28} className="text-[#FFFFFF] animate-spin sm:w-8 sm:h-8" />
          </div>
        ) : error || !profile ? (
          <div className="text-center py-16 sm:py-20">
            <GithubIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#A3A3A3] mx-auto mb-4" />
            <p className="text-[#A3A3A3] text-sm">
              Unable to load GitHub data. Check your network or try again later.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF] mb-3 sm:mb-4">
              Recent Repositories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {repos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-xl p-4 sm:p-5 group block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-[#FFFFFF] font-semibold text-sm group-hover:underline truncate">
                      {repo.name}
                    </h4>
                    <ExternalLink
                      size={14}
                      className="text-[#A3A3A3] shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <p className="text-[#A3A3A3] text-xs leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
                    {repo.description || "No description provided."}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-[#A3A3A3]">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor:
                              repo.language === "Java"
                                ? "#b07219"
                                : repo.language === "Python"
                                ? "#3572A5"
                                : repo.language === "JavaScript"
                                ? "#f1e05a"
                                : repo.language === "TypeScript"
                                ? "#3178c6"
                                : repo.language === "HTML"
                                ? "#e34c26"
                                : repo.language === "CSS"
                                ? "#563d7c"
                                : "#A3A3A3",
                          }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={12} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} />
                      {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="space-y-6">
              <GitHubContributionGraph />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GitHubStats data={bundle} loading={false} error={!bundle} />
                <GitHubStreak streak={streak} loading={false} error={!streak} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GitHubTopLanguages data={bundle} loading={false} error={!bundle} />
                <GitHubProfileSummary data={bundle} loading={false} error={!bundle} />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
