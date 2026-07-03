import { defineConfig } from 'astro/config';

// Static output — deploys to Cloudflare Pages / GitHub Pages / any static host.
// Set `site` to the production URL so canonical links + sitemaps resolve.
export default defineConfig({
  site: 'https://cyberforks.com',
  output: 'static',
  build: {
    format: 'file', // emit /offsec.html instead of /offsec/index.html
  },
});
