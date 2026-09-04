import { defineConfig } from 'astro/config';

// Static site deployed to GitHub Pages (custom domain cyberforks.com, apex).
// `site` drives canonical links + sitemaps. Default `directory` build format
// emits /offsec/index.html, which every static host serves cleanly.
export default defineConfig({
  site: 'https://cyberforks.com',

  // /contact-me was the original personal-portfolio slug. Renamed to /contact
  // when the site moved to an organizational voice. The old path is kept as a
  // redirect so existing inbound links, bookmarks and search results survive —
  // Astro emits a static redirect page for this in a `directory`-format build.
  redirects: {
    '/contact-me': '/contact',
  },
});
