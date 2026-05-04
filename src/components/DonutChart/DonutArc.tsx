/**
 * Native DonutArc — uses react-native-svg.
 * Web build picks DonutArc.web.tsx instead. Same reason as Icon.tsx:
 * react-native-svg's ESM/CJS interop breaks Vite's dev server.
 */
import React, { useId } from 'react';
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  RadialGradient,
  Stop,
} from 'react-native-svg';
import type { DonutArcProps } from './DonutChart.types';

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

export const DonutArc = ({
  size,
  strokeWidth,
  progress,
  gradient,
  trackColor,
}: DonutArcProps) => {
  const pct = clamp(progress, 0, 100);
  const cx = size / 2;
  const cy = size / 2;

  const outerR = size / 2;
  const ringBand = strokeWidth * 2;
  const innerR = outerR - ringBand;
  const arcR = outerR - strokeWidth;

  const circumference = 2 * Math.PI * arcR;
  const dash = (pct / 100) * circumference;

  const id = useId().replace(/:/g, '');
  const bezelId = `donut-bezel-${id}`;
  const wellId = `donut-well-${id}`;
  const arcId = `donut-arc-${id}`;
  const [arcFrom, arcTo] = gradient;

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Defs>
        <LinearGradient id={bezelId} x1="0.5" y1="0" x2="0.5" y2="1">
          <Stop offset="0" stopColor="#3a3a3a" stopOpacity="1" />
          <Stop offset="0.55" stopColor="#1f1f1f" stopOpacity="1" />
          <Stop offset="1" stopColor="#141414" stopOpacity="1" />
        </LinearGradient>
        <RadialGradient id={wellId} cx="0.5" cy="0.5" rx="0.55" ry="0.55" fx="0.5" fy="0.5">
          <Stop offset="0" stopColor="#1c1c1c" stopOpacity="1" />
          <Stop offset="1" stopColor="#0c0c0c" stopOpacity="1" />
        </RadialGradient>
        <LinearGradient id={arcId} x1="0.5" y1="0" x2="0.5" y2="1">
          <Stop offset="0" stopColor={arcFrom} stopOpacity="1" />
          <Stop offset="1" stopColor={arcTo} stopOpacity="1" />
        </LinearGradient>
      </Defs>

      <Circle cx={cx} cy={cy} r={outerR} fill={`url(#${bezelId})`} />
      <Circle cx={cx} cy={cy} r={innerR} fill={`url(#${wellId})`} />

      <Circle
        cx={cx}
        cy={cy}
        r={arcR}
        stroke={trackColor}
        strokeWidth={strokeWidth}
        fill="transparent"
        opacity={0.35}
      />

      <G transform={`rotate(-90 ${cx} ${cy})`}>
        <Circle
          cx={cx}
          cy={cy}
          r={arcR}
          stroke={`url(#${arcId})`}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${dash} ${circumference}`}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
