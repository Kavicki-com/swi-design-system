---
name: swi-design-system
description: Plano e convenções para implementar o SWI Design System — biblioteca React Native universal (web via React Native Web + mobile) com styled-components e Storybook, distribuída via GitHub sem build. O Storybook web é hospedado em URL do cliente e é o canal oficial de validação de componentes. Use sempre que o trabalho envolver o repo Kavicki-com/swi-design-system, criar/editar componentes do design system SWI, configurar tokens, configurar Storybook web ou on-device, configurar deploy/CI do Storybook, ou preparar a lib para ser consumida pelos apps swi-admin (web) e swi-app (mobile). Trigger também para qualquer pedido envolvendo "design system", "library SWI", "componentes Figma SWI" ou referências aos arquivos Figma SWI-library e SWI-UI.
---

# SWI Design System — Operating Manual

This skill encodes everything needed to build the SWI design system inside the repo `Kavicki-com/swi-design-system`. Read it fully before doing any work in the repo. The decisions captured here are not optional defaults — they are the result of a planning conversation with the project lead and changing them needs a new conversation, not an inline judgment call.

## TL;DR

- **One library, two consumers**: `swi-admin` (web, **React Native Web**) and `swi-app` (mobile, React Native). Components are **universal by default**.
- **Stack**: React Native primitives + `styled-components/native` + TypeScript strict + Storybook 9 (web) + Storybook RN v10 (on-device).
- **Distribution**: `git+https://github.com/Kavicki-com/swi-design-system.git#vX.Y.Z` — **no build, source-only**. `package.json` points `main` to `src/index.ts`. Consumers transpile.
- **Tokens**: 3-tier (primitive → semantic → typography/effects) extracted from `references/figma-variables.json`. Components consume only semantic tokens.
- **Theme**: dark-mode is `mode1` in Figma. Light mode is not yet defined — design as if dark is the only mode for now, but keep `ThemeProvider` generic so a second theme can plug in later without API change.

---

## Repository structure (target)

When working in an empty or partial repo, this is the layout to converge to:
swi-design-system/
├── src/
│   ├── tokens/
│   │   ├── primitive.ts        # raw palette + scale (from .primitive collection)
│   │   ├── semantic.ts         # surface/content/border/padding/gap/margin (from tokens collection)
│   │   ├── typography.ts       # composite text styles (from Typography collection)
│   │   ├── effects.ts          # elevation shadows (from Effects collection)
│   │   └── index.ts            # exports theme object + Theme type
│   ├── theme/
│   │   ├── ThemeProvider.tsx   # SwiThemeProvider wrapping styled-components ThemeProvider
│   │   ├── styled.d.ts         # module augmentation so theme is typed everywhere
│   │   └── index.ts
│   ├── components/
│   │   └── <ComponentName>/
│   │       ├── <ComponentName>.tsx
│   │       ├── <ComponentName>.types.ts
│   │       ├── <ComponentName>.styles.ts
│   │       ├── <ComponentName>.stories.tsx
│   │       ├── <ComponentName>.test.tsx
│   │       └── index.ts
│   ├── hooks/
│   ├── icons/
│   ├── utils/
│   └── index.ts                # public barrel
├── .storybook/                 # Storybook web (Vite + RN Web)
├── example-app/                # Expo app hosting on-device Storybook
│   └── .rnstorybook/
├── scripts/
│   └── generate-tokens.ts      # parses references/figma-variables.json into src/tokens/*
├── references/
│   └── figma-variables.json    # source of truth for tokens (committed)
├── .github/workflows/
├── package.json
├── tsconfig.json
└── README.md

If the repo doesn't have this structure yet, create it. Don't move existing files unilaterally — flag them and ask.

---

## Hard rules

These are non-negotiable. Violations cause downstream pain in the consumer apps.

1. **No build step. No `dist/`.** `package.json` has `"main": "src/index.ts"` and `"types": "src/index.ts"`. The lib ships TypeScript source. Consumers configure their bundlers to transpile it. Do not add `tsup`, `rollup`, `prepare` scripts, or any output bundling.

