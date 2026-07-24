# Dhyanesh V — Developer Portfolio

A premium, dark-mode developer portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React + custom SVG brand icons
- **Carousel:** Embla Carousel with autoplay
- **Fonts:** Geist Sans & Geist Mono (self-hosted via `next/font`)

## Features

- Animated particle background with floating gradient blobs
- Typing animation for role titles
- Glassmorphism cards with hover glow effects
- Custom cursor with interactive hover states
- Scroll progress bar
- Command palette (Ctrl+K / Cmd+K)
- Back-to-top button
- Interactive skill cards with animated progress bars
- Expandable project cards with modal detail view
- Experience timeline
- Live GitHub profile data via GitHub API
- Certificate carousel
- Contact form with animated states
- Responsive design (mobile-first)
- Loading screen
- Active section highlighting in navbar

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

### GitHub Pages

The project uses `output: "export"` in `next.config.ts` for static export.

```bash
npm run build
```

The static files will be in the `out/` directory. Deploy to GitHub Pages or any static host.

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_GITHUB_USERNAME` | GitHub username for API | `dhyanesh-v` |

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
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
│   └── use-mouse-glow.ts
├── lib/
│   ├── utils.ts
│   ├── data.ts
│   └── brand-icons.tsx
└── types/
    └── index.ts
```

## Customization

Edit `src/lib/data.ts` to update:
- Personal info and social links
- Skills and proficiency levels
- Projects
- Work experience
- Certificates

Edit `src/app/globals.css` to change the color theme.
