import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wmarquitectura.com',
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