2. **No `react-native` extension splits unless strictly necessary.** Default to a single universal `Component.tsx` that uses RN primitives (`View`, `Text`, `Pressable`, `TextInput`, `ScrollView`, `Image`). Only create `.web.tsx` / `.native.tsx` pairs when the API genuinely diverges (date/time picker, gesture handler, native modal). When you do split, document why in a comment at the top of each file.

3. **Components import only semantic tokens.** Never `import { lime500 } from '../tokens/primitive'` inside a component. Always `theme.surface.success` or `theme.content.primary`. Primitives exist only to back semantics in `semantic.ts`.

3a. **Icons: source from Material Symbols or from app-provided SVGs, never hand-draw.** Two sources, in this order of preference:

   - **Material Symbols (Google):** When a Figma frame references a Material Symbols icon (look for `data-name="add_a_photo"`, `data-name="cloud_upload"`, etc., or icon names in component descriptions), pull the actual SVG from the Material Symbols outlined set. Source URL pattern: `https://raw.githubusercontent.com/google/material-design-icons/master/symbols/web/<icon_name>/materialsymbolsoutlined/<icon_name>_24px.svg`. ViewBox is `0 -960 960 960`.
   - **App-specific (project-provided):** SWI ships custom icons that don't exist in Material Symbols. The user drops the raw `.svg` file into `src/icons/raw/<icon_name>.svg`. Extract its `<path d="...">` and `viewBox` attribute and register it the same way as a Material Symbol.

   In both cases, register the icon in `src/icons/paths.ts` keyed by name, with `{ d, viewBox }`. Components consume them via the `Icon` primitive (`<Icon name="..." size={...} color={...} />`), which renders with `react-native-svg`. **Never** reconstruct icons with `<View>` geometry, rotated rectangles, or CSS triangles — they come out crooked, don't match the design system's visual language, and accumulate maintenance debt. The Figma asset URLs returned by `get_design_context` are auth-walled and short-lived — don't try to fetch them; pull from the canonical source instead.

4. **All `peerDependencies`, never `dependencies` for shared runtime libs.** React, react-native, react-native-web, styled-components are peers. The lib's `dependencies` should be empty or contain only true internal helpers.

5. **`sideEffects: false`** in `package.json` so consumers tree-shake correctly.

6. **Stories use `@storybook/react` types**, not `@storybook/react-native`. The same story file feeds both Storybooks. CSF3 only.

7. **Token files are partially generated.** `scripts/generate-tokens.ts` reads `references/figma-variables.json` and emits `src/tokens/primitive.ts`, `semantic.ts`, `typography.ts`, `effects.ts`. Do not hand-edit the generated files — edit the script or the JSON. The `index.ts` aggregator can be hand-written.

8. **The web Storybook is a deliverable, not an artifact.** It will be hosted on a client-controlled URL and is the official channel where designers, PMs and QA validate components. This means: a PR that breaks `npm run storybook:build` does not merge. Stories that render blank, throw warnings in console, or look visibly broken are bugs even if the component itself works. Treat Storybook output with the same rigor as the lib's public API. Always run `storybook:build` locally before considering a component done.

---

## Tokens — three tiers

The Figma export at `references/figma-variables.json` has 5 collections that map cleanly:

| Figma collection | Maps to | Notes |
|---|---|---|
| `.primitive` | `src/tokens/primitive.ts` | 92 vars: raw palette + size scale. Internal use. |
| `tokens` | `src/tokens/semantic.ts` | 75 vars: surface/content/border/radius/padding/gap/margin. Aliased to primitive. **This is what components consume.** |
| `typo` | `src/tokens/typography.ts` (raw values) | 14 vars: font families, weights, sizes. |
| `Typography` | `src/tokens/typography.ts` (composite styles) | 12 vars: `title/l`, `title/m`, ..., `body/m`, `caption/xs`. **Use these for `<Text variant="...">`.** |
| `Effects` | `src/tokens/effects.ts` | 4 vars: `elevation-sm`, `elevation-md`, `elevation-lg`, `elevation-negative` (inner shadow). |

### Naming convention in TypeScript

Figma uses `surface/primary` paths. In TS, group by the part before the slash:

