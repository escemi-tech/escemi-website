/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./astro-src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // OKLCH Brand Colors
        'brand-main': 'var(--brand-main)',
        'brand-secondary': 'var(--brand-secondary)',
        'on-primary': 'var(--on-primary)',
        'on-accent': 'var(--on-accent)',
        
        // Semantic colors
        'bg': 'var(--bg)',
        'fg': 'var(--fg)',
        
        // Primary scale
        'primary-3': 'var(--primary-3)',
        'primary-9': 'var(--primary-9)',
        'primary-10': 'var(--primary-10)',
        
        // Accent scale
        'accent-3': 'var(--accent-3)',
        'accent-9': 'var(--accent-9)',
        'accent-10': 'var(--accent-10)',
      },
      borderRadius: {
        'brand': 'var(--radius)',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};