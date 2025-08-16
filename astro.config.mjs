import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.escemi.com',
  srcDir: './astro-src',
  publicDir: './public',
  outDir: './dist',
  integrations: [
    tailwind({
      applyBaseStyles: false, // We'll handle our own base styles
    }),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr',
          en: 'en',
        },
      },
    }),
  ],
  output: 'static',
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});