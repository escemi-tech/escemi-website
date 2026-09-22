# ESCEMI Landing Page

Marketing site for ESCEMI, built with [Astro](https://astro.build/) 6 and Tailwind CSS. The production code lives under `application/` and is packaged for deployment as a static site.

## Requirements

- Node.js 22.12+
- npm 9+
- Docker (required for `make lint`, `make lint-fix`, and `make ci`)

## Getting Started

```bash
make setup     # Install npm dependencies in application/
make start     # Run Astro dev server on http://localhost:4321
```

To preview a production build locally:

```bash
make build
npm run preview --prefix application
```

## Development Workflow

- `make lint` – Run Astro checks and the Dockerized linters (accepts globs: `make lint src/pages`)
- `make lint-fix` – Apply automated fixes via npm audit + Dockerized linter
- `make build` – Produce a production build
- `make ci` – Run lint fixes, build, and tests with coverage sequentially (run `make setup` first)
- `npm run test --prefix application` – Execute the Vitest unit test suite
- `npm run preview --prefix application` – Serve the built site for QA

Most changes should happen inside `application/`. See `AGENTS.md` for detailed automation guardrails.

Biome uses `biome.json` for Tailwind syntax, Git ignore rules, and the
[recommended Astro overrides](https://biomejs.dev/internals/language-support/#linting-html-ish-languages).
Astro checks cover template usages that Biome's partial parser cannot see. Other
linter configuration lives in `.github/linters/`; generated output and installed
dependencies are excluded from source checks. Standalone SVG assets are excluded
from Biome's HTML parser and spell checks; French resume data is excluded from
English spell checks.

## Project Structure

- `application/astro.config.ts` – Astro configuration, integrations, and Partytown setup
- `application/src/config.yaml` – Site metadata, feature toggles, and analytics IDs
- `application/src/i18n/ui.ts` – Shared UI strings for `fr` (default) and `en` locales
- `application/src/assets/images` – Optimized assets consumed via the shared `Image` component
- `application/src/content/` and `application/src/data/` – Blog posts and data-driven content

## Configuration Notes

- Keep locale strings synchronized in `application/src/i18n/ui.ts`
- Update metadata and analytics via `application/src/config.yaml` instead of hardcoding values
- Follow the frontmatter schema in `application/src/content/config.ts` when adding content

## Contributing

Contributions, issues, and feature requests are welcome. Review the [contributing guide](CONTRIBUTING.md) and use the [issue tracker](https://github.com/escemi-tech/escemi-website/issues) to report bugs or request features.

## License

This project is released under the [0BSD License](LICENSE).
