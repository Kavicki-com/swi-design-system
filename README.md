# SWI Design System

Universal React Native component library for `swi-admin` (web via React Native Web) and `swi-app` (mobile). Source-only distribution via Git tag.

## Stack

- React Native primitives + `styled-components/native`
- TypeScript strict
- Storybook 9 (web, hosted) + Storybook RN v10 (on-device, internal QA)
- 3-tier tokens generated from Figma (`references/figma-variables.json`)

## Install (consumer apps)

```jsonc
// package.json
"@kavicki/swi-design-system": "git+https://github.com/Kavicki-com/swi-design-system.git#v0.1.0"
```

Pin to a tag, never to `main`.

### App root

```tsx
import { SwiThemeProvider } from '@kavicki/swi-design-system';

export default function App() {
  return (
    <SwiThemeProvider>
      <YourApp />
    </SwiThemeProvider>
  );
}
```

### Web bundler (Vite)

```ts
resolve: {
  alias: { 'react-native': 'react-native-web' },
  extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.js'],
},
optimizeDeps: { include: ['react-native-web', 'styled-components'] },
```

### Web (Next.js)

```ts
transpilePackages: ['@kavicki/swi-design-system'];
```

### Mobile (Expo / Metro)

No special config needed for normal installs. For local development with `yalc` add the lib path to `watchFolders`.

## Local development

```sh
npm install
npm run storybook        # web Storybook on :6006
npm run storybook:build  # produce storybook-static/
npm run typecheck
npm run test
npm run lint
```

The web Storybook is the official validation channel (designers, PMs, QA). A PR that breaks `storybook:build` does not merge.

## Tokens

Three tiers — components consume only **semantic**:

| File | Purpose |
|---|---|
| `src/tokens/primitive.ts` | Raw palette + size scale. Internal. |
| `src/tokens/semantic.ts` | `surface.*`, `content.*`, `border.*`, `padding.*`, `gap.*`, `margin.*`. **Public.** |
| `src/tokens/typography.ts` | Composite text styles (`title.l`, `body.m`, ...). |
| `src/tokens/effects.ts` | Cross-platform elevation shadows. |

Edit `references/figma-variables.json` (re-export from Figma), then run `npm run tokens:generate`.

## Component layout

```
src/components/<Name>/
  <Name>.tsx          # composition only
  <Name>.types.ts     # props (extend RN types, never redefine onPress etc.)
  <Name>.styles.ts    # styled-components/native, reads from theme
  <Name>.stories.tsx  # CSF3, @storybook/react types, controls for every variant
  <Name>.test.tsx     # @testing-library/react-native, ≥3 tests
  index.ts
```

Hard rules: no build step, no `dist/`, no hardcoded colors/sizes in components, only `peerDependencies` for shared runtime libs.

## Releasing

1. Bump `version` in `package.json`.
2. Update `CHANGELOG.md`.
3. `git tag vX.Y.Z && git push --tags`.

Consumers update by changing the tag in their `package.json`.
