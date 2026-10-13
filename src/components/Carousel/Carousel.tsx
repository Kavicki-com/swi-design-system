import React, { Children, isValidElement } from 'react';
import { ScrollView, View } from 'react-native';
import { carouselItemStyle } from './Carousel.item';
import type { CarouselProps } from './Carousel.types';

/**
 * Carrossel horizontal: os itens mantem uma largura minima e o excesso rola de
 * lado, no lugar de espremer tudo numa linha so (MEL-18/19). Cada filho
 * vira um slot de largura minima que nao encolhe. A barra de rolagem aparece
 * no web; no touch rola com o dedo.
 */
export function Carousel({
  children,
  itemMinWidth = 240,
  gap = 12,
  accessibilityLabel,
  testID,
}: CarouselProps) {
  const itemStyle = carouselItemStyle(itemMinWidth);
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      contentContainerStyle={{ flexDirection: 'row', gap }}
    >
      {items.map((child, index) => (
        <View key={child.key ?? index} style={itemStyle}>
          {child}
        </View>
      ))}
    </ScrollView>
  );
}
