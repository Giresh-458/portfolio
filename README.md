# Giresh Velaga — AI Engineering & Full-Stack Portfolio

A developer portfolio with a broad Demon Slayer Corps visual direction: a moonlit Taisho-era village, torii gates, wisteria, Nichirin blade details, breathing-style trails, messenger-crow motifs, and an ink-black, indigo, crimson and wisteria palette. The design uses **background-only scenery throughout**; it does not feature anime characters.

## Built with
- Next.js 16, React 19, TypeScript
- Tailwind CSS, Framer Motion, Lucide
- Responsive motion effects with reduced-motion support
- Original local SVG backdrops for the Corps nightscape, wisteria grounds and swordsmith forge
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
