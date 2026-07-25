"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchProfile, type GitHubProfile } from "@/lib/github";
import { ProfileSkeleton } from "./GitHubSkeleton";
import { User, GitBranch, Users, ExternalLink } from "lucide-react";

export default function GitHubProfileSummary() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProfile()
      .then(setProfile)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ProfileSkeleton />;

  if (error || !profile) {
    return (
      <div className="glass-card rounded-2xl p-5 text-center">
        <p className="text-[#A3A3A3] text-xs">Unable to load profile</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-4 sm:p-6"
    >
      <div className="flex items-start gap-4">
        <img
          src={profile.avatar_url}
          alt={profile.name || profile.login}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#FFFFFF]/20 shrink-0"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-sm sm:text-base font-bold text-[#FFFFFF] truncate">
              {profile.name || profile.login}
            </h4>
            <a
              href={`https://github.com/${profile.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A3A3A3] hover:text-[#FFFFFF] transition-colors shrink-0"
            >
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs text-[#A3A3A3] mb-2">@{profile.login}</p>
          {profile.bio && (
            <p className="text-xs text-[#A3A3A3] leading-relaxed line-clamp-2 mb-3">
              {profile.bio}
            </p>
          )}
          <div className="flex gap-4">
            <div className="flex items-center gap-1 text-[#A3A3A3]">
              <GitBranch size={12} />
              <span className="text-xs">
                <span className="text-[#FFFFFF] font-medium">{profile.public_repos}</span> repos
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#A3A3A3]">
              <Users size={12} />
              <span className="text-xs">
                <span className="text-[#FFFFFF] font-medium">{profile.followers}</span> followers
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#A3A3A3]">
              <Users size={12} />
              <span className="text-xs">
                <span className="text-[#FFFFFF] font-medium">{profile.following}</span> following
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
