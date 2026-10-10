# Giresh Velaga — AI Engineering & Full-Stack Portfolio

A personal portfolio connecting AI engineering and full-stack product work with a character-led Demon Slayer-inspired visual direction. The homepage uses a motion-poster layout: selectable character portraits, character-specific Water / Blood Demon / Thunder / Beast effects, and a dramatic night palette. The project archive and contact path remain recruiter-friendly.

## Built with

- Next.js 14, React 18, TypeScript
- Tailwind CSS, Framer Motion, Lucide
- Animated SVG overlays and reduced-motion support
- GitHub REST API for live public repository, language, and recent activity data

## Character artwork and usage note

The preview currently loads character stills directly from the official Demon Slayer: Hashira Training website. I have not verified that the site grants reuse permission. Treat those stills as a visual prototype only; before using this portfolio as a public job-search or commercial site, obtain the relevant permission or replace the URLs with original or appropriately licensed artwork. An unofficial-fan disclaimer does not itself grant rights.

## Local development

~~~bash
npm install
copy .env.example .env.local
npm run dev
~~~

Open http://localhost:3000. The public GitHub analytics endpoint defaults to Giresh-458; set GITHUB_USERNAME only if you want to use a different account.

## Environment variables

~~~env
GITHUB_USERNAME=Giresh-458
GITHUB_TOKEN=
NEXT_PUBLIC_SITE_URL=https://your-deployed-domain.example
~~~

- GITHUB_TOKEN is optional and stays server-side. A token can help with API rate limits.
- NEXT_PUBLIC_SITE_URL should point to the real deployed origin so metadata and canonical URLs are correct.
- Analytics use live public GitHub data. If GitHub is unavailable or rate-limited, the page displays an unavailable message rather than fabricated activity statistics.

## Deployment

1. Import the repository into Vercel.
2. Keep the framework preset as Next.js and the root directory as the repository root.
3. Set NEXT_PUBLIC_SITE_URL to the production domain.
4. Optionally set a server-only GITHUB_TOKEN in Vercel environment variables.
5. Verify the homepage, project links, contact form, and /api/github.

A resume PDF has not been added yet. Add a verified resume before exposing a download link.

## Quality checks

~~~bash
npm run typecheck
npm run lint
npm run build
~~~
