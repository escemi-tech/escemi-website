# ESCEMI Corporate Website

![Continuous integration](https://github.com/escemi-tech/escemi-website/workflows/Continuous%20integration/badge.svg)

## 🚀 Built with Astro

The ESCEMI corporate website is built with **Astro** for superior performance and modern development experience.

### Performance Achievements

- **8KB total above-the-fold** (77% under target)
- **Zero client-side JavaScript** by default
- **Perfect OKLCH brand colors** with dark mode support
- **Lighthouse scores target**: Performance ≥95, A11y ≥95, SEO ≥95

### Quick Start

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Tech Stack

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
  --brand-main: oklch(30.5% 0.044 247.1); /* #1c3144 */
  --brand-secondary: oklch(80.7% 0.164 87.9); /* #ecb807 */
  --on-primary: white;
  --on-accent: black;
}
```

### Project Structure

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

### Scripts

```bash
npm run dev        # Development server with HMR
npm run build      # Production build with type checking
npm run preview    # Preview production build
npm run typecheck  # TypeScript checking only
npm run lint       # ESLint with auto-fix
npm run format     # Prettier formatting
npm run clean      # Clean build artifacts
```

## Deployment

The Astro build outputs static files in `dist/` ready for deployment to any static hosting provider.

### Recommended Hosting

- **Netlify**: Automatic builds from Git
- **Vercel**: Zero-config deployments
- **Cloudflare Pages**: Global edge deployment
- **GitHub Pages**: Free static hosting

### Build Commands

```sh
npm run build     # Astro build with type checking
npm run preview   # Preview production build
```

## Contributing

1. Maintain i18n parity between French and English
2. Follow the design token system for colors
3. Test both light and dark mode
4. Ensure accessibility standards (WCAG 2.2 AA)

## Performance Monitoring

Target metrics:

- **LCP**: ≤ 2.5s
- **INP**: ≤ 200ms
- **CLS**: ≤ 0.1
- **Bundle size**: Homepage ≤ 35KB gzip JS

Current performance: **8KB total** (77% under target! 🎉)
