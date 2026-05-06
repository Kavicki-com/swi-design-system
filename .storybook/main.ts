import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: { reactDocgen: 'react-docgen-typescript' },
  viteFinal: async (config, { configType }) => {
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