```ts
// semantic.ts (excerpt)
export const semantic = {
  surface: {
    primary: '#62bb81',
    standard: '#1f1f1f',
    primaryLight: '#e6f4eb',
    // ...
  },
  content: {
    dark: '#f5f5f5',
    light: '#222222',
    primary: '#62bb81',
    // ...
  },
  border: { sizeS: 1, sizeM: 2, sizeL: 4 },
  radius: { xs: 2, s: 4, m: 8, l: 16, pill: 999 },
  padding: { empty: 0, xs: 4, s: 8, sm: 12, m: 16, ml: 20, l: 24, xl: 32, xxl: 40 },
  gap: { empty: 0, xs: 4, s: 8, sm: 12, m: 16, l: 24, xl: 28, xxl: 32 },
  margin: { empty: 0, xs: 4, s: 8, sm: 12, m: 16, ml: 20, l: 24, xl: 32 },
  background: '#171717',
} as const;
```

Note: Figma uses `2xl` in some names. In TS keys use `xxl` (cleaner, valid identifier without quotes).

### Composite typography handling

Each entry in the `Typography` collection becomes a variant key. Map Figma weight strings to numeric weights for RN:

| Figma weight | RN value |
|---|---|
| Light | `'300'` |
| Regular | `'400'` |
| Medium | `'500'` |
| Bold | `'700'` |

`lineHeight: "auto"` from Figma → omit `lineHeight` in the RN style (RN computes a default per platform). If a designer later sets a numeric line-height, the script must handle it.

### Elevation handling

Drop shadows in RN need platform-specific code. Generate from `Effects`:

```ts
// effects.ts (excerpt — generated)
import { Platform } from 'react-native';

export const elevation = {
  sm: Platform.select({
    ios: { shadowColor: '#1d1d1d', shadowOpacity: 0.08, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } },
    android: { elevation: 2 },
    web: { boxShadow: '0 4px 8px rgba(29,29,29,0.08)' },
  }),
  // md, lg, negative...
} as const;
```

`elevation-negative` is an `INNER_SHADOW` — RN doesn't support inner shadows natively. On web it works via `boxShadow: inset ...`. On mobile, the realistic implementation is to fake it with a gradient or a bordered overlay, or to ignore it on mobile and document the limitation. **Default: skip on mobile, apply only on web.**

---

## Theme provider

`SwiThemeProvider` wraps `styled-components/native`'s `ThemeProvider`. It also exposes a `useTheme()` hook re-export for ergonomics.

```tsx
// src/theme/ThemeProvider.tsx
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../tokens';

export const SwiThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
```

`src/theme/styled.d.ts`:

```ts
import 'styled-components';
import type { Theme } from '../tokens';
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```

This single declaration types `theme` inside every styled-component template literal across the repo **and** in the consumer apps.

---

## `package.json` template

When initializing or fixing the lib's `package.json`, use this shape:

```json
{
  "name": "@kavicki/swi-design-system",
  "version": "0.1.0",
  "description": "SWI Design System — universal React Native components for swi-admin and swi-app",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "sideEffects": false,
  "files": ["src", "README.md"],
  "scripts": {
    "tokens:generate": "tsx scripts/generate-tokens.ts",
    "storybook": "storybook dev -p 6006",
    "storybook:build": "storybook build",
    "storybook:rn": "cd example-app && yarn start",
    "test": "vitest",
    "lint": "eslint src --ext .ts,.tsx",
    "typecheck": "tsc --noEmit"
  },
  "peerDependencies": {
    "react": ">=18",
    "react-native": ">=0.74",
    "react-native-web": ">=0.19",
    "styled-components": ">=6"
  },
  "devDependencies": {
    "// keep these comprehensive": "for storybook + tests + lint",
    "typescript": "^5.4.0"
  }
}
```

Do not add `module`, `exports`, `react-native` field. Source-only on purpose.

---

## Adding a new component — workflow

When asked to add component `Foo`, follow these steps in order:

1. **Confirm the spec.** If the user references the Figma file, check whether `.figmacontext` or screenshots are provided. If specs are missing, list the questions you need answered (variants, sizes, states, props) before writing code. Don't invent specs.

