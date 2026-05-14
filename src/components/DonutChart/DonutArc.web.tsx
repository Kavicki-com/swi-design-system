/**
 * Web DonutArc — plain DOM SVG, skips react-native-svg.
 * See DonutArc.tsx for the native version and why the split exists.
 */
import React, { useId } from 'react';
import type { DonutArcProps } from './DonutChart.types';

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

export const DonutArc = ({
  size,
  strokeWidth,
  progress,
  gradient,
  trackColor,
  appearance = 'bevel',
}: DonutArcProps) => {
  const pct = clamp(progress, 0, 100);
  const cx = size / 2;
  const cy = size / 2;

  const outerR = size / 2;
  const ringBand = strokeWidth * 2;
  const innerR = outerR - ringBand;
  // `flat` mode renders a thinner arc that sits inside the canvas instead of
  // the thick bevel band; we shrink the arc radius slightly so the inner
  // content (icon + value + label) breathes more — matching Figma 159:14140.
  const arcStroke = appearance === 'flat' ? Math.max(2, Math.round(strokeWidth / 2)) : strokeWidth;
  const arcR = outerR - arcStroke;

  const circumference = 2 * Math.PI * arcR;
  const dash = (pct / 100) * circumference;

  const id = useId().replace(/:/g, '');
  const bezelId = `donut-bezel-${id}`;
  const wellId = `donut-well-${id}`;
  const arcId = `donut-arc-${id}`;
  const [arcFrom, arcTo] = gradient;
  const isFlat = appearance === 'flat';

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        {isFlat ? null : (
          <>
            <linearGradient id={bezelId} x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#3a3a3a" />
              <stop offset="55%" stopColor="#1f1f1f" />
              <stop offset="100%" stopColor="#141414" />
            </linearGradient>
            <radialGradient id={wellId} cx="50%" cy="50%" r="55%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#1c1c1c" />
              <stop offset="100%" stopColor="#0c0c0c" />
            </radialGradient>
          </>
        )}
        <linearGradient id={arcId} x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor={arcFrom} />
          <stop offset="100%" stopColor={arcTo} />
        </linearGradient>
      </defs>

      {isFlat ? (
        // Subtle inner "card" fill so the heartbeat + value + label sit on a
        // slightly raised surface against the page bg (Figma 159:14140 well).
        <circle cx={cx} cy={cy} r={arcR - arcStroke / 2} fill="#1a1a1a" />
      ) : (
        <>
          <circle cx={cx} cy={cy} r={outerR} fill={`url(#${bezelId})`} />
          <circle cx={cx} cy={cy} r={innerR} fill={`url(#${wellId})`} />
        </>
      )}

      <circle
        cx={cx}
        cy={cy}
        r={arcR}
        stroke={trackColor}
        strokeWidth={arcStroke}
        fill="transparent"
        opacity={isFlat ? 0.25 : 0.35}
      />

      <g transform={`rotate(-90 ${cx} ${cy})`}>
        <circle
          cx={cx}
          cy={cy}
          r={arcR}
          stroke={`url(#${arcId})`}
          strokeWidth={arcStroke}
          fill="transparent"
          strokeDasharray={`${dash} ${circumference}`}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
