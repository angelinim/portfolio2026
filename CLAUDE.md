# Portfolio 2026

A personal portfolio site, deliberately over-engineered as a learning project: React + Vite client, NestJS API, Docker, GitHub Actions CI, and (later) AWS via CDK. The UI imitates a terminal app in the style of the Rust crate Ratatui.

## Working style

- The owner writes the code. Claude reviews it and points the way with hints rather than finished code, unless asked to explain fully or to make the change.
- Every change goes on a feature branch → pull request → green CI → **squash merge**. The repo is private on a free plan, so branch protection is configured but not enforced; only merge green PRs.
- Run `npm run verify` before opening a PR.

## Repo layout (npm workspaces, one root `package-lock.json`)

- `client/`: React + Vite + TypeScript. Feature folders in `src/features/<feature>/` (api.ts / hooks / components / pages); reusable TUI components in `src/components/tui/` (`Panel`, `Tabs`, `StatusBar`); `src/components/Layout.tsx` is the shell (tabs panel, `<Outlet />`, status bar panel); routes in `src/router.tsx`.
- `server/`: NestJS. Feature modules (`src/projects/`); global config in `src/app.setup.ts` (`API_PREFIX`); `ConfigModule` loads `server/.env` (see `.env.example`).
- `shared/`: `@portfolio/shared`, **types only** (`ProjectDto`, `ProjectSummaryDto`); a devDependency of client and server, erased at compile time. Import with `import type`.

## Commands (from the repo root)

| Command                        | What it does                                                  |
| ------------------------------ | ------------------------------------------------------------- |
| `npm run dev`                  | Vite (5173, proxies `/api`) + Nest watch mode (3000)          |
| `npm run build`                | client then server                                            |
| `npm run start:prod -w server` | one Nest process serving the API and the built client on 3000 |
| `npm run check`                | Prettier check, ESLint, type-check (all workspaces)           |
| `npm run test`                 | server unit + e2e tests                                       |
| `npm run verify`               | `check` then `test`                                           |
| `npm run format`               | apply Prettier                                                |
| `docker compose up --build`    | production image on `localhost:3000`                          |

## Key decisions

- The API lives under `/api` (from `API_PREFIX`); everything else is the React app. `ServeStaticModule` excludes `/api/{*path}` and falls back to `index.html` for client routes.
- Client data flow: `api.ts` (axios, converts errors to plain `Error`) → hook (loading/error state) → component. `axios.get<T>` does not check the response at runtime, so both sides must use the shared types.
- Projects are identified by `slug`; data is hard-coded in `ProjectsService` and will move to DynamoDB in step 8 without changing the controller, shared types, or client.
- Styling: plain CSS with global variables in `client/src/index.css` (custom palette loosely based on Ariake Dark, `a-keyword`/`a-string`/`a-number`/`a-comment`/`a-warn` token classes), Iosevka via `@fontsource/iosevka` (latin subset), each component imports its own CSS file.
- Docker: multi-stage on `node:24-slim`, server production deps only, runs as `node`, `CMD` in exec form; compose uses `init: true`.

## Gotchas already hit

