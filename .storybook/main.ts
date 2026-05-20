import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';
// @ts-expect-error flow-remove-types ships no types
import flowRemoveTypes from 'flow-remove-types';
import type { Plugin } from 'vite';

// react-native-svg deep-imports `@react-native/assets-registry/registry`, which
// ships as Flow-typed `.js`. Rollup's parser chokes on `export type`, so strip
// Flow annotations from any `.js` under `node_modules/@react-native/**` before
// the commonjs/esm passes see them.
const stripFlowFromReactNativePkgs = (): Plugin => ({
  name: 'swi-strip-flow-react-native',
  enforce: 'pre',
  transform(code, id) {
    const normalized = id.replace(/\\/g, '/');
    if (!/\/node_modules\/@react-native\/[^/]+\/[^/]+\.js$/.test(normalized)) return null;
    if (!/@flow|^\s*(import |export )?type\s/m.test(code)) return null;
    const result = flowRemoveTypes(code, { pretty: true });
    return { code: result.toString(), map: result.generateMap() };
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
