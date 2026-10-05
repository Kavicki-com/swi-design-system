import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { actionBackground } from './Toast.action';

// v0.1.135: o Toast ganha um botão de ação opcional, como o "Evacuar área" do
// alerta de chuva no painel. No desenho o botão é um ContainedButton com a cor
// forte da variante, Inter Bold, padding 12, raio 8 e elevation-lg, no fim da
// faixa. O vitest do DS não monta componente (ver Popover.placement.test.ts):
// a cor por variante é testada de verdade aqui e a ligação no componente por
// contrato de fonte; o comportamento montado é testado no swi-admin.
describe('Toast: botão de ação', () => {
  const types = readFileSync(join(__dirname, 'Toast.types.ts'), 'utf8');
  const tsx = readFileSync(join(__dirname, 'Toast.tsx'), 'utf8');
  const index = readFileSync(join(__dirname, '..', '..', 'index.ts'), 'utf8');

  it('a ação é opcional e tem rótulo, toque e rótulo de acessibilidade', () => {
    expect(types).toMatch(/action\?: ToastAction/);
    expect(types).toMatch(/export interface ToastAction \{[^}]*label: string;/);
    expect(types).toMatch(/export interface ToastAction \{[^}]*onPress: \(\) => void;/);
    expect(types).toMatch(/export interface ToastAction \{[^}]*accessibilityLabel\?: string;/);
  });

  it('o botão é o Button contido do DS, com a cor forte da variante e elevation lg', () => {
    expect(tsx).toMatch(/import \{ Button \} from '\.\.\/Button'/);
    expect(tsx).toMatch(/\{action \? \(\s*<ActionSlot>\s*<Button/);
    expect(tsx).toMatch(/variant="contained"/);
    expect(tsx).toMatch(/elevation="lg"/);
    expect(tsx).toMatch(/label=\{action\.label\}/);
    expect(tsx).toMatch(/onPress=\{action\.onPress\}/);
    expect(tsx).toMatch(/accessibilityLabel=\{action\.accessibilityLabel\}/);
    expect(tsx).toMatch(/backgroundColor=\{actionBackground\(variant, theme\)\}/);
  });

  // Rótulo longo encolhe o botão (o Label do Button corta em uma linha) em vez
  // de espremer o título e a mensagem.
  it('o botão fica num encaixe que encolhe até metade da faixa', () => {
    const styles = readFileSync(join(__dirname, 'Toast.styles.ts'), 'utf8');
    const slot = /export const ActionSlot = styled\(View\)`([^`]*)`/.exec(styles)?.[1] ?? '';
    expect(slot).toMatch(/flex-shrink: 1;/);
    expect(slot).toMatch(/max-width: 50%;/);
    expect(tsx).toMatch(/<ActionSlot>\s*<Button/);
  });

  it('o botão vem antes do fechar', () => {
    expect(tsx.indexOf('{action ?')).toBeGreaterThan(-1);
    expect(tsx.indexOf('{action ?')).toBeLessThan(tsx.indexOf('{onClose ?'));
  });

  it('o tipo da ação sai pelo index do pacote', () => {
    expect(index).toMatch(/export type \{ ToastProps, ToastVariant, ToastAction \} from '\.\/components\/Toast'/);
  });
});

describe('actionBackground', () => {
  // Os tokens importam react-native (Platform), que o vitest do DS não
  // transforma; basta um tema com as quatro superfícies fortes.
  const theme = {
    surface: { error: 'error', success: 'success', warning: 'warning', info: 'info' },
  } as unknown as Parameters<typeof actionBackground>[1];

  it('usa a superfície forte de cada variante', () => {
    expect(actionBackground('error', theme)).toBe('error');
    expect(actionBackground('success', theme)).toBe('success');
    expect(actionBackground('warning', theme)).toBe('warning');
    expect(actionBackground('info', theme)).toBe('info');
  });
});

describe('Toast: botão de fechar', () => {
  const tsx = readFileSync(join(__dirname, 'Toast.tsx'), 'utf8');

  it('o rótulo de acessibilidade é em português', () => {
    expect(tsx).toMatch(/accessibilityLabel="Fechar"/);
    expect(tsx).not.toMatch(/accessibilityLabel="Close"/);
  });
});
