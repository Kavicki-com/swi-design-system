export type SkeletonShape = 'rect' | 'circle';

export interface SkeletonProps {
  /** Largura do retângulo. Padrão '100%'. O círculo ignora: o diâmetro é a altura. */
  width?: number | `${number}%`;
  /** Altura; no círculo, o diâmetro. Padrão 14, a altura de uma linha de body.m. */
  height?: number;
  shape?: SkeletonShape;
  /** Pulso da opacidade. Padrão true; quem pediu menos movimento no sistema vê parado. */
  animated?: boolean;
  testID?: string;
}

export interface SkeletonListProps {
  /** Quantas linhas de espera. Padrão 3. */
  rows?: number;
  /** Linhas de texto por linha da lista, de 1 a 4. Padrão 2. */
  lines?: number;
  /** Diâmetro do círculo do avatar. Padrão 56; `null` tira o círculo. */
  avatarSize?: number | null;
  animated?: boolean;
  /** O que o leitor de tela anuncia. Padrão "Carregando". */
  accessibilityLabel?: string;
  testID?: string;
}
