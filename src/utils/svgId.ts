import { useId } from 'react';

/**
 * Id seguro para `<Defs>` de SVG, derivado do `useId()` do React.
 *
 * POR QUE EXISTE: o formato do `useId()` MUDOU entre versões do React —
 * `:r0:` no 18, `«R0»` no 19. Os componentes sanitizavam só os dois-pontos
 * (`replace(/:/g, '')`), premissa que virou mentira no React 19: o id saía
 * como `icon-grad-«R0»` e o `fill="url(#icon-grad-«R0»)"` ficava inválido.
 *
 * No navegador isso degrada em silêncio (o preenchimento some), e foi por isso
 * que passou por testes e Storybook. No iOS, o react-native-svg lança exceção
 * de Objective-C ao processar a referência e o app ABORTA na abertura — como o
 * `Icon` está em quase toda tela, o app morria antes do login (crash
 * 2026-07-27, três relatórios idênticos).
 *
 * A regra passa a viver num lugar só: em vez de listar o que remover (que
 * quebra à próxima mudança do React), mantém apenas o que é comprovadamente
 * seguro — letras, números, hífen e sublinhado.
 */
export function useSvgId(prefix: string): string {
  return `${prefix}-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
}
