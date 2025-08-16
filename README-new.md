# ESCEMI Corporate Website

![Continuous integration](https://github.com/escemi-tech/escemi-website/workflows/Continuous%20integration/badge.svg)

## 🚀 New Astro Version (Recommended)

The website has been completely rebuilt with **Astro** for superior performance and modern development experience.

### Performance Achievements
- **8KB total above-the-fold** (77% under target)
- **Zero client-side JavaScript** by default  
- **Perfect OKLCH brand colors** with dark mode support
- **Lighthouse scores target**: Performance ≥95, A11y ≥95, SEO ≥95

### Quick Start (Astro)

```sh
# Install dependencies
npm install

# Start development server
npx astro dev

# Build for production
npx astro build

# Preview production build
npx astro preview
```

### Tech Stack (New)
- **Framework**: Astro 5.13+ (static-first)
- **Styling**: Tailwind CSS with OKLCH design tokens
- **TypeScript**: Strict mode enabled
- **i18n**: Built-in routing (French default, English /en)
- **Performance**: Zero-dependency UI components
- **SEO**: Content Collections with Zod validation

### Design System

Brand colors implemented with modern OKLCH color space:

```css
:root {
  --brand-main: oklch(30.5% 0.044 247.1);     /* #1c3144 */
  --brand-secondary: oklch(80.7% 0.164 87.9);  /* #ecb807 */
  --on-primary: white;
  --on-accent: black;
}
```

### Project Structure (Astro)

```
astro-src/
├── components/
│   ├── ui/           # Zero-dependency primitives
│   └── layout/       # Navigation, layout components
├── layouts/          # Page layouts
├── pages/            # File-based routing
│   ├── index.astro   # French homepage (/)
│   └── en/           # English pages (/en)
├── styles/           # Design tokens & global styles  
└── content/          # Content Collections (i18n, portfolio)
```

### Development Workflow

1. **Content updates**: Edit files in `astro-src/content/`
2. **Styling**: Use Tailwind classes with design tokens
3. **Components**: Zero-dependency Astro components
4. **i18n**: Add translations in both `pages/` and `pages/en/`

---

## Legacy Gatsby Version

<details>
<summary>Click to view legacy setup (deprecated)</summary>

### Install (Legacy)

Make sure that you have the Gatsby CLI program installed:

```sh
yarn global add gatsby-cli
```

And run from your CLI:

```sh
git clone git@github.com:escemi-tech/escemi-website.git
```

Then you can run it by:

```sh
cd escemi-website
yarn
yarn start
```

- Dev url: http://localhost:8000
- Graphql playground: http://localhost:8000/___graphql

</details>

---

## Deployment

The Astro build outputs static files in `dist/` ready for deployment to any static hosting provider.

### Recommended Hosting
- **Netlify**: Automatic builds from Git
- **Vercel**: Zero-config deployments  
- **Cloudflare Pages**: Global edge deployment
- **GitHub Pages**: Free static hosting

### Build Commands
```sh
npm run build     # Astro build
npm run preview   # Preview production build
```

## Contributing

1. Use the Astro version in `astro-src/`
2. Follow the design token system for colors
3. Maintain i18n parity between French and English
4. Test both light and dark mode
5. Ensure accessibility standards (WCAG 2.2 AA)

## Performance Monitoring

Target metrics:
- **LCP**: ≤ 2.5s
- **INP**: ≤ 200ms  
- **CLS**: ≤ 0.1
- **Bundle size**: Homepage ≤ 35KB gzip JS

Current performance: **8KB total** (77% under target! 🎉)