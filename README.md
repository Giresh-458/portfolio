# Giresh Velaga — AI Engineering & Full-Stack Portfolio

A personal portfolio highlighting AI systems, applied machine learning, and full-stack products. The visual direction takes a restrained, cinematic cue from Demon Slayer: deep midnight tones, a blood-moon accent, water-like motion, a blade-inspired slash, and a quiet checkered motif. The anime influence supports the experience instead of competing with the engineering work.

## Built with

- Next.js 14, React 18, TypeScript
- Tailwind CSS, Framer Motion, Lucide
- Responsive project cards and accessible motion preferences
- GitHub REST API for live public repository, language, and recent activity data

## Local development

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. The public GitHub analytics endpoint defaults to `Giresh-458`; set `GITHUB_USERNAME` only if you want to use a different account.

## Environment variables

```env
GITHUB_USERNAME=Giresh-458
GITHUB_TOKEN=
NEXT_PUBLIC_SITE_URL=https://your-deployed-domain.example
```

- `GITHUB_TOKEN` is optional and stays server-side. A token can help with API rate limits.
- `NEXT_PUBLIC_SITE_URL` should point to the real deployed origin so metadata and canonical URLs are correct.
- Analytics use live public GitHub data. If GitHub is unavailable or rate-limited, the page displays an unavailable message rather than fabricated activity statistics.

## Deployment

1. Import the repository into Vercel.
2. Keep the framework preset as **Next.js** and the root directory as the repository root.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
4. Optionally set a server-only `GITHUB_TOKEN` in Vercel environment variables.
5. Deploy and verify the homepage, project links, contact form, and `/api/github`.

A resume PDF has not been added yet. Add a verified resume before exposing a download link.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```
