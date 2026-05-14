/**
 * Native StatusChart backdrop (RN — iOS/Android).
 *
 * Layer mapping (back-to-front), each pulled from the actual Figma exports
 * in `./references/` (sibling folder; reference SVGs only, not consumed at
 * runtime — this component recreates each layer via react-native-svg
 * primitives so the geometry stays in code with `useTheme()`):
 *   1. background-circle        — 456.714 dia filled #1F1F1F
 *   2. inner-background-circle  — 298.46 dia filled #222
 *   3. (background-chart PNG    — rendered as a separate Image overlay
 *      between this backdrop and the next one for correct z-order)
 *   4. status-bar-background    — 211.005 dia filled #303030 (the visible
 *      LIGHTER ring track that the crescent sits on)
 *   5. status-condition-bar     — actual path; partial crescent w/ vertical
 *      gradient. mix-blend-lighten on dark surfaces approximated by direct
 *      paint (the gradient itself is bright enough to read as a glow).
 *   6. innner-background        — 176.3 dia filled #171717 (deepest well)
 *   7. silhouettes-overlay      — body gradient (kept untouched)
 *
 * Web build picks StatusChartBackdrop.web.tsx instead.
 */
import React from 'react';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';
import { useTheme } from '../../theme';
import { palette } from './StatusChart.theme';
import { STATUS_CHART_CANVAS, STATUS_GAUGE } from './StatusChart.paths';
import type { StatusChartCondition } from './StatusChart.types';

interface BackdropProps {
  condition: StatusChartCondition;
  width: number;
  height: number;
  /** Status-condition-bar fill, in [0, 1]. */
  progress: number;
  /** When true, only renders the lower layers (background-circle, inner-bg).
   * Used so the dotted-bars PNG can sit between the lower and upper passes. */
  layer?: 'lower' | 'upper';
}

const CENTER_X = 180;
const CENTER_Y = 202.64;

const BG_R = 228.357; // background-circle (456.714 / 2)
const INNER_BG_R = 149.23; // inner-background-circle (298.46 / 2)
const TRACK_R = 105.502; // status-bar-background (211.005 / 2)
const WELL_R = 88.15; // innner-background (176.3 / 2)

// Silhouette placement (unchanged).
const SILHOUETTE_X = 141.9;
const SILHOUETTE_Y = 87.47;

// status-condition-bar path data (from the actual SVG, 197×197 viewBox).
// It encodes the partial crescent shape with its own outer + inner arcs.
const CRESCENT_PATH =
  'M98.2529 0C121.768 2.80411e-07 144.503 8.43341 162.329 23.7686C180.155 39.1039 191.89 60.3238 195.403 83.5747C198.916 106.826 193.974 130.565 181.474 150.482C168.974 170.4 149.745 185.173 127.28 192.12C104.815 199.067 80.603 197.727 59.042 188.342C37.481 178.958 20.0005 162.152 9.77539 140.977C-0.449759 119.802 -2.74147 95.6617 3.31647 72.9407C9.37441 50.2197 23.3802 30.4248 42.7902 17.1509L45.3672 20.9192C26.859 33.5763 13.504 52.4514 7.72752 74.1168C1.95106 95.7821 4.13629 118.801 13.8863 138.992C23.6364 159.183 40.3046 175.208 60.8639 184.157C81.4231 193.105 104.51 194.383 125.931 187.759C147.352 181.135 165.688 167.047 177.607 148.056C189.526 129.064 194.239 106.427 190.889 84.2567C187.54 62.0861 176.35 41.8521 159.352 27.2294C142.354 12.6067 120.675 4.56515 98.2529 4.56515L98.2529 0Z';

// status-condition-bar position in the canvas (Figma: bottom 72.72, left 81.75, size 196.506).
const CRESCENT_X = 81.75;
const CRESCENT_Y = STATUS_CHART_CANVAS.height - 72.72 - 196.506; // = 104.774

