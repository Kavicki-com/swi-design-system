import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  external: [
    'react',
    'react-dom',
    'react-native',
    'react-native-svg',
    'react-native-web',
    'styled-components',
    'styled-components/native',
  ],
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.cjs' }
  },
  // O dist é consumido pelo swi-admin (web) via tgz vendorizado. Sem isto o
  // esbuild resolve o gêmeo NATIVO (InnerShadowCircle.tsx etc.) e o bundle
  // importa Filter/Fe* — símbolos que o shim react-native-svg-web não exporta,
  // quebrando o `vite build` do admin no CI (não localmente: lá o alias pro
  // source resolve .web primeiro e mascarava). Consumidor nativo não usa o
  // dist: o campo `react-native` do package.json aponta pro source, que o
  // Metro resolve com precedência de plataforma.
  esbuildOptions(options) {
    options.resolveExtensions = ['.web.tsx', '.web.ts', '.tsx', '.ts', '.jsx', '.js', '.json']
  },
})
