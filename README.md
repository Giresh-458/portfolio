# Giresh Velaga — AI Engineering & Full-Stack Portfolio

A streamlined developer portfolio with a restrained Demon Slayer Corps visual direction: AI-generated, character-free Demon Slayer-inspired scenery—moonlit torii gates, wisteria, lantern-lit temples, misty forests, and reflective paths—paired with a dark indigo and crimson palette. Content prioritizes project details, technical skills, verified live demos, and direct contact rather than repeated decorative sections.

## Background art
- The visual theme uses an AI-generated, character-free anime panorama: moonlit mountains, a red torii gate, wisteria, lantern-lit traditional rooftops, a waterfall, and reflective water.
- Each major section positions the panorama differently to keep a coherent Demon Slayer atmosphere without character portraits, silhouettes, or SVG artwork.
- The two verified live demos use screenshots of the actual applications; the other five project cards use the same generated, character-free anime environments with different scene positioning, never character art or generic stock photos.

## Project thumbnail sourcing
- Mood Tracker and IIITS CGPA Calculator use screenshots generated from their verified live demo URLs via the Thum.io screenshot API. The API response is cached for up to 24 hours.
- The other five projects do not currently have verified public deployment URLs in their project data or READMEs. Their cards therefore use the generated Demon Slayer-style environment backgrounds rather than pretending a repository or unverified URL is a live app screenshot.
- To use actual screenshots for the remaining projects, add and verify each public deployment URL first.

## Built with
- Next.js 16, React 19, TypeScript
- Tailwind CSS, Framer Motion, Lucide
- Responsive motion effects with reduced-motion support
- AI-generated raster anime environments with CSS-based atmosphere and reduced-motion support

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
