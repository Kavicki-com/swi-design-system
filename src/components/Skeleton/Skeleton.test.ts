import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  PULSE_HALF_PERIOD_MS,
  PULSE_MIN_OPACITY,
  clampRows,
  skeletonLineWidths,
} from './Skeleton.pulse';

// v0.1.136: Skeleton para a espera de listas. Bloco nas cores de superficie do
// tema com a opacidade pulsando devagar, e uma lista pronta no formato da
// linha (circulo do avatar e linhas de texto). O vitest do DS nao monta
// componente: as contas moram em Skeleton.pulse.ts; a animacao e a
// acessibilidade sao conferidas por contrato de fonte.
describe('skeletonLineWidths', () => {
  it('duas linhas: a de cima mais longa, como nome e subtitulo', () => {
    expect(skeletonLineWidths(2)).toEqual(['60%', '40%']);
  });

  it('tres linhas seguem encurtando, como nome, idade e tipo sanguineo', () => {
    expect(skeletonLineWidths(3)).toEqual(['60%', '40%', '30%']);
  });

  it('fica entre uma e quatro linhas', () => {
    expect(skeletonLineWidths(0)).toEqual(['60%']);
    expect(skeletonLineWidths(9)).toHaveLength(4);
  });
});

describe('clampRows', () => {
  it('pelo menos uma linha e numero inteiro', () => {
    expect(clampRows(0)).toBe(1);
    expect(clampRows(2.7)).toBe(2);
    expect(clampRows(5)).toBe(5);
  });
});

describe('pulso', () => {
  it('lento e sem sumir: vai a 40% de opacidade e volta, 900 ms cada meia volta', () => {
    expect(PULSE_MIN_OPACITY).toBe(0.4);
    expect(PULSE_HALF_PERIOD_MS).toBe(900);
  });
});

describe('Skeleton: ligacao', () => {
  const tsx = readFileSync(join(__dirname, 'Skeleton.tsx'), 'utf8');
  const list = readFileSync(join(__dirname, 'SkeletonList.tsx'), 'utf8');
  const styles = readFileSync(join(__dirname, 'Skeleton.styles.ts'), 'utf8');
  const types = readFileSync(join(__dirname, 'Skeleton.types.ts'), 'utf8');
  const index = readFileSync(join(__dirname, '..', '..', 'index.ts'), 'utf8');

  it('o pulso e um Animated.loop de ida e volta na opacidade', () => {
    expect(tsx).toMatch(/Animated\.loop\(/);
    expect(tsx).toMatch(/Animated\.sequence\(/);
    expect(tsx).toMatch(/toValue: PULSE_MIN_OPACITY/);
    expect(tsx).toMatch(/duration: PULSE_HALF_PERIOD_MS/);
  });

  // O web nao tem driver nativo de animacao e avisa no console se pedirem.
  it('driver nativo so fora do web', () => {
    expect(tsx).toMatch(/useNativeDriver: Platform\.OS !== 'web'/);
  });

  it('quem pediu menos movimento no sistema ve o bloco parado', () => {
    expect(tsx).toMatch(/AccessibilityInfo\.isReduceMotionEnabled\(\)/);
  });

  // surface.medium (#222) some sobre o cartao (surface.standard, #1F1F1F);
  // surface.high (#303030) e a cor do divisor das linhas das listas.
  it('o bloco usa surface.high e o circulo fecha com o raio pill', () => {
    const block = /export const Block = styled\(Animated\.View\)[^`]*`([^`]*)`/.exec(styles)?.[1] ?? '';
    expect(block).toMatch(/theme\.surface\.high/);
    expect(block).toMatch(/theme\.border\.radius\.pill/);
    expect(block).toMatch(/theme\.border\.radius\.s/);
  });

  it('a linha da lista segue o cartao das listas: surface.standard, raio m, padding m e sm', () => {
    const row = /export const ListRow = styled\(View\)`([^`]*)`/.exec(styles)?.[1] ?? '';
    expect(row).toMatch(/theme\.surface\.standard/);
    expect(row).toMatch(/theme\.border\.radius\.m/);
    expect(row).toMatch(/theme\.padding\.sm\}px \$\{\(\{ theme \}\) => theme\.padding\.m/);
  });

  it('a lista anuncia que esta carregando e os blocos ficam fora da leitura', () => {
    expect(list).toMatch(/accessibilityRole="progressbar"/);
    expect(list).toMatch(/accessibilityLabel = 'Carregando'/);
    expect(tsx).toMatch(/importantForAccessibility="no-hide-descendants"/);
  });

  it('props do bloco e da lista', () => {
    expect(types).toMatch(/export type SkeletonShape = 'rect' \| 'circle';/);
    expect(types).toMatch(/shape\?: SkeletonShape;/);
    expect(types).toMatch(/animated\?: boolean;/);
    expect(types).toMatch(/rows\?: number;/);
    expect(types).toMatch(/lines\?: number;/);
    expect(types).toMatch(/avatarSize\?: number \| null;/);
  });

  it('sai pelo index do pacote', () => {
    expect(index).toMatch(/export \{ Skeleton, SkeletonList \} from '\.\/components\/Skeleton'/);
    for (const name of ['SkeletonProps', 'SkeletonListProps', 'SkeletonShape']) {
      expect(index).toMatch(new RegExp(name));
    }
  });
});
