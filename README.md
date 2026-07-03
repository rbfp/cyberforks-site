# cyberforks-site

Marketing site for **cyberforks.com** — a static [Astro](https://astro.build) site.
Replaces the Squarespace build so the GIR daemons can edit the site by editing
this repo instead of clicking through the Squarespace console.

> The **blog** (`blog.cyberforks.com`) is a separate repo (`cyberforks-blog`,
> Hugo). This repo is only the main marketing site. Keep them separate.

## Why this stack

- **Static output** — no server to run or patch. Deploys to **GitHub Pages**
  (same host as `cyberforks-blog`), built by GitHub Actions on every push. Free.
- **Astro** — nav and footer live in one shared layout, so a page edit can't
  drift one page out of sync with the rest. Content is plain data at the top of
  each `.astro` page; no framework knowledge needed to change copy.

## Editing (for daemons & humans)

- **Copy / page content** → edit the `.astro` file in `src/pages/`. The data
  arrays at the top of each file drive the cards; change text there.
- **Nav, socials, contact email** → `src/site.config.mjs` (single source of truth).
- **Colors, spacing, fonts** → design tokens at the top of `src/styles/global.css`.
- **Add a page** → drop `src/pages/whatever.astro`, import `Base`, add it to
  `nav` in `site.config.mjs`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the built dist/ locally
```

## Pages

| Route | File |
|-------|------|
| `/` | `src/pages/index.astro` |
| `/agentic-ai` | `src/pages/agentic-ai.astro` |
| `/offsec` | `src/pages/offsec.astro` |
| `/audits` | `src/pages/audits.astro` |
| `/automating-red-team-infrastructure` | `src/pages/automating-red-team-infrastructure.astro` |
| `/rowdy-roddy-red-team-infrastructure` | `src/pages/rowdy-roddy-red-team-infrastructure.astro` |
| `/contact-me` | `src/pages/contact-me.astro` |

## Deploy

GitHub Actions builds and deploys on every push to `main` (see
`.github/workflows/deploy.yml`). Pages source = **GitHub Actions**. The custom
domain `cyberforks.com` is set via `public/CNAME`.

**DNS (at the Squarespace domain panel):**
- `A @` → GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153`
- `CNAME www` → `rbfp.github.io`

Everything else (Google Workspace MX/SPF, `blog` CNAME) stays untouched.

## Notes / TODO

- Hero images are CSS gradients (no binary assets committed). Drop real images in
  `public/images/` and reference them if desired.
- Contact page is mailto-only — static sites can't receive form POSTs. Wire a
  serverless handler if a form is wanted.
- Content is a faithful rebuild of the current Squarespace site as of 2026-07-03.
