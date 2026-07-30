import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { FILL_HEIGHT, insetGeometry } from './ProgressBar.geometry';

// O modo inset nasceu porque o painel mantinha um AnimatedProgressBar.tsx
// local: o DS so oferecia o track flat (fill colado nas bordas) e o bordered
// (moldura de 1px, raio pill, fill fixo em 6px), e o menu de detalhes do
// usuario precisa de um track solido 300x12 com 2px de inset.
//
// Mesma historia que o mobile ja tinha vivido com uma copia local do
// ProgressBar (ver ProgressBar.gradient-id.test.ts). Estes testes existem pra
// que a terceira copia nao precise ser criada.

describe('insetGeometry', () => {
  it('o fill estica para trackHeight - 2*inset, nao para os 6px fixos', () => {
    // Call site do menu do painel: 300x12 com 2px de inset.
    expect(insetGeometry(12, 2, 3).fillHeight).toBe(8);
    expect(insetGeometry(12, 2, 3).fillHeight).not.toBe(FILL_HEIGHT);
  });

  it('as quinas ficam concentricas: raio do fill = externo - inset', () => {
    expect(insetGeometry(12, 2, 3).innerRadius).toBe(1);
    expect(insetGeometry(22, 4, 999).innerRadius).toBe(995);
  });

  it('inset alem da metade da altura nao produz altura negativa', () => {
    // Altura negativa faz o RN reclamar no web e desenhar errado no nativo.
    // Degradar pra zero e visivelmente errado, mas inerte.
    expect(insetGeometry(12, 40, 3).fillHeight).toBe(0);
  });

  it('inset maior que o raio nao produz raio negativo', () => {
    expect(insetGeometry(40, 10, 3).innerRadius).toBe(0);
  });

  it('inset zero devolve o track inteiro', () => {
    expect(insetGeometry(12, 0, 3)).toEqual({ fillHeight: 12, innerRadius: 3 });
  });
});

// O resto do modo inset vive no .tsx, e o DS nao tem transform de react-native
// no vitest (nenhum teste importa componente RN). Mesma abordagem do teste do
// gradient-id: validar as decisoes no texto-fonte.
describe('ProgressBar — decisoes do render que nao dao pra montar', () => {
  const tsx = readFileSync(join(__dirname, 'ProgressBar.tsx'), 'utf8');

  it('bordered vence inset (senao os dois modos desenhariam juntos)', () => {
    expect(tsx).toMatch(/inset !== undefined && !bordered/);
  });

  it('a animacao NAO usa o driver nativo', () => {
    // width nao e animavel no driver nativo: com true a barra nao se move e o
    // erro so aparece em runtime, no device.
    expect(tsx).toMatch(/useNativeDriver:\s*false/);
    expect(tsx).not.toMatch(/useNativeDriver:\s*true/);
  });

  it('a animacao para no cleanup', () => {
    expect(tsx).toMatch(/return \(\) => run\.stop\(\)/);
  });

  it('sem animated o fill continua saindo pelo styled Fill de sempre', () => {
    // O contrato que mantem os consumidores existentes intactos: quem nao pede
    // animacao renderiza exatamente como antes.
    expect(tsx).toMatch(/<Fill\s/);
    expect(tsx).toMatch(/animated \? animatedWidth : `\$\{pct\}%`/);
  });

  it('a geometria do inset vem do modulo puro, nao inline', () => {
    expect(tsx).toMatch(/insetGeometry\(trackHeight, inset, outerRadius\)/);
  });
});
