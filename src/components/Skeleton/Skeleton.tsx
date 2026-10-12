import React, { useEffect, useRef, useState } from 'react';
import { AccessibilityInfo, Animated, Platform } from 'react-native';
import { PULSE_HALF_PERIOD_MS, PULSE_MIN_OPACITY } from './Skeleton.pulse';
import { Block } from './Skeleton.styles';
import type { SkeletonProps } from './Skeleton.types';

/**
 * Bloco de espera: ocupa o lugar de um conteúdo que ainda não chegou, com a
 * opacidade pulsando devagar. Fica fora da árvore de acessibilidade; quem
 * anuncia a espera é o container (ver `SkeletonList`).
 */
export function Skeleton({
  width = '100%',
  height = 14,
  shape = 'rect',
  animated = true,
  testID,
}: SkeletonProps) {
  const opacity = useRef(new Animated.Value(1)).current;
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    let alive = true;
    AccessibilityInfo.isReduceMotionEnabled()
      .then((enabled) => {
        if (alive) setReduceMotion(enabled);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (!animated || reduceMotion) {
      opacity.setValue(1);
      return undefined;
    }
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: PULSE_MIN_OPACITY,
          duration: PULSE_HALF_PERIOD_MS,
          useNativeDriver: Platform.OS !== 'web',
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: PULSE_HALF_PERIOD_MS,
          useNativeDriver: Platform.OS !== 'web',
        }),
      ]),
    );
    pulse.start();
    return () => pulse.stop();
  }, [animated, reduceMotion, opacity]);

  return (
    <Block
      $shape={shape}
      importantForAccessibility="no-hide-descendants"
      accessibilityElementsHidden
      style={{ width: shape === 'circle' ? height : width, height, opacity }}
      testID={testID}
    />
  );
}
