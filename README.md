# Giresh Velaga — AI Engineering & Full-Stack Portfolio

A developer portfolio with a single Zenitsu Agatsuma visual identity: Thunder Breathing lightning, amber moonlight, a black-and-gold palette, temple silhouettes, and Demon Slayer-inspired atmosphere. No other anime characters are used; non-hero sections use background-only thunder artwork so the technical content stays clear.

## Built with
- Next.js 16, React 19, TypeScript
- Tailwind CSS, Framer Motion, Lucide
- Responsive motion effects with reduced-motion support
- One Zenitsu hero scene, local thunder/temple SVG backgrounds, and a gold lightning design system
- GitHub REST API for live public repository, language, and recent activity data

## Local development
```bash
npm install
cp .env.example .env.local
npm run dev
```
On Windows PowerShell, use `Copy-Item .env.example .env.local` instead of `cp`. Open http://localhost:3000. The public GitHub analytics endpoint defaults to Giresh-458; set `GITHUB_USERNAME` only if you want to use a different account.

Use Node.js 22 for local development and CI.

## Environment variables
```env
GITHUB_USERNAME=Giresh-458
GITHUB_TOKEN=
NEXT_PUBLIC_SITE_URL=
```
- `GITHUB_TOKEN` is optional and stays server-side.
- `NEXT_PUBLIC_SITE_URL` is recommended for a stable canonical production origin.
- Vercel can use its deployment URL variables as fallbacks; production builds outside Vercel require an explicit `NEXT_PUBLIC_SITE_URL`.
- Analytics uses live public GitHub data and presents an unavailable message when the API cannot provide it.
- The hero artwork references Zenitsu art from a third-party image host. Confirm usage rights before public release, or replace it with artwork you own or have licensed. The local thunder background is used as a fallback.

## Deployment
1. Import the repository into Vercel.
2. Keep the framework preset as Next.js and the root directory as the repository root.
3. Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin.
4. Optionally set a server-only `GITHUB_TOKEN`.
5. Verify the homepage, project links, contact form, and `/api/github`.

A resume PDF has not been added yet. Add a verified resume before exposing a download link.

## Quality checks
```bash
npm test
npm run typecheck
npm run lint
npm run build
```
