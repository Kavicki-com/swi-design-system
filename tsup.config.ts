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
  // source resolve .web primeiro e mascarava).
  //
  // O dist resultante é EXCLUSIVO DE WEB: renderiza <svg>/<path> do DOM.
  // Entregá-lo a um consumidor nativo mata o app — o React Native não conhece
  // esses elementos e lança "View config getter callback for component `path`
  // must be a function", que em build de release vira NSException fatal.
  //
  // Este comentário já afirmou que "consumidor nativo não usa o dist, porque o
  // campo `react-native` aponta pro source". Isso é FALSO desde o Expo SDK 54:
  // o Metro liga `unstable_enablePackageExports`, e o mapa `exports` passa a
  // ter precedência sobre os campos de entrada legados — o `react-native` do
  // topo do package.json vira letra morta. O que faz o nativo pegar o source é
  // a CONDIÇÃO `react-native` DENTRO de `exports` (o Metro aplica
  // `unstable_conditionsByPlatform.ios = ['react-native']`). O teste em
  // src/native-resolution.test.ts trava esse contrato.
  //
  // Regressão real: a v0.1.122 (esta config) derrubou o app iOS na abertura
  // até a v0.1.125, que acrescentou a condição.
  esbuildOptions(options) {
    options.resolveExtensions = ['.web.tsx', '.web.ts', '.tsx', '.ts', '.jsx', '.js', '.json']
  },
})