2. **Create the folder** `src/components/Foo/` with the 6 files listed in the structure above. Use `scripts/new-component.ts` if it exists; otherwise create manually.

3. **`Foo.types.ts` first.** Define the `FooProps` interface. Variants and sizes are string unions. Always extend `Pick<PressableProps, '...'>` or relevant RN prop subset for handlers and accessibility — don't redefine `onPress`, `accessibilityLabel`, etc.

4. **`Foo.styles.ts`.** Use `styled.View`, `styled.Text`, `styled(Pressable)` from `styled-components/native`. Read everything from `theme`. Switch on variants via `${({ $variant, theme }) => ...}`. Prefix transient props with `$` (styled-components v6 convention) to keep them out of the DOM.

5. **`Foo.tsx`.** Composition only — no styling logic here. Map props to styled components, handle `disabled`, `loading`, `accessibilityRole`. Forward refs when relevant.

6. **`Foo.stories.tsx`.** CSF3, `Meta`/`StoryObj` from `@storybook/react`. Cover at minimum: default, all variants, all sizes, disabled, loading (if applicable). Add `argTypes` with controls for every variant prop. **Don't import from `@storybook/react-native` here** — that breaks the web Storybook.

7. **`Foo.test.tsx`.** Use `@testing-library/react-native`. Three minimum tests: renders with default props, fires the primary handler, respects a critical prop (e.g., `disabled` blocks `onPress`).

8. **`index.ts`** in the component folder re-exports `Foo` and `FooProps`.

9. **Add to public barrel** `src/index.ts`. Use named exports. Never `export *`.

10. **Verify both Storybooks.** Run `npm run storybook` and confirm the story renders correctly with all variants visible. Toggle viewport to a mobile frame and confirm the layout still works. Then run `npm run storybook:build` to confirm the static build succeeds — the hosted version uses this output, not the dev server. If you have access to the example-app, run `npm run storybook:rn` and verify on simulator. If you can't run on-device, say so explicitly in your message — don't claim it works.

### Checklist a component must pass before merge

- [ ] All variants from Figma covered
- [ ] States: default, pressed, focused, disabled, loading (where applicable)
- [ ] Zero hardcoded colors, sizes, or spacings — everything via `theme`
- [ ] Story has controls for every variant prop
- [ ] Story renders correctly at desktop viewport AND at iPhone 14 viewport
- [ ] At least 3 tests, all passing
- [ ] `accessibilityRole` and `accessibilityLabel` (or `accessibilityLabelledBy`) set
- [ ] `npm run storybook:build` succeeds locally with no warnings about this component
- [ ] Verified on at least one mobile simulator (or explicit "not verified" note)
- [ ] Public barrel updated
- [ ] No new entry in `dependencies` (only `peerDependencies`)

---

## Storybook configuration

The web Storybook is the public face of the design system — designers, PMs and QA visit a hosted URL to validate components. The on-device Storybook is an internal QA tool for developers. Both consume the same `*.stories.tsx` files.

### Web (`.storybook/`)

Builder: `@storybook/react-vite`. Storybook 9.

`.storybook/main.ts` must alias `react-native` → `react-native-web` and add `.web.tsx` to extension resolution order. Stories glob: `'../src/**/*.stories.@(ts|tsx)'`.

Required addons:
- `@storybook/addon-essentials` (controls, actions, viewport, backgrounds, docs)
- `@storybook/addon-a11y`
- `@storybook/addon-interactions`

`.storybook/preview.tsx` must:
- Wrap every story in `SwiThemeProvider`.
- Configure `parameters.backgrounds` with values for `theme.background` (default) and a neutral light fallback.
- Configure `parameters.viewport` with **mobile device frames** as named viewports (see "Mobile preview" below).

### Mobile preview inside the web Storybook

Components that have mobile-specific behavior must have a story variant rendered inside a device frame, so designers can see how the component looks at mobile dimensions without leaving the web Storybook. Use the official viewport addon — it's lighter than custom iframe wrappers and supports keyboard shortcuts to switch frames.

In `.storybook/preview.tsx`, register named viewports for the most common SWI app targets:

