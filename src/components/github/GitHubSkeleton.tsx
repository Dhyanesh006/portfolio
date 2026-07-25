"use client";

import { motion } from "framer-motion";

export function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`glass-card rounded-2xl p-5 sm:p-6 ${className}`}>
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-[#1A1A1A] rounded w-1/3" />
        <div className="space-y-2">
          <div className="h-3 bg-[#1A1A1A] rounded w-full" />
          <div className="h-3 bg-[#1A1A1A] rounded w-2/3" />
        </div>
      </div>
    </div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className="glass-card rounded-xl p-4 text-center">
      <div className="animate-pulse space-y-2">
        <div className="h-8 bg-[#1A1A1A] rounded mx-auto w-16" />
        <div className="h-3 bg-[#1A1A1A] rounded mx-auto w-12" />
      </div>
    </div>
  );
}

export function LanguageSkeleton() {
  return (
    <div className="glass-card rounded-xl p-4">
      <div className="animate-pulse space-y-3">
        <div className="h-3 bg-[#1A1A1A] rounded w-1/4" />
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-2.5 bg-[#1A1A1A] rounded-full flex-1" />
              <div className="h-3 bg-[#1A1A1A] rounded w-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ContributionSkeleton() {
  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6">
      <div className="animate-pulse">
        <div className="h-4 bg-[#1A1A1A] rounded w-1/4 mb-4" />
        <div className="grid grid-cols-7 gap-1">
          {[...Array(91)].map((_, i) => (
            <div key={i} className="aspect-square bg-[#1A1A1A] rounded-sm" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function StreakSkeleton() {
  return (
    <div className="glass-card rounded-xl p-4">
      <div className="animate-pulse space-y-3">
        <div className="h-3 bg-[#1A1A1A] rounded w-1/3" />
        <div className="flex gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="text-center flex-1">
              <div className="h-6 bg-[#1A1A1A] rounded mx-auto w-10 mb-1" />
              <div className="h-2 bg-[#1A1A1A] rounded mx-auto w-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6">
      <div className="animate-pulse flex items-center gap-4">
        <div className="w-16 h-16 bg-[#1A1A1A] rounded-full" />
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-[#1A1A1A] rounded w-1/3" />
          <div className="h-3 bg-[#1A1A1A] rounded w-2/3" />
        </div>
      </div>
    </div>
  );
}
