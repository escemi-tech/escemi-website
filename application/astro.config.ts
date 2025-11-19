import { defineConfig } from 'astro/config';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './i18n.config';

import tailwindcss from '@tailwindcss/vite';

const locales = [...SUPPORTED_LOCALES];

export default defineConfig({
  i18n: {
      defaultLocale: DEFAULT_LOCALE,
      locales,
      routing: {
          prefixDefaultLocale: false,
      },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});