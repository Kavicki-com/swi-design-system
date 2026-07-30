import React, { forwardRef, useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, View as RNView, type View } from 'react-native';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Rect, Stop } from 'react-native-svg';
import { useTheme } from '../../theme';
import { Fill, Track } from './ProgressBar.styles';
import type { ProgressBarProps } from './ProgressBar.types';
import { useSvgId } from '../../utils/svgId';
import { FILL_HEIGHT, insetGeometry } from './ProgressBar.geometry';

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

export const ProgressBar = forwardRef<View, ProgressBarProps>(
  (
    {
      value,
      disabled = false,
      color,
      trackColor,
      gradient,
      gradientStops,
      gradientDirection = 'ltr',
      bordered = false,
      trackHeight = 22,
      inset,
      trackRadius,
      animated = false,
      animationDurationMs = 2000,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    const pct = clamp(value, 0, 100);
    const useGradient = !disabled && gradient && gradient.length >= 2;

    // Id por instância. Um id fixo colide quando duas barras coexistem (o Stack
    // do expo-router mantém telas montadas, e listas renderizam N barras): o
    // <Defs> de uma sobrescreve o da outra e o fill some/erra a cor. Mesmo
    // padrão já usado em DonutArc e Icon. `:` do useId não é válido em url(#…).
    const gradientId = useSvgId('pb-gradient');

    // Resolve stops: explicit array (validated to length match) or
    // auto-distribute evenly across gradient length.
    const stops = (() => {
      if (!gradient) return [];
      if (gradientStops && gradientStops.length === gradient.length) {
        return gradientStops.map((s) => clamp(s, 0, 100));
      }
      const n = gradient.length;
      return gradient.map((_, i) => (i / (n - 1)) * 100);
    })();

    const gradX1 = gradientDirection === 'rtl' ? 100 : 0;
    const gradX2 = gradientDirection === 'rtl' ? 0 : 100;

    // Animação de entrada (0 → value). useNativeDriver FICA false: width não é
    // animável no driver nativo. O hook roda sempre, mas sem `animated` ele só
    // sincroniza o valor e o render cai no caminho estático de sempre — os
    // consumidores que não pedem animação não mudam em nada.
    const anim = useRef(new Animated.Value(animated ? 0 : pct)).current;
    useEffect(() => {
      if (!animated) {
        anim.setValue(pct);
        return;
      }
      const run = Animated.timing(anim, {
        toValue: pct,
        duration: animationDurationMs,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      });
      run.start();
      // Parar no cleanup evita animação viva depois da barra sair da tela
      // (menu fechado, lista rolada, navegação).
      return () => run.stop();
    }, [anim, animated, animationDurationMs, pct]);

    const animatedWidth = useMemo(
      () => anim.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }),
      [anim],
    );

    // O gradiente é o mesmo desenho nos três modos; só a altura muda, porque no
    // modo inset o fill estica para preencher o track.
    const gradientNode = (height: number) => (
      <Svg width="100%" height="100%" viewBox={`0 0 100 ${height}`} preserveAspectRatio="none">
        <Defs>
          <SvgLinearGradient
            id={gradientId}
            x1={gradX1}
            y1="0"
            x2={gradX2}
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            {gradient!.map((stopColor, i) => (
              <Stop key={`${stopColor}-${i}`} offset={`${stops[i]}%`} stopColor={stopColor} />
            ))}
          </SvgLinearGradient>
        </Defs>
        <Rect x={0} y={0} width={100} height={height} fill={`url(#${gradientId})`} />
      </Svg>
    );

    // The visible fill — same SVG render in both bordered/non-bordered modes.
    const fillNode = useGradient ? (
      <Animated.View
        style={{
          width: animated ? animatedWidth : `${pct}%`,
          height: FILL_HEIGHT,
          overflow: 'hidden',
        }}
      >
        {gradientNode(FILL_HEIGHT)}
      </Animated.View>
    ) : animated ? (
      // Fill é styled-component e não aceita Animated.Value; quando anima, o
      // equivalente sai inline (mesma altura, mesmo raio, mesmas cores).
      <Animated.View
        style={{
          width: animatedWidth,
          height: FILL_HEIGHT,
          borderRadius: theme.border.radius.pill,
          backgroundColor: color ?? (disabled ? theme.content.medium : theme.content.primary),
        }}
      />
    ) : (
      <Fill
        $disabled={disabled}
        style={{ width: `${pct}%`, ...(color ? { backgroundColor: color } : null) }}
      />
    );

    // Inset mode: track sólido, sem borda, fill embutido `inset` px de cada
    // lado e esticado para a altura restante. Quinas concêntricas: o fill usa
    // trackRadius - inset. Ver ProgressBar.types.ts para o porquê.
    if (inset !== undefined && !bordered) {
      const outerRadius = trackRadius ?? theme.border.radius.pill;
      const { fillHeight, innerRadius } = insetGeometry(trackHeight, inset, outerRadius);
      return (
        <RNView
          ref={ref}
          accessibilityRole="progressbar"
          accessibilityLabel={accessibilityLabel}
          accessibilityState={{ disabled }}
          accessibilityValue={{ min: 0, max: 100, now: pct }}
          testID={testID}
          style={{
            height: trackHeight,
            alignSelf: 'stretch',
            borderRadius: outerRadius,
            backgroundColor:
              trackColor ?? (disabled ? theme.content.disable : theme.surface.secondaryLight),
            padding: inset,
            justifyContent: 'center',
            opacity: disabled ? 0.6 : 1,
            overflow: 'hidden',
          }}
        >
          <Animated.View
            style={{
              width: animated ? animatedWidth : `${pct}%`,
              height: fillHeight,
              borderRadius: innerRadius,
              overflow: 'hidden',
              ...(useGradient
                ? null
                : {
                    backgroundColor:
                      color ?? (disabled ? theme.content.medium : theme.content.primary),
                  }),
            }}
          >
            {useGradient ? gradientNode(fillHeight) : null}
          </Animated.View>
        </RNView>
      );
    }

    // Bordered mode: outer pill frame with border + background, fill inside
    // with symmetric padding. Matches Figma `342:9447`.
    if (bordered) {
      const innerPad = Math.max(0, (trackHeight - FILL_HEIGHT) / 2);
      return (
        <RNView
          ref={ref}
          accessibilityRole="progressbar"
          accessibilityLabel={accessibilityLabel}
          accessibilityState={{ disabled }}
          accessibilityValue={{ min: 0, max: 100, now: pct }}
          testID={testID}
          style={{
            height: trackHeight,
            alignSelf: 'stretch',
            borderRadius: theme.border.radius.pill,
            borderWidth: 1,
            borderColor: theme.content.medium,
            backgroundColor: trackColor ?? theme.background,
            paddingHorizontal: innerPad,
            paddingVertical: innerPad,
            justifyContent: 'center',
            opacity: disabled ? 0.6 : 1,
            overflow: 'hidden',
          }}
        >
          {fillNode}
        </RNView>
      );
    }

    // Default: flat track, fill flush to edges.
    return (
      <Track
        ref={ref}
        $disabled={disabled}
        accessibilityRole="progressbar"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ disabled }}
        accessibilityValue={{ min: 0, max: 100, now: pct }}
        testID={testID}
        style={trackColor ? { backgroundColor: trackColor } : undefined}
      >
        {fillNode}
      </Track>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';
