import type { StorybookConfig } from '@storybook/react-vite';
import fs from 'node:fs/promises';
import path from 'node:path';
// @ts-expect-error flow-remove-types ships no types
import flowRemoveTypes from 'flow-remove-types';
import type { DepOptimizationOptions, Plugin } from 'vite';

// Vite bundles its own copy of esbuild, so the plugin type has to be read back
// out of Vite's options. Importing it from the top-level `esbuild` gives a
// structurally identical but nominally different type, and tsc rejects it.
type DepEsbuildPlugin = NonNullable<
  NonNullable<DepOptimizationOptions['esbuildOptions']>['plugins']
>[number];

// react-native-svg deep-imports `@react-native/assets-registry/registry`, which
// ships as Flow-typed `.js`. Neither Rollup nor esbuild parses `export type`, so
// Flow annotations get stripped from any `.js` under `node_modules/@react-native/**`
// before the commonjs/esm passes see them.
const isReactNativePkgFile = (id: string) =>
  /\/node_modules\/@react-native\/[^/]+\/[^/]+\.js$/.test(id.replace(/\\/g, '/'));
const hasFlowAnnotations = (code: string) => /@flow|^\s*(import |export )?type\s/m.test(code);

const stripFlowFromReactNativePkgs = (): Plugin => ({
  name: 'swi-strip-flow-react-native',
  enforce: 'pre',
  transform(code, id) {
    if (!isReactNativePkgFile(id)) return null;
    if (!hasFlowAnnotations(code)) return null;
    const result = flowRemoveTypes(code, { pretty: true });
    return { code: result.toString(), map: result.generateMap() };
  },
});

// The Vite plugin above never runs during dev, because the dependency
// pre-bundler is a separate esbuild pass that sees no Vite plugins. Same
// transform, second pipeline. Without it `storybook dev` dies on the first
// Flow-typed file it pre-bundles, while `storybook:build` stays green.
const stripFlowFromReactNativePkgsEsbuild = (): DepEsbuildPlugin => ({
  name: 'swi-strip-flow-react-native-esbuild',
  setup(build) {
    const filter = /node_modules[\\/]@react-native[\\/][^\\/]+[\\/][^\\/]+\.js$/;
    build.onLoad({ filter }, async (args) => {
      const code = await fs.readFile(args.path, 'utf8');
      if (!hasFlowAnnotations(code)) return null;
      return { contents: flowRemoveTypes(code, { pretty: true }).toString(), loader: 'js' };
    });
  },
});

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: { reactDocgen: 'react-docgen-typescript' },
  viteFinal: async (config, { configType }) => {
    config.plugins = [stripFlowFromReactNativePkgs(), ...(config.plugins ?? [])];
    // GitHub Pages serves project sites from /<repo-name>/. Set the base path
    // for production builds so asset URLs resolve correctly when hosted there.
    // Override via STORYBOOK_BASE_URL env var if hosting elsewhere.
    if (configType === 'PRODUCTION') {
      config.base = process.env.STORYBOOK_BASE_URL ?? '/swi-design-system/';
    }
    config.resolve = config.resolve ?? {};
    const existingAlias = config.resolve.alias ?? {};
    const aliasArray = Array.isArray(existingAlias)
      ? existingAlias
      : Object.entries(existingAlias).map(([find, replacement]) => ({
          find,
          replacement: replacement as string,
        }));
    config.resolve.alias = [
      { find: /^react-native$/, replacement: 'react-native-web' },
      ...aliasArray,
    ];
    config.resolve.extensions = [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      ...(config.resolve.extensions ?? []),
    ];
    config.define = {
      ...(config.define ?? {}),
      __DEV__: 'true',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'development'),
    };
    config.optimizeDeps = config.optimizeDeps ?? {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include ?? []),
      'react-native-web',
      'styled-components',
      'styled-components/native',
    ];
    // `resolve.extensions` above only governs Vite's own resolver. In dev, the
    // dependency pre-bundler is esbuild, and esbuild resolves relative imports
    // INSIDE a dependency with its own extension list, which has no `.web.js`.
    // react-native-svg ships `.web.js` siblings next to its native files; without
    // this the pre-bundler walks into `fabric/*NativeComponent.js`, which
    // deep-imports Flow-typed sources from `react-native` and kills `storybook
    // dev` with `Expected "from" but found "{"`. The production build goes
    // through Rollup and Vite's resolver, which is why `storybook:build` (and
    // therefore the hosted Storybook) never showed this.
    config.optimizeDeps.esbuildOptions = {
      ...(config.optimizeDeps.esbuildOptions ?? {}),
      plugins: [
        stripFlowFromReactNativePkgsEsbuild(),
        ...(config.optimizeDeps.esbuildOptions?.plugins ?? []),
      ],
      resolveExtensions: [
        '.web.tsx',
        '.web.ts',
        '.web.jsx',
        '.web.js',
        '.mjs',
        '.js',
        '.mts',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
      ],
    };
    // styled-components/native ESM bundle mixes ESM `import` syntax with a
    // literal `require("react-native")`. Without this flag Rollup's commonjs
    // plugin skips mixed files, leaving the require call in the production
    // bundle (which then crashes at runtime with "require is not defined").
    config.build = config.build ?? {};
    config.build.commonjsOptions = {
      ...(config.build.commonjsOptions ?? {}),
      transformMixedEsModules: true,
    };
    return config;
  },
};

export default config;
