# Giresh Velaga — AI Engineering & Full-Stack Portfolio

A personal portfolio connecting AI engineering and full-stack product work with a character-led Demon Slayer-inspired visual direction. The homepage uses a motion-poster layout: selectable character portraits, character-specific Water / Blood Demon / Thunder / Beast effects, and a dramatic night palette. The project archive and contact path remain recruiter-friendly.

## Built with

- Next.js 15.5.27, React 18, TypeScript
- Tailwind CSS, Framer Motion, Lucide
- Animated SVG overlays and reduced-motion support
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

- `GITHUB_TOKEN` is optional and stays server-side. A token can help with API rate limits.
- `NEXT_PUBLIC_SITE_URL` must be set to the real production website origin before a production build. Use the full `https://...` origin; paths are ignored. Production builds intentionally fail when this is missing, to prevent publishing incorrect canonical, Open Graph, sitemap, and robots URLs.
- Vercel Preview builds can use their unique `VERCEL_URL` when `NEXT_PUBLIC_SITE_URL` is not set. Local development falls back to `http://localhost:3000`.
- Analytics use live public GitHub data. If the profile or repository endpoints are unavailable, the analytics panel shows an unavailable message. If only recent activity fails, profile and repository metrics remain visible.
- The selectable hero wallpapers currently load from third-party image hosts. Confirm the relevant usage rights before public release, or replace them with artwork you own or have licensed.

## Deployment

1. Import the repository into Vercel.
2. Keep the framework preset as Next.js and the root directory as the repository root.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain for the Production environment.
4. Optionally set a server-only `GITHUB_TOKEN` in Vercel environment variables.
5. Verify the homepage, project links, contact form, and `/api/github`.

A resume PDF has not been added yet. Add a verified resume before exposing a download link.

## Quality checks

```bash
npm test
npm run typecheck
npm run lint
npm run build
```
