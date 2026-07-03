import { defineConfig } from 'astro/config';

// Static site deployed to GitHub Pages (custom domain cyberforks.com, apex).
// `site` drives canonical links + sitemaps. Default `directory` build format
// emits /offsec/index.html, which every static host serves cleanly.
export default defineConfig({
  site: 'https://cyberforks.com',
});
