import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { descriptionColor } from './descriptionColor';

// POR QUE ESTE MODULO EXISTE
//
// O mapeamento variante -> token de cor da legenda nasceu inline dentro do
// Input.styles.ts. Quando o Combobox precisou de legenda, a copia que foi
// parar la (Combobox.styles.ts) perdeu as variantes no caminho: so distinguia
// disabled de normal, entao um Combobox com erro pintava a mensagem na cor
// neutra. Duas verdades sobre a mesma decisao de design, e a segunda ja tinha
// divergido da primeira.
//
// Com GenderSelector e RadioGroup ganhando legenda no mesmo bump, seriam
// QUATRO copias. Mesmo raciocinio do ProgressBar.inset.test.ts: o teste existe
// pra que a proxima copia nao precise ser criada.

// Theme sintetico: so os tokens que a funcao consulta. Valores marcados pra
// que uma troca acidental de token apareca como string trocada, nao como cor
// parecida que passa despercebida.
const theme = {
  content: {
    dark: 'TOKEN_dark',
    disable: 'TOKEN_disable',
    success: 'TOKEN_success',
    error: 'TOKEN_error',
    warning: 'TOKEN_warning',
  },
} as never;

describe('descriptionColor', () => {
  it('sem variante cai no texto neutro', () => {
    expect(descriptionColor({ theme })).toBe('TOKEN_dark');
    expect(descriptionColor({ $variant: 'default', theme })).toBe('TOKEN_dark');
  });

  it('cada variante puxa o proprio token', () => {
    expect(descriptionColor({ $variant: 'success', theme })).toBe('TOKEN_success');
    expect(descriptionColor({ $variant: 'error', theme })).toBe('TOKEN_error');
    expect(descriptionColor({ $variant: 'warning', theme })).toBe('TOKEN_warning');
  });

  // A ordem importa: campo desabilitado nao deve gritar em vermelho. Se a
  // variante vencesse, um form desabilitado com erro pendente ficaria
  // sinalizando um problema que o usuario nao tem como corrigir.
  it('disabled vence a variante', () => {
    expect(descriptionColor({ $disabled: true, $variant: 'error', theme })).toBe(
      'TOKEN_disable',
    );
    expect(descriptionColor({ $disabled: true, theme })).toBe('TOKEN_disable');
  });
});

// O Input ja shippava este mapeamento; a extracao nao pode mudar o que ele
// pinta. Estes testes travam o consumo em vez de deixar a copia antiga viva.
describe('quem consome o modulo em vez de reimplementar', () => {
  const read = (...p: string[]) =>
    readFileSync(join(__dirname, '..', 'components', ...p), 'utf8');

  // So o bloco da legenda. Label e Chevron do Combobox usam o mesmo ternario
  // de disabled legitimamente — eles nao tem variante, e assertar no arquivo
  // inteiro reprovaria codigo correto.
  const descriptionBlock = (src: string) => src.split('export const Description')[1] ?? '';

  it('Input.styles nao tem mais mapeamento proprio', () => {
    const src = read('Input', 'Input.styles.ts');
    expect(src).toMatch(/descriptionColor/);
    expect(src).not.toMatch(/\$variant === 'success'/);
  });

  it('Combobox.styles usa o mapeamento completo, com variante', () => {
    const bloco = descriptionBlock(read('Combobox', 'Combobox.styles.ts'));
    expect(bloco).toMatch(/descriptionColor/);
    // A regressao original: pintar so por disabled, ignorando a variante.
    expect(bloco).not.toMatch(/\$disabled \? theme\.content\.disable/);
  });
});
