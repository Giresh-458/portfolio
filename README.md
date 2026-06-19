# AI Cinema Portfolio

Production Next.js 14 portfolio with a cinematic Netflix-inspired interface, typed content architecture, accessible motion, GitHub analytics, and downloadable PDF routes. Framework settings live in `next.config.mjs`, the configuration format supported by Next.js 14.

## Local development

```bash
npm install
copy .env.example .env.local
npm run dev
```

Update identity, links, content, and metrics in `lib/data.ts`. Replace `public/profile.svg` with an optimized portrait while retaining the same path, or update the image source in `components/sections/about-section.tsx`.

## Environment variables

```env
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=github_pat_with_read_only_public_repo_access
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

`GITHUB_TOKEN` is server-only and must never use the `NEXT_PUBLIC_` prefix. The site renders deterministic fallback analytics when GitHub variables are absent or rate-limited.

## Vercel deployment

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, select **Add New → Project** and import the repository.
3. Keep **Framework Preset** set to `Next.js`.
4. Keep **Root Directory** as the repository root.
5. Use `npm install` as the install command and `npm run build` as the build command.
6. Add `GITHUB_USERNAME`, `GITHUB_TOKEN`, and `NEXT_PUBLIC_SITE_URL` under **Project Settings → Environment Variables** for Production, Preview, and Development as appropriate.
7. Deploy once, then update `NEXT_PUBLIC_SITE_URL` to the final Vercel or custom domain and redeploy.
8. Under **Settings → Functions**, use the default Node.js region nearest the primary recruiter audience. GitHub responses are cached at the route level.
9. Under **Settings → Deployment Protection**, keep production public and protect preview deployments if they contain unreleased resume data.
10. Add a custom domain, enable automatic HTTPS, and verify `/robots.txt`, `/sitemap.xml`, `/api/github`, and `/api/download/resume`.

## Recommended Vercel settings

- Node.js: current Vercel-supported LTS
- Build machine: Standard
- Function region: nearest primary audience
- Speed Insights: enabled
- Web Analytics: enabled
- Deployment skew protection: enabled
- Git LFS: unnecessary for the included SVG assets

## Quality gates

```bash
npm run typecheck
npm run lint
npm run build
```
