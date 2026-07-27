/**
 * Native DonutArc — uses react-native-svg.
 * Web build picks DonutArc.web.tsx instead. Same reason as Icon.tsx:
 * react-native-svg's ESM/CJS interop breaks Vite's dev server.
 */
import React from 'react';
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import type { DonutArcProps } from './DonutChart.types';
import { useSvgId } from '../../utils/svgId';

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

  const id = useSvgId('id');
  const arcId = `donut-arc-${id}`;
  const [arcFrom, arcTo] = gradient;
  const isFlat = appearance === 'flat';

  // Figma tokens — confirmed by the user against the SWI Figma library:
  //   surface/standard = neutral/800 = #1F1F1F  (outer bezel ring where the
  //                                              progress arc lives)
  //   background       = neutral/900 = #171717  (inner well, matches page bg)
  // Two flat fills replace the previous 3-stop / 2-stop gradients; the subtle
  // contrast between #1F1F1F and #171717 (one neutral step apart) gives the
  // raised-ring illusion without needing gradient stops.
  const BEZEL_FILL = '#1F1F1F';
  const WELL_FILL = '#171717';

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Defs>
        <LinearGradient id={arcId} x1="0.5" y1="0" x2="0.5" y2="1">
          <Stop offset="0" stopColor={arcFrom} stopOpacity="1" />
          <Stop offset="1" stopColor={arcTo} stopOpacity="1" />
        </LinearGradient>
      </Defs>

      {isFlat ? (
        <Circle cx={cx} cy={cy} r={arcR - arcStroke / 2} fill="#1a1a1a" />
      ) : (
        <>
          <Circle cx={cx} cy={cy} r={outerR} fill={BEZEL_FILL} />
          <Circle cx={cx} cy={cy} r={innerR} fill={WELL_FILL} />
        </>
      )}

      <Circle
        cx={cx}
        cy={cy}
        r={arcR}
        stroke={trackColor}
        strokeWidth={arcStroke}
        fill="transparent"
        opacity={isFlat ? 0.25 : 0.35}
      />

      <G transform={`rotate(-90 ${cx} ${cy})`}>
        <Circle
          cx={cx}
          cy={cy}
          r={arcR}
          stroke={`url(#${arcId})`}
          strokeWidth={arcStroke}
          fill="transparent"
          strokeDasharray={`${dash} ${circumference}`}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
