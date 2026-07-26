import { describe, expect, it } from 'vitest';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// O swi-admin resolve `react-native-svg` pro shim react-native-svg-web (alias
// no vite.config), que só exporta os elementos SVG básicos. O Rollup valida
// TODOS os named imports do grafo do DS antes do tree-shaking — então um
// componente que importa um símbolo ausente no shim quebra o `vite build` do
// admin mesmo sem nenhuma tela usar o componente. A saída padrão da casa é o
// gêmeo de plataforma (.web.tsx), que o vite resolve primeiro e que mantém o
// arquivo nativo fora do grafo web (precedente: StatusChartBackdrop.web.tsx).
//
// Fonte da lista: exports de react-native-svg-web/index.js — não tem SvgXml
// nem nenhum primitivo de filtro.
const WEB_MISSING = [
  'SvgXml',
  'Filter',
  'FeBlend',
  'FeColorMatrix',
  'FeComposite',
  'FeDropShadow',
  'FeFlood',
  'FeGaussianBlur',
  'FeMerge',
  'FeMergeNode',
  'FeOffset',
];

const SRC = join(__dirname);

const walk = (dir: string): string[] =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const namedImportsFromRnSvg = (source: string): string[] => {
  const imports: string[] = [];
  const re = /import\s+([^;]*?)\s+from\s+'react-native-svg'/g;
  for (const match of source.matchAll(re)) {
    const inner = (match[1] ?? '').match(/\{([\s\S]*?)\}/)?.[1];
    if (!inner) continue;
    for (const raw of inner.split(',')) {
      const name = (raw.trim().split(/\s+as\s+/)[0] ?? '').trim();
      if (name) imports.push(name);
    }
  }
  return imports;
};

describe('compat com bundler web (swi-admin vite build)', () => {
  it('arquivo que importa símbolo ausente no react-native-svg-web tem gêmeo .web.tsx', () => {
    const offenders: string[] = [];
    const files = walk(SRC).filter(
      (f) =>
        f.endsWith('.tsx') &&
        !f.endsWith('.web.tsx') &&
        !f.endsWith('.stories.tsx') &&
        !f.endsWith('.test.tsx'),
    );
    for (const file of files) {
      const missing = namedImportsFromRnSvg(readFileSync(file, 'utf8')).filter((n) =>
        WEB_MISSING.includes(n),
      );
      if (missing.length === 0) continue;
      const twin = file.replace(/\.tsx$/, '.web.tsx');
      if (!existsSync(twin)) {
        offenders.push(`${file} importa [${missing.join(', ')}] sem gêmeo .web.tsx`);
      }
    }
    expect(offenders).toEqual([]);
  });

  // O gêmeo .web só protege quem consome o SOURCE (alias do vite no admin).
  // O tsup resolvia o gêmeo NATIVO pro dist e o tgz vendorizado quebrava o
  // `vite build` do admin no CI — mascarado até o lint ficar verde
  // (2026-07-26). resolveExtensions no tsup.config prioriza .web; este teste
  // trava o invariante no ARTEFATO, não só na convenção de arquivos.
  it('dist/index.mjs não importa símbolo ausente no react-native-svg-web', () => {
    const dist = join(__dirname, '..', 'dist', 'index.mjs');
    if (!existsSync(dist)) return; // clone fresco sem build — o invariante roda no CI pós-build
    const named = namedImportsFromRnSvg(readFileSync(dist, 'utf8'));
    expect(named.filter((n) => WEB_MISSING.includes(n))).toEqual([]);
  });
});
