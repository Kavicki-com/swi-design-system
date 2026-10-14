import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// v0.1.140: o StatusTag truncava sempre em uma linha (numberOfLines={1}). A
// barra de ponto de encontro do app precisa de um selo "accept" de largura
// cheia cujo texto longo ("Presenca confirmada no ponto de encontro") quebre em
// mais de uma linha sem cortar. O StatusTag ganha numberOfLines configuravel
// (padrao 1, preserva o selo de uma linha) e as linhas centralizam.
//
// O vitest do DS nao monta componente: aqui se confere por contrato de fonte; o
// comportamento montado e testado no app consumidor.
describe('StatusTag: quebra de linha configuravel', () => {
  const dir = __dirname;
  const tsx = readFileSync(join(dir, 'StatusTag.tsx'), 'utf8');
  const types = readFileSync(join(dir, 'StatusTag.types.ts'), 'utf8');
  const styles = readFileSync(join(dir, 'StatusTag.styles.ts'), 'utf8');

  it('expoe numberOfLines nas props', () => {
    expect(types).toMatch(/numberOfLines\?: number;/);
  });

  it('o padrao e uma linha (preserva o selo compacto)', () => {
    expect(tsx).toMatch(/numberOfLines = 1/);
  });

  it('repassa numberOfLines para o Label em vez de fixar em 1', () => {
    expect(tsx).toMatch(/numberOfLines=\{numberOfLines\}/);
    expect(tsx).not.toMatch(/numberOfLines=\{1\}/);
  });

  it('as linhas do Label centralizam (selo de largura cheia multi-linha)', () => {
    expect(styles).toMatch(/text-align:\s*center/);
  });
});
