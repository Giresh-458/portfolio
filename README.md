# Giresh Velaga — AI Engineering & Full-Stack Portfolio

A developer portfolio with a broad Demon Slayer Corps visual direction: a night shrine, traditional Japanese architecture, wisteria, swordsmith-forge imagery, layered breathing-style effects, and an ink-black, indigo, crimson and wisteria palette. The portfolio uses **photographic raster images for scene and project artwork**, with no anime character portraits, custom SVG illustrations, or SVG project thumbnails. CSS provides atmosphere and motion while the photography carries the visual identity.

## Visual image sources
The scene backgrounds are raster photographs linked from Unsplash (used under the Unsplash License):
- [Torii gate at a Japanese shrine at night — C Cai](https://unsplash.com/photos/torii-gate-at-a-japanese-shrine-at-night-bCGZtteFiNs)
- [Wisteria flowers hanging from a pergola — Leo Okuyama](https://unsplash.com/photos/purple-wisteria-flowers-hanging-from-a-pergola-pUqv_nljqMw)
- [Blacksmith forge with glowing embers and tools — Fabian Kleiser](https://unsplash.com/photos/blacksmith-forge-with-glowing-embers-and-tools-2mbXuLbudI8)

## Project thumbnail sourcing
- Mood Tracker and IIITS CGPA Calculator use screenshots generated from their verified live demo URLs via the Thum.io screenshot API. The API response is cached for up to 24 hours.
- The other five projects do not currently have verified public deployment URLs in their project data or READMEs. Their cards therefore keep distinct raster scene imagery rather than pretending a repository or unverified URL is a live app screenshot.
- To use actual screenshots for the remaining projects, add and verify each public deployment URL first.

## Built with
- Next.js 16, React 19, TypeScript
- Tailwind CSS, Framer Motion, Lucide
- Responsive motion effects with reduced-motion support
- Real raster photography with CSS-based breathing effects
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
