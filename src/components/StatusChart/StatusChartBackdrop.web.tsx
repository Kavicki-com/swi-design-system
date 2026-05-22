/**
 * Web StatusChart backdrop. See StatusChartBackdrop.tsx for layer breakdown.
 */
import React, { useId } from 'react';
import { ELLIPSE_5_DATA_URL } from './ellipse5.data';
import { useTheme } from '../../theme';
import { palette } from './StatusChart.theme';
import { STATUS_CHART_CANVAS, STATUS_GAUGE } from './StatusChart.paths';
import type { StatusChartCondition } from './StatusChart.types';

interface BackdropProps {
  condition: StatusChartCondition;
  width: number;
  height: number;
  progress: number;
  layer?: 'lower' | 'upper';
  /** When true, sets SVG overflow:visible so Caminho 4122 extrapolates. */
  extrapolate?: boolean;
}

const CENTER_X = 180;
const CENTER_Y = 202.64;
const BG_R = 228.357;
const INNER_BG_R = 149.23;
const TRACK_R = 105.502;
const WELL_R = 88.15;

// Ellipse 5 — PNG asset (109×65 natural). Ver StatusChartBackdrop.tsx pro
// reasoning. Posição: top-right do disco.
const ELLIPSE_5_X = 180;
const ELLIPSE_5_Y = 67;
const ELLIPSE_5_W = 109;
const ELLIPSE_5_H = 65;

const SILHOUETTE_X = 141.9;
const SILHOUETTE_Y = 87.47;

const CRESCENT_PATH =
  'M98.2529 0C121.768 2.80411e-07 144.503 8.43341 162.329 23.7686C180.155 39.1039 191.89 60.3238 195.403 83.5747C198.916 106.826 193.974 130.565 181.474 150.482C168.974 170.4 149.745 185.173 127.28 192.12C104.815 199.067 80.603 197.727 59.042 188.342C37.481 178.958 20.0005 162.152 9.77539 140.977C-0.449759 119.802 -2.74147 95.6617 3.31647 72.9407C9.37441 50.2197 23.3802 30.4248 42.7902 17.1509L45.3672 20.9192C26.859 33.5763 13.504 52.4514 7.72752 74.1168C1.95106 95.7821 4.13629 118.801 13.8863 138.992C23.6364 159.183 40.3046 175.208 60.8639 184.157C81.4231 193.105 104.51 194.383 125.931 187.759C147.352 181.135 165.688 167.047 177.607 148.056C189.526 129.064 194.239 106.427 190.889 84.2567C187.54 62.0861 176.35 41.8521 159.352 27.2294C142.354 12.6067 120.675 4.56515 98.2529 4.56515L98.2529 0Z';

const CRESCENT_X = 81.75;
const CRESCENT_Y = STATUS_CHART_CANVAS.height - 72.72 - 196.506;

const PROGRESS_START_DEG = -90;
const PROGRESS_MAX_SWEEP_DEG = 325.6;
const SECTOR_R = 110;

