import { describe, expect, it } from 'vitest';
import { panelOffsets, shouldDismiss } from './Popover.placement';

// O vitest do DS nao tem transform de react-native: nenhum teste aqui monta
// componente. Por isso as duas decisoes que produzem bug de verdade no Popover
// (onde o painel cai, e quando ele fecha) moram neste modulo puro, e sao
// testadas de verdade. O comportamento montado e testado no swi-admin, onde o
// react-native-web renderiza no jsdom.

describe('panelOffsets', () => {
  // top: '100%' e escolha deliberada. A alternativa era somar a altura do
  // gatilho, e medir altura exige onLayout, que depende de ResizeObserver e
  // nao dispara no jsdom: o painel cairia em cima do gatilho justamente nos
  // testes. Porcentagem resolve no layout, sem medicao, no web e no nativo.
  it('align start ancora o painel pela borda esquerda do gatilho', () => {
    expect(panelOffsets('start', 4)).toEqual({ top: '100%', marginTop: 4, left: 0 });
  });

  it('align end ancora pela borda direita, e nao fixa a esquerda', () => {
    expect(panelOffsets('end', 4)).toEqual({ top: '100%', marginTop: 4, right: 0 });
  });

  it('gap negativo nao sobe o painel por cima do gatilho', () => {
    expect(panelOffsets('start', -30).marginTop).toBe(0);
  });
});

describe('shouldDismiss', () => {
  const node = (dentro: boolean) => ({ contains: () => dentro });
  const alvo = {} as never;

  it('clique dentro do painel nao fecha', () => {
    expect(shouldDismiss(alvo, node(true), node(false))).toBe(false);
  });

  it('clique no gatilho nao fecha: o proprio gatilho ja alterna', () => {
    expect(shouldDismiss(alvo, node(false), node(true))).toBe(false);
  });

  it('clique fora dos dois fecha', () => {
    expect(shouldDismiss(alvo, node(false), node(false))).toBe(true);
  });

  it('sem painel montado nao fecha: nao ha nada aberto pra fechar', () => {
    expect(shouldDismiss(alvo, null, node(false))).toBe(false);
  });

  it('sem alvo nao fecha: evento sem target nao e clique fora', () => {
    expect(shouldDismiss(null, node(false), node(false))).toBe(false);
  });
});