// Crescent geometry: starts at 12 o'clock and sweeps clockwise to ~11 o'clock,
// matching the original SVG path's outer arc length (~325.6°). This is the
// visible range when progress = 1.
const PROGRESS_START_DEG = -90;
const PROGRESS_MAX_SWEEP_DEG = 325.6;
// Sector radius — large enough to cover the crescent (outer ~98.25, inner ~93.7)
// without clipping its outer edge.
const SECTOR_R = 110;

const polar = (cx: number, cy: number, r: number, deg: number) => {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

/** Build a pie-sector path centered at (cx, cy) sweeping clockwise. */
const sectorPath = (cx: number, cy: number, r: number, startDeg: number, sweepDeg: number) => {
  // Clamp to a tiny epsilon so we always emit a valid path; consumers should
  // skip rendering when progress is effectively zero.
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
}: BackdropProps) => {
  const theme = useTheme();
  const p = palette(theme, condition);
  const silhouetteGradId = `status-gauge-gradient-${condition}-${layer}`;
  const crescentGradId = `status-crescent-gradient-${condition}-${layer}`;
  const progressClipId = `status-progress-clip-${condition}-${layer}`;

  const clamped = clamp01(progress);
  const sectorD = sectorPath(
    CENTER_X,
    CENTER_Y,
    SECTOR_R,
    PROGRESS_START_DEG,
    PROGRESS_MAX_SWEEP_DEG * clamped,
  );

  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${STATUS_CHART_CANVAS.width} ${STATUS_CHART_CANVAS.height}`}
      pointerEvents="none"
    >
      <Defs>
        <LinearGradient id={silhouetteGradId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={p.gradientFrom} />
          <Stop offset="1" stopColor={p.gradientTo} />
        </LinearGradient>

        <LinearGradient
          id={crescentGradId}
          x1={CRESCENT_X + 98.2529}
          y1={CRESCENT_Y}
          x2={CRESCENT_X + 98.2529}
          y2={CRESCENT_Y + 196.506}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor={p.gradientFrom} />
          <Stop offset="1" stopColor={p.gradientTo} />
        </LinearGradient>

        <ClipPath id={progressClipId}>
          <Path d={sectorD} />
        </ClipPath>
      </Defs>

      {layer === 'lower' ? (
        <>
          {/* 1. background-circle — outer dark disk. */}
          <Circle cx={CENTER_X} cy={CENTER_Y} r={BG_R} fill={theme.surface.standard} />
          {/* 2. inner-background-circle — slightly lighter inner disk. */}
          <Circle cx={CENTER_X} cy={CENTER_Y} r={INNER_BG_R} fill={theme.surface.medium} />
        </>
      ) : (
        <>
          {/* 4. status-bar-background — LIGHTER ring (the visible track the crescent sits on). */}
          <Circle cx={CENTER_X} cy={CENTER_Y} r={TRACK_R} fill={theme.surface.high} />

          {/* 5. status-condition-bar — colored crescent, clipped by progress sector. */}
          {clamped > 0 ? (
            <G clipPath={`url(#${progressClipId})`}>
              <G transform={`translate(${CRESCENT_X} ${CRESCENT_Y})`}>
                <Path d={CRESCENT_PATH} fill={`url(#${crescentGradId})`} />
              </G>
            </G>
          ) : null}

          {/* 6. innner-background — deep darkest inner well. */}
          <Circle cx={CENTER_X} cy={CENTER_Y} r={WELL_R} fill={theme.background} />

          {/* 7. silhouette body. */}
          <Path
            d={STATUS_GAUGE.d}
            fill={`url(#${silhouetteGradId})`}
            fillRule="evenodd"
            transform={`translate(${SILHOUETTE_X} ${SILHOUETTE_Y})`}
          />
        </>
      )}
    </Svg>
  );
};

StatusChartBackdrop.displayName = 'StatusChartBackdrop';