const polar = (cx: number, cy: number, r: number, deg: number) => {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

const sectorPath = (cx: number, cy: number, r: number, startDeg: number, sweepDeg: number) => {
  const sweep = Math.max(sweepDeg, 0.0001);
  const start = polar(cx, cy, r, startDeg);
  const end = polar(cx, cy, r, startDeg + sweep);
  const largeArc = sweep > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
};

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

export const StatusChartBackdrop = ({
  condition,
  width,
  height,
  progress,
  layer = 'upper',
  extrapolate = false,
}: BackdropProps) => {
  const theme = useTheme();
  const p = palette(theme, condition);
  // IDs únicos por instância evitam colisão quando duas StatusChart com
  // mesmo condition+layer co-existem no DOM (ex: dashboard escondido por
  // `display:none` no Expo Router Stack + my-stats visível). Sem `useId()`
  // o browser resolve `url(#...)` pra primeira def, que vive em SVG sem
  // bbox renderizado, deixando a silhueta invisível.
  const uid = useId().replace(/:/g, '');
  const silhouetteGradId = `status-gauge-gradient-${condition}-${layer}-${uid}`;
  const crescentGradId = `status-crescent-gradient-${condition}-${layer}-${uid}`;
  const progressClipId = `status-progress-clip-${condition}-${layer}-${uid}`;
  const innerShadowId = `status-inner-shadow-${layer}-${uid}`;

  const clamped = clamp01(progress);
  const sectorD = sectorPath(
    CENTER_X,
    CENTER_Y,
    SECTOR_R,
    PROGRESS_START_DEG,
    PROGRESS_MAX_SWEEP_DEG * clamped,
  );

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${STATUS_CHART_CANVAS.width} ${STATUS_CHART_CANVAS.height}`}
      pointerEvents="none"
      aria-hidden
      overflow={extrapolate ? 'visible' : undefined}
      style={extrapolate ? { overflow: 'visible' } : undefined}
    >
      <defs>
        <linearGradient
          id={silhouetteGradId}
          x1={38.4836}
          y1={0}
          x2={38.4836}
          y2={262.318}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={p.gradientFrom} />
          <stop offset="1" stopColor={p.gradientTo} />
        </linearGradient>

        <linearGradient
          id={crescentGradId}
          x1={CRESCENT_X + 98.2529}
          y1={CRESCENT_Y}
          x2={CRESCENT_X + 98.2529}
          y2={CRESCENT_Y + 196.506}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={p.gradientFrom} />
          <stop offset="1" stopColor={p.gradientTo} />
        </linearGradient>

        <clipPath id={progressClipId}>
          <path d={sectorD} />
        </clipPath>

        {/* Inner shadow filter — chain restaurada da 0.1.86. */}
        <filter id={innerShadowId} x="-10%" y="-10%" width="120%" height="120%">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.08" />
          <feGaussianBlur stdDeviation="2.08" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9882 0"
          />
          <feBlend mode="normal" in2="shape" result="effect_innerShadow" />
        </filter>
      </defs>

      {layer === 'lower' ? (
        <>
          {!extrapolate ? (
            <circle
              cx={CENTER_X}
              cy={CENTER_Y}
              r={BG_R}
              fill={theme.surface.standard}
              filter={`url(#${innerShadowId})`}
            />
          ) : null}
          <circle
            cx={CENTER_X}
            cy={CENTER_Y}
            r={INNER_BG_R}
            fill={theme.surface.medium}
            filter={`url(#${innerShadowId})`}
          />
        </>
      ) : (
        <>
          <circle
            cx={CENTER_X}
            cy={CENTER_Y}
            r={TRACK_R}
            fill={theme.surface.high}
            filter={`url(#${innerShadowId})`}
          />

          {clamped > 0 ? (
            <g clipPath={`url(#${progressClipId})`}>
              <g transform={`translate(${CRESCENT_X} ${CRESCENT_Y})`}>
                <path d={CRESCENT_PATH} fill={`url(#${crescentGradId})`} />
              </g>
            </g>
          ) : null}

          {/* Ellipse 5 — PNG asset (109×65 natural) embedded direto. */}
          <image
            x={ELLIPSE_5_X}
            y={ELLIPSE_5_Y}
            width={ELLIPSE_5_W}
            height={ELLIPSE_5_H}
            href={ELLIPSE_5_DATA_URL}
            preserveAspectRatio="xMidYMid meet"
          />

          <circle
            cx={CENTER_X}
            cy={CENTER_Y}
            r={WELL_R}
            fill={theme.background}
            filter={`url(#${innerShadowId})`}
          />

          {/* silhouette body — movido pro StatusChart pai via SvgXml. */}
        </>
      )}
    </svg>
  );
};

StatusChartBackdrop.displayName = 'StatusChartBackdrop';
