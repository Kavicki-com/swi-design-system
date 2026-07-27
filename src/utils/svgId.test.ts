import { describe, expect, it, vi } from 'vitest';

// O formato do useId MUDOU entre versões do React: ':r0:' no 18, '«R0»' no 19.
// Os componentes sanitizavam só os dois-pontos, então no React 19 o id saía
// como `icon-grad-«R0»` e o `url(#icon-grad-«R0»)` ficava inválido. No
// navegador some o preenchimento em silêncio; no iOS o react-native-svg lança
// exceção de Objective-C e o app ABORTA na abertura (crash 2026-07-27).
//
// Mocka o useId em vez de renderizar: o que se está provando é a sanitização,
// e ela precisa valer para QUALQUER formato que o React venha a adotar.
const mockUseId = vi.fn();
vi.mock('react', () => ({ useId: () => mockUseId() }));

const { useSvgId } = await import('./svgId');

describe('useSvgId', () => {
  it('remove as aspas angulares do React 19 — a causa do crash no iOS', () => {
    mockUseId.mockReturnValue('«R0»');
    const id = useSvgId('icon-grad');
    expect(id).toBe('icon-grad-R0');
    expect(id).not.toMatch(/[«»]/);
  });

  it('segue removendo os dois-pontos do React 18 (retrocompatível)', () => {
    mockUseId.mockReturnValue(':r0:');
    expect(useSvgId('pb-gradient')).toBe('pb-gradient-r0');
  });

  it('sobrevive a um formato futuro qualquer: só sai o que é seguro em url(#…)', () => {
    mockUseId.mockReturnValue('@#$%r1!*(){}[]/\\ .+');
    const id = useSvgId('x');
    expect(id).toBe('x-r1');
    // Nada além de letras, números, hífen e sublinhado.
    expect(id).toMatch(/^[a-zA-Z0-9_-]+$/);
  });

  it('preserva hífen e sublinhado, que são válidos', () => {
    mockUseId.mockReturnValue('r_0-1');
    expect(useSvgId('grad')).toBe('grad-r_0-1');
  });
});
