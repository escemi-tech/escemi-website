# ESCEMI Website

Marketing site powered by Astro 5 with built-in internationalization for French (default) and English content.

## 🚀 Project Structure

Key paths:

```text
src/
├── components/
│   └── pages/HomePage.astro   # Wraps Layout + Welcome
├── layouts/Layout.astro       # Global chrome with language switcher
├── pages/
│   ├── index.astro            # Default (fr) route
│   └── en/index.astro         # English route
└── assets/                    # Static media
```

Localization settings live in `i18n.config.ts` at the project root and are shared by the Astro config plus components.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Localization quickstart

The site relies on Astro's [i18n routing](https://docs.astro.build/en/guides/internationalization/):

- Declare locales, default locale, and UI copy inside `i18n.config.ts`.
- Each locale needs a matching folder under `src/pages/` (`src/pages/en/`, `src/pages/fr/`, etc.).
- Use the helpers exported from `i18n.config.ts` (`resolveLocale`, `getCopyForLocale`) to fetch content safely inside pages and components.
- The shared `Layout` component consumes this data, sets `<html lang>` automatically, and renders the language switcher using `getRelativeLocaleUrl()`.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
