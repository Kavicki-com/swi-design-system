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
  // Figma 364:16900 mostra arc visível ~3.5px wide dentro do band escuro
  // 19.5px wide → ratio ≈ 1/5. Aproximamos com stroke/3 (~3-4px small/default),
  // visualmente fiel. Flat appearance mantém o cálculo anterior.
  const arcStroke = appearance === 'flat'
    ? Math.max(2, Math.round(strokeWidth / 2))
    : Math.max(3, Math.round(strokeWidth / 3));
  // Centerline da arc no meio do bezel band (Figma centra o gradient em
  // r=68 dentro do band r=58.5-78). Antes usávamos `outerR - arcStroke`,
  // colocando a arc na borda externa — o usuário detectou em 2026-05-18.
  // Flat mode mantém comportamento legado (arc próxima da borda externa).
  const arcR = appearance === 'flat' ? outerR - arcStroke : outerR - ringBand / 2;

  const circumference = 2 * Math.PI * arcR;
  const dash = (pct / 100) * circumference;

  const id = useId().replace(/:/g, '');
  const arcId = `donut-arc-${id}`;
  const [arcFrom, arcTo] = gradient;
  const isFlat = appearance === 'flat';

  // Figma tokens — confirmed by the user against the SWI Figma library:
  //   surface/standard = neutral/800 = #1F1F1F  (outer bezel ring where the
  //                                              progress arc lives)
  //   background       = neutral/900 = #171717  (inner well, matches page bg)
  // Two flat fills give the raised-ring illusion without gradient stops.
  // SVG inner-shadow attempts (both full dual and tight single) read worse
  // than the plain two-circle approach at this render scale — kept flat per
  // user feedback. LocationButton still receives its Figma inset shadow via
  // the consumer's CSS escape hatch (see DonutChart.styles.ts).
  const BEZEL_FILL = '#1F1F1F';
  const WELL_FILL = '#171717';

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
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
          <circle cx={cx} cy={cy} r={outerR} fill={BEZEL_FILL} />
          <circle cx={cx} cy={cy} r={innerR} fill={WELL_FILL} />
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
