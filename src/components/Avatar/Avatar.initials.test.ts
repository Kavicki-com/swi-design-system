import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { initialsFrom } from './Avatar.initials';

// 0.1.120: `uri` vazio renderizava só a moldura — um disco cinza liso, igual
// pra todo mundo. Numa lista de operadores some a única pista de QUEM é a
// linha. Fallback de iniciais entra sem tocar em nenhum consumidor.
describe('initialsFrom', () => {
  it('primeiro + último nome', () => {
    expect(initialsFrom('Jennifer Gomes')).toBe('JG');
    expect(initialsFrom('Antonio Carlos Figueira')).toBe('AF');
  });

  it('ignora qualificador entre parênteses (homônimos do seed)', () => {
    expect(initialsFrom('Carlos Santos (Manut.)')).toBe('CS');
  });

  it('ignora partículas: "Maria da Silva" é MS, não MD', () => {
    expect(initialsFrom('Maria da Silva')).toBe('MS');
    expect(initialsFrom('Luís dos Santos')).toBe('LS');
  });

  it('nome único devolve UMA inicial (não inventa a segunda letra)', () => {
    expect(initialsFrom('Admin')).toBe('A');
  });

  it('sem nome não inventa nada — moldura vazia, como antes', () => {
    expect(initialsFrom(undefined)).toBe('');
    expect(initialsFrom('')).toBe('');
    expect(initialsFrom('   ')).toBe('');
  });

  it('sempre em caixa alta e no máximo 2 caracteres', () => {
    for (const nome of ['jennifer gomes', 'ÉRICA ÁVILA', 'ana beatriz costa lima']) {
      const out = initialsFrom(nome);
      expect(out).toBe(out.toLocaleUpperCase());
      expect(out.length).toBeLessThanOrEqual(2);
    }
  });
});

describe('Avatar — fiação do fallback', () => {
  const tsx = readFileSync(join(__dirname, 'Avatar.tsx'), 'utf8');
  const types = readFileSync(join(__dirname, 'Avatar.types.ts'), 'utf8');

  it('props declaram name opcional', () => {
    expect(types).toMatch(/name\?: string/);
  });

  it('cai no accessibilityLabel quando name não vem (retrocompat)', () => {
    expect(tsx).toMatch(/initialsFrom\(name \?\? accessibilityLabel\)/);
  });

  it('a foto continua tendo precedência sobre as iniciais', () => {
    expect(tsx.indexOf('uri ?')).toBeLessThan(tsx.indexOf('initials ?'));
  });
});