```ts
parameters: {
  viewport: {
    viewports: {
      iphone14: { name: 'iPhone 14', styles: { width: '390px', height: '844px' }, type: 'mobile' },
      iphoneSE: { name: 'iPhone SE', styles: { width: '375px', height: '667px' }, type: 'mobile' },
      pixel7: { name: 'Pixel 7', styles: { width: '412px', height: '915px' }, type: 'mobile' },
      desktop: { name: 'Desktop', styles: { width: '1440px', height: '900px' }, type: 'desktop' },
    },
    defaultViewport: 'desktop',
  },
}
```

For components that exist in both contexts (most of them), this is enough — designer toggles viewport in the toolbar. For components with a clearly mobile-only or web-only purpose, **set `parameters.viewport.defaultViewport`** at the story level so the default render matches reality:

```tsx
// BottomSheet.stories.tsx
export const Default: Story = {
  parameters: { viewport: { defaultViewport: 'iphone14' } },
};
```

For components with `.web.tsx` / `.native.tsx` splits, the web Storybook only renders the `.web.tsx` version. Document this prominently in the story description (`parameters.docs.description.story`) and add a note pointing to the on-device Storybook for mobile-accurate validation.

### On-device (`example-app/.rnstorybook/`)

`@storybook/react-native` v10 inside an Expo app at `example-app/`. The stories glob points back to the lib: `'../../src/**/*.stories.@(ts|tsx)'` — single source of truth.

`example-app/metro.config.js` uses `withStorybook` from `@storybook/react-native/metro` so `storybook.requires.ts` is generated automatically.

`example-app/App.tsx` toggles between the storybook UI and a placeholder app screen via env var (so the same Expo project can later host integration screens).

This Storybook is **not deployed** — it runs locally on developers' simulators or physical devices for QA. It does not need to look polished; it needs to behave authentically.

### Constraints stories must respect

