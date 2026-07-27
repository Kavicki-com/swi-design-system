import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Contrapartida nativa do web-bundler-compat.test.ts.
//
// O QUE ACONTECEU (2026-07-27): o app iOS abria e fechava em ~300ms, antes do
// login. O syslog do aparelho mostrou:
//
//   Unhandled JS Exception: Invariant Violation: View config getter callback
//   for component `path` must be a function (received `undefined`).
//     at path -> svg -> Icon -> Logo
//
// `path`/`svg` MINÚSCULOS são elementos do DOM: o bundle iOS estava rodando o
// Icon.web. Em build de release não há RedBox, então o erro de JS vira
// NSException num método de TurboModule, o React relança sem handler e o
// processo aborta (RCTTurboModule.mm, performMethodInvocation).
//
// POR QUE o nativo pegou o dist: desde o Expo SDK 54 o Metro liga
// `unstable_enablePackageExports`, e o mapa `exports` passa a ter precedência
// sobre os campos de entrada legados — o `react-native` do topo do
// package.json vira letra morta. O dist é gerado com resolveExtensions
// priorizando `.web` (necessário pro `vite build` do admin), então o nativo
// recebia a implementação de DOM.
//
// A correção é a CONDIÇÃO `react-native` dentro de `exports`: o Metro aplica
// `unstable_conditionsByPlatform.ios = ['react-native']`.
//
// Estes testes leem o MANIFESTO e o ARTEFATO, não a convenção — foi a
// convenção ("nativo não usa o dist") que estava errada e ninguém percebeu.
const pkg = JSON.parse(
  readFileSync(join(__dirname, '..', 'package.json'), 'utf8'),
) as {
  files?: string[];
  exports?: Record<string, Record<string, string>>;
};

const rootExport = pkg.exports?.['.'] ?? {};

describe('resolução nativa (Metro / Expo SDK 54+)', () => {
  it('exports expõe a condição react-native apontando pro source', () => {
    expect(rootExport['react-native']).toBe('./src/index.ts');
  });

  it('a condição react-native vem ANTES de import/require', () => {
    // Casamento de condição é ordenado: quem vier primeiro e bater, vence.
    // Se `import` ficasse antes, o Metro pegaria o dist de novo e o app
    // voltaria a abortar na abertura.
    const keys = Object.keys(rootExport);
    const native = keys.indexOf('react-native');
    expect(native).toBeGreaterThanOrEqual(0);
    for (const cond of ['import', 'require']) {
      const i = keys.indexOf(cond);
      if (i >= 0) expect(native).toBeLessThan(i);
    }
  });

  it('o source apontado existe e é publicado no tgz', () => {
    expect(existsSync(join(__dirname, 'index.ts'))).toBe(true);
    // Sem `src` em `files`, o tgz vendorizado resolveria a condição pra um
    // caminho inexistente — o app quebraria no bundling em vez de em runtime.
    expect(pkg.files ?? []).toContain('src');
  });

  it('o dist é o artefato WEB — por isso o nativo não pode cair nele', () => {
    const dist = join(__dirname, '..', 'dist', 'index.mjs');
    if (!existsSync(dist)) return; // clone fresco sem build; o CI roda pós-build
    const code = readFileSync(dist, 'utf8');
    const domElements = ['svg', 'path'].reduce(
      (total, tag) => total + (code.match(new RegExp(`\\(\\s*"${tag}"\\s*,`, 'g')) ?? []).length,
      0,
    );
    // Se algum dia isto zerar, o dist virou universal e vale reavaliar o
    // split — mas NÃO remova a condição sem antes provar num aparelho.
    expect(domElements).toBeGreaterThan(0);
  });
});
