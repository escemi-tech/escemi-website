import { defineConfig, fontProviders } from 'astro/config';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './i18n.config';

import tailwindcss from '@tailwindcss/vite';

const locales = [...SUPPORTED_LOCALES];

export default defineConfig({
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales,
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Source Sans 3',
      cssVariable: '--font-source-sans-3',
      weights: [300, 400, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});