- npm hoisting: a package can only see packages at its own level or above (`@nestjs/core` vs `@nestjs/platform-express`, Jest paths, `@types/jest`). Check with `npm ls` / `npm explain`.
- `@types/node` is pinned to Node 24 via root `overrides`.
- The lockfile must include Linux native bindings (rolldown, lightningcss; npm/cli#4828). If `npm ci` fails in Docker/CI with "Cannot find native binding", regenerate the lockfile.
- The root `package.json` has `"type": "module"` (for `eslint.config.js`), so `server/package.json` must sit next to `server/dist` (CommonJS) in the image.
- Glob anchoring differs per tool: `.dockerignore` needs `**/` for nested paths; tsconfig `include` needs `**/*` for subfolders.
- macOS is case-insensitive but Linux (Docker/CI) is not: import paths must match file name casing exactly.

## Roadmap

### Done

1. Repo restructure: workspaces, root scripts, `.gitignore`.
2. App basics and tooling: `/api` prefix, projects endpoint, shared types, Vite proxy, repo-wide Prettier + type-aware ESLint, `check`/`test`/`verify`, Nest serves the built client, `@nestjs/config`.
3. Docker: multi-stage Dockerfile, `.dockerignore`, compose, shutdown hooks. (Health check deferred to step 6.)
4. CI: GitHub Actions on PRs and pushes to `main` (npm ci, tests, `check`, Docker build).
5. Frontend build-out, in progress:
   - 5a: palette, font, template cleanup
   - 5b: `Panel` (`title`, `grow`, `compact`), `Tabs`, `StatusBar`
   - 5c: React Router with `Layout`/`<Outlet />`, `NavLink` tabs, 404 route, Summary/Projects/Experience/Contact pages
   - 5d: `summary` on `ProjectDto`, `ProjectSummaryDto` (via `Pick`), `GET /api/projects` → summaries, `GET /api/projects/:slug` → details or 404 (PR #5)

### 5e. Projects page: table with a details section (current, branch `projects-page-styling`)

Modelled on Ratatui's Table demo: the projects table on top, details of the selected project below. Implemented as two stacked panels (`.projects-split`, a flex column) rather than one panel with a divider.

- [x] Vertical split: "Projects" panel (table) above a details panel
- [x] Nested route: `projects` with a `:slug` child; `<Outlet />` in `ProjectsPage`
- [x] `ProjectDetails` component (example text for now)
- [x] Rows navigate to `/projects/:slug` (`useNavigate` on row click)
- [x] Basic table styling: full width, header background, row hover
- [x] `projects-table` class on the table; header, hover (`tbody tr:hover`, so not the header row) and `.selected` rules scoped to it
- [x] Selected row highlighted: `params.slug ?? ''` compared per row, `selected` class
- [x] Formatting passes (`npm run check` green)
- [x] All table rules scoped (`.projects-table th, .projects-table td`)
- [x] Projects panel uses `compact`; spacing lives on `.projects-table`
- [x] Removed the `.projects-split .tui-block-content` override
- [x] Name cell is a real `<Link>` (styled with `.projects-table td a`), with `event.stopPropagation()` so a click doesn't also trigger the row's navigation
- [x] Hover (`--fg-muted`) and selected (`--selection`) use different colours
- [x] Formatting fixed and committed (`npm run check` green)
- [ ] Marker on the selected row
- [ ] `Gauge` component in `components/tui/` for the Progress column (e.g. `████░░░░░░ 40%`); confirm the block characters render in the Iosevka latin subset first
- [ ] "Select a project" hint at `/projects`: an index route under `projects`
- [ ] `useProject(slug)` hook: refetch when the slug changes, ignore stale responses (effect cleanup), reset while loading, tell a 404 apart from other errors
- [ ] `ProjectDetails` content: name, description, tech stack as tags, progress, GitHub link, images; loading, error and not-found states
- [ ] Table and details scroll independently
- [ ] Check: clicking a row updates the URL and details; refresh on `/projects/<slug>` keeps the selection (also from `start:prod`); back/forward work; `/projects/nope` shows not-found in the details panel

### Later

- 5f: Summary, Experience (typed `experience.ts` data, selected company in the right panel) and Contact (real links) content
- 5g: font glyph check, narrow-screen layout, accessibility and page titles, leftover CSS cleanup, revisit the projects table hover colour
- Final polish only (optional, may never be added): TUI keyboard shortcuts and status-bar keybinding hints
- 6: AWS CDK (`infra/` workspace): ECR, VPC without NAT Gateway costs, ECS Fargate (init process enabled), ALB with a `GET /api/health` check, config validation, secrets via SSM/Secrets Manager
- 7: Continuous deployment: GitHub OIDC to AWS, build → ECR → `cdk deploy` on merge to `main`, `cdk diff` on PRs
- 8: Data layer: DynamoDB (projects, optionally experience), S3 images, LocalStack in compose, seed script
- 9: Extras: CloudFront, SES contact form, admin UI with auth, staging, custom domain, monitoring, Dependabot, making the repo public
