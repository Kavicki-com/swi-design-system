import type { ViewStyle } from 'react-native';

/**
 * Estilo de cada item do carrossel: largura minima e sem encolher. Com isso os
 * itens mantem o tamanho e o excesso rola de lado, em vez de espremer todos
 * numa linha so (MEL-18/19).
 */
export const carouselItemStyle = (minWidth: number): ViewStyle => ({
  minWidth,
  flexShrink: 0,
});
