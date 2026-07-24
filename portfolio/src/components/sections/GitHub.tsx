"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, GitFork, Star, ExternalLink, Loader2 } from "lucide-react";
import { GithubIcon } from "@/lib/brand-icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { GITHUB_USERNAME } from "@/lib/data";
import type { GitHubData, GitHubRepo } from "@/types";

export default function GitHubSection() {
  const [profile, setProfile] = useState<GitHubData | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
          ),
        ]);

        if (!profileRes.ok || !reposRes.ok) throw new Error("Failed");

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        setProfile(profileData);
        setRepos(reposData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section id="github" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="GitHub" subtitle="Open Source" />

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={32} className="text-[#FBBF24] animate-spin" />
          </div>
        ) : error || !profile ? (
          <div className="text-center py-20">
            <GithubIcon className="w-12 h-12 text-[#A3A3A3] mx-auto mb-4" />
            <p className="text-[#A3A3A3]">
              Unable to load GitHub data. Check your network or try again later.
            </p>
          </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 mb-8"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={profile.avatar_url}
                  alt={profile.name || profile.login}
                  className="w-20 h-20 rounded-full border-2 border-[#FBBF24]/30"
                  loading="lazy"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-[#F5F5F5]">
                    {profile.name || profile.login}
                  </h3>
                  {profile.bio && (
                    <p className="text-[#A3A3A3] text-sm mt-1">{profile.bio}</p>
                  )}
                </div>
                <div className="flex gap-8 md:ml-auto">
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-[#A3A3A3] text-xs mb-1">
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repos</span>
                    </div>
                    <p className="text-2xl font-bold text-[#F5F5F5]">
                      {profile.public_repos}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-[#A3A3A3] text-xs mb-1">
                      <Users size={14} />
                      <span>Followers</span>
                    </div>
                    <p className="text-2xl font-bold text-[#F5F5F5]">
                      {profile.followers}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-[#A3A3A3] text-xs mb-1">
                      <Users size={14} />
                      <span>Following</span>
                    </div>
                    <p className="text-2xl font-bold text-[#F5F5F5]">
                      {profile.following}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <h3 className="text-lg font-semibold text-[#F5F5F5] mb-4">
              Recent Repositories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  className="glass-card rounded-xl p-5 group block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-[#FBBF24] font-semibold text-sm group-hover:underline truncate">
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
          </>
        )}
      </div>
    </section>
  );
}