- No DOM APIs (`document`, `window.matchMedia`)
- No `parameters.docs` MDX-only features in critical stories (mobile Storybook ignores them)
- Custom controls limited to `select`, `boolean`, `text`, `number`, `radio`
- No story-level lazy imports — kills the Metro requires generator
- `parameters.viewport` is web-only and is silently ignored by the on-device Storybook (safe to use — won't break anything)

### Deploy pipeline (web Storybook)

The web Storybook is built as a static site by `npm run storybook:build`, output goes to `storybook-static/`. The deploy target is **client-controlled hosting** (URL and provider TBD by the project lead). The CI workflow ships the static output as a build artifact; the actual upload step depends on the chosen host.

Default workflow at `.github/workflows/deploy-storybook.yml`:

- Trigger: `push` on `main` branch only — **only-latest strategy, no per-tag URLs, no per-PR previews**.
- Steps: checkout → install → typecheck → lint → test → `storybook:build`.
- Output: `storybook-static/` archived as artifact, plus the deploy step (filled in once the client confirms the host — likely SSH/SFTP, S3 sync, or a provider-specific action).
- Failure on any of typecheck/lint/test/build blocks deploy. The Storybook URL never serves a broken build.

When the host is confirmed, update only the deploy step in the workflow. Do not introduce per-tag URLs, preview deployments, or staging environments unless explicitly requested — they were considered and rejected.

### Local commands

- `npm run storybook` — dev server on `localhost:6006` for development.
- `npm run storybook:build` — produce `storybook-static/`. **Run this locally before opening a PR** to catch build failures that don't show in dev mode.
- `npm run storybook:rn` — start the Expo example-app with on-device Storybook.

---

## Distribution and versioning

The lib is consumed by adding to the consumer app's `package.json`:

```json
"@kavicki/swi-design-system": "git+https://github.com/Kavicki-com/swi-design-system.git#v0.1.0"
```

**Always pin to a tag, never to `main` or a branch.** Branch-pinned installs are not reproducible.

### Releasing a new version

1. Update `version` in `package.json`.
2. Update `CHANGELOG.md` (manual or via Changesets if installed).
3. Commit, tag with `git tag v0.1.0`, push tag.
4. (Optional) Create a GitHub Release pointing at the tag with the changelog excerpt.

The consumer apps update by changing the tag in their `package.json` and running `npm install`. Because the install is from Git, `npm install` will fetch the new tag — no registry involved.

### Consumer-side configuration the README must spell out

The README must include, in this order:

1. **Install command** with concrete tag.
2. **Mobile (Metro) config**: nothing usually needed in modern Expo. Mention `watchFolders` only for local `yalc` development.
3. **Web (Vite) config**: alias `react-native` → `react-native-web`, extensions including `.web.tsx`, `optimizeDeps.include`.
4. **Web (Next.js) config**: `transpilePackages: ['@kavicki/swi-design-system']`.
5. **App root setup**: wrap the app in `<SwiThemeProvider>`.
6. **Optional**: how to override the theme (advanced; defer until requested).

---

## Roadmap of components

Implement in this order. Each phase has an exit criterion.

### Phase 0 — Foundation
Tokens (primitive, semantic, typography, effects), `SwiThemeProvider`, both Storybooks running, CI lint+typecheck+test in PRs, generator script, **Button** as the proof-of-pipeline component.
**Exit**: a consumer can install via `git+https`, import `Button`, and render it in both web and mobile.

### Phase 1 — Generic primitives (from Figma `SWI-library` page)
Text, Icon, Button, Input/TextField, Checkbox, Radio + RadioGroup, Switch, Select/Dropdown, Avatar, Badge, Tag/Chip, Divider, Spacer, Spinner, ProgressBar.

### Phase 2 — Composites
Card, ListItem, Modal/Dialog, BottomSheet, Toast/Snackbar, Tooltip, Tabs, Accordion, Breadcrumb, EmptyState, Skeleton.

### Phase 3 — Web-admin specific (from Figma `SWI - UI` web page)
Sidebar/NavRail, Topbar, Pagination, Table, DatePicker (web), DateRangePicker, FileUpload, FormField, FormSection.

### Phase 4 — Mobile specific (from Figma `SWI - UI` mobile page)
TabBar, Header (mobile), PullToRefresh, DatePicker (mobile, native picker), ActionSheet, SwipeableRow, Stepper.

### Phase 5 — Polish
Visual regression (Chromatic or Storybook test-runner), accessibility audit, MDX docs, v1.0.0.

---

## Common pitfalls — read before debugging

- **`Cannot resolve module react-native`** in Vite/web → missing `react-native` → `react-native-web` alias. Check `.storybook/main.ts` and the consumer's bundler config.
- **Two copies of React error** → the consumer app's `package.json` doesn't have React in `dependencies`, OR the lib has React in `dependencies` instead of `peerDependencies`. Inspect both.
- **Theme is `undefined` in styled-components** → consumer forgot to wrap in `SwiThemeProvider`, OR there are two copies of `styled-components` (peer dep mismatch).
- **Story works in web Storybook, blank in on-device** → likely a DOM-only API leaked in. Check imports and `useEffect` bodies.
- **Metro fails to import the lib from GitHub** → cache. Run `expo start --clear` or `watchman watch-del-all`.
- **Type errors on `theme.something` in the consumer** → consumer's `tsconfig.json` doesn't include the lib's `styled.d.ts`. Add `"include": ["../node_modules/@kavicki/swi-design-system/src/theme/styled.d.ts", "src/**/*"]` or import the lib's types entry once at the app root.

---

## When to ask before acting

The user wants you to be productive, but these decisions need confirmation rather than guess:

- Adding any new top-level dependency (always ask).
- Creating `.web.tsx` / `.native.tsx` splits (justify in the question).
- Changing the public API of an existing component.
- Renaming or restructuring tokens that are already published.
- Touching `package.json` peer or dev dependencies.
- Adding a build step or output bundling — **the answer is no**, but if there's a strong reason, surface it for discussion rather than implementing silently.

For the rest (writing components, stories, tests, fixing typos, adding tokens that don't exist yet, refactoring internals) just do the work.

---

## Reference files in this skill

- `references/figma-variables.json` — full Figma export of variables. Source of truth for `scripts/generate-tokens.ts`. **Do not edit manually**; re-export from Figma when tokens change.
- `references/component-template/` — minimal scaffolding for a new component (if added). If absent, follow the workflow above and create files by hand.
