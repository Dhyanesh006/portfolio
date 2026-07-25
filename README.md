# Dhyanesh V — Developer Portfolio

A premium, dark-mode developer portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 (via PostCSS, `@theme` in CSS)
- **Animations:** Framer Motion 12
- **Icons:** Lucide React + Google Material Symbols (CDN) + custom SVG brand icons
- **Carousel:** Embla Carousel with autoplay
- **Fonts:** Geist Sans & Geist Mono (self-hosted via `next/font`)
- **Utilities:** clsx + tailwind-merge (`cn()` helper)

## Features

### Hero & Layout
- Animated particle background with floating gradient blobs
- Typing animation for role titles
- Glassmorphism navbar with active section highlighting
- Mobile: icon-only bottom navigation bar
- Scroll progress bar
- Back-to-top button
- Command palette (Ctrl+K / Cmd+K)

### Sections
- Interactive skill cards with animated progress bars and category filters
- Expandable project cards with modal detail view
- Experience timeline (alternating left/right on desktop, single column on mobile)
- Certificate carousel with autoplay
- Contact form with animated submit states
- Footer with social links

### GitHub Integration
- **GitHub Profile Summary** — avatar, username, bio, repos, followers, following
- **GitHub Stats** — public repos, followers, following, total stars, total forks
- **GitHub Streak** — current streak, longest streak, total contribution days
- **GitHub Contribution Graph** — live contribution heatmap (last year)
- **Top Languages** — most-used languages with animated progress bars and color pills
- **Recent Repositories** — latest 6 repos with language, stars, and forks
- All data fetched from GitHub API with server-side caching (30min) via `/api/github`
- Contribution data from `github-contributions-api` with 1hr cache

### Mobile Optimizations
- Fluid sizing with CSS `clamp()` for all images and text (no breakpoint jumps)
- Real-time screen detection via `useScreenSize` hook
- 44px minimum touch targets on all interactive elements
- Reduced particle count on mobile for performance
- `prefers-reduced-motion` support
- Reduced backdrop-filter blur on mobile for GPU performance

### Design System
- Custom glass-card, liquid-glass, and noise-bg utilities
- Animated progress bars, skill cards, and project cards
- Custom cursor (desktop only, hidden on mobile)
- Dot-grid background pattern
- Comic bubble frame for profile image

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Deploy — no configuration needed

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_GITHUB_USERNAME` | GitHub username for API | `dhyanesh-v` |
| `GITHUB_TOKEN` | Optional GitHub PAT for higher API rate limits (5000/hr vs 60/hr) | — |

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── github/
│   │       └── route.ts          # Cached GitHub API endpoint
│   ├── globals.css               # Theme, animations, custom utilities
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── github/
│   │   ├── GitHubContributionGraph.tsx
│   │   ├── GitHubStats.tsx
│   │   ├── GitHubStreak.tsx
│   │   ├── GitHubTopLanguages.tsx
│   │   ├── GitHubProfileSummary.tsx
│   │   └── GitHubSkeleton.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── BackToTop.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── GitHub.tsx
│   │   ├── Certificates.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── SectionHeading.tsx
│       ├── LoadingScreen.tsx
│       └── CommandPalette.tsx
├── hooks/
│   ├── use-typing-animation.ts
│   ├── use-scroll-progress.ts
│   ├── use-count-up.ts
│   ├── use-active-section.ts
│   ├── use-mouse-glow.ts
│   └── use-screen-size.ts
├── lib/
│   ├── utils.ts                  # cn() helper
│   ├── data.ts                   # All static content & config
│   ├── github.ts                 # GitHub API types & fetch utilities
│   └── brand-icons.tsx           # Custom SVG icons
└── types/
    └── index.ts
```

## Customization

Edit `src/lib/data.ts` to update:
- Personal info and social links
- GitHub username
- Skills and proficiency levels
- Projects
- Work experience
- Certificates

Edit `src/app/globals.css` to change the color theme (via `@theme` variables).
