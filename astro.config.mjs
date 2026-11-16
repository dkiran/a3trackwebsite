import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://a3track.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(thank-you|404)\/?$/.test(page),
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],
});
