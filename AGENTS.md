# Repository Guidelines

## Project Structure & Module Organization

This is an Astro 7 site. Application code lives in `src/`: route pages are in `src/pages/`, reusable Astro components in `src/components/`, shared layouts in `src/layouts/`, site configuration and utilities in `src/config/`, `src/consts.ts`, and `src/utils/`, and global styles in `src/styles/`. Markdown and MDX blog posts belong in `src/content/blog/`; the about collection is in `src/content/about/`. Static files are served from `public/`. Astro's generated files are under `.astro/`; do not edit generated output. GitHub Pages deployment is configured in `.github/workflows/deploy-pages.yml`.

## Build, Test, and Development Commands

Use Node.js 22.12 or newer and pnpm 12 (`corepack pnpm` if needed). Key commands:

- `pnpm install` installs the locked dependencies.
- `pnpm dev` starts the local Astro development server.
- `pnpm check` runs Astro and TypeScript diagnostics.
- `pnpm build` creates the production site in `dist/`.
- `pnpm preview` serves the built site locally for a final check.

There is no separate test or lint script. Run `pnpm check` and `pnpm build` before submitting changes.

## Coding Style & Naming Conventions

Follow the existing style in the file you edit: Astro/JavaScript configuration commonly uses tabs, while content and components may use two spaces. Use TypeScript-compatible patterns, explicit types where useful, and the strict Astro configuration. Name components in PascalCase (for example, `CommentSection.astro`), utilities in camelCase, and route files according to Astro's file-based routing. Keep content frontmatter aligned with the schema in `src/content.config.ts`.

## Testing Guidelines

Validate UI and content changes with `pnpm check` and `pnpm build`. For visual changes, also inspect the affected page with `pnpm dev` or `pnpm preview`, including relevant light/dark themes and narrow layouts. No automated unit-test framework or coverage threshold is configured.

## Commit & Pull Request Guidelines

Recent history follows Conventional Commit prefixes such as `feat:`, `fix:`, and `chore:`, followed by a concise description (often Chinese). Keep each commit focused. Pull requests should explain the user-visible change, list validation commands run, link related issues when applicable, and include screenshots for visual updates. Mention any required site configuration changes, including `SITE_URL` or `BASE_PATH`.

## Configuration Notes

Set `SITE_URL` and `BASE_PATH` through the environment when building for a non-default deployment path; defaults are defined in `astro.config.mjs` and `src/consts.ts`. Never commit secrets or generated `dist/` output.
