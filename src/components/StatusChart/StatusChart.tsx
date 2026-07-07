import React, { useMemo } from 'react';
import {
  Image as RNImage,
  Platform,
  Pressable,
  View,
  type ViewStyle,
} from 'react-native';
import Svg, {
  Circle,
  Defs,
  FeBlend,
  FeColorMatrix,
  FeComposite,
  FeFlood,
  FeGaussianBlur,
  FeOffset,
  Filter,
  SvgXml,
} from 'react-native-svg';
import { useTheme } from '../../theme';
import { BackgroundDotsGrid } from '../BackgroundDotsGrid';
import { HeartStatus } from '../HeartStatus';
import { Icon } from '../Icon';
import { StatusChartBackdrop } from './StatusChartBackdrop';
import {
  HEART_RATE_BUTTON,
  HEART_STATUS_OFFSET,
  silhouetteBodyXml,
  STATUS_CHART_CANVAS,
} from './StatusChart.paths';
import { conditionLabel, palette } from './StatusChart.theme';
import type { StatusChartProps } from './StatusChart.types';

const BG_GRID_WIDTH = 425;
// Dots grid estendido verticalmente pra cobrir o Caminho 4122 extrapolado.
// Natural Figma: 13 linhas em 157.829px (`245:23280`). Pra cobrir do topo
// extrapolado (y=-75) até a linha do ombro (y≈158), precisa altura ≈233.
// Adicionamos linhas (não escala dots) via prop `rows={20}` na grid:
// 13 naturais + 7 extras (r=1.64, spacing=14.32) → altura intrínseca ≈258.07.
const BG_GRID_ROWS = 20;
const BG_GRID_HEIGHT = 258.069; // 156.189 + 7×14.32 + 1.64
const BG_GRID_LEFT = (STATUS_CHART_CANVAS.width - BG_GRID_WIDTH) / 2;

const SETTINGS_BADGE = {
  size: 31.392, // 23.544 icon + 2 × 3.924 padding
  iconSize: 23.544,
  padding: 3.924,
};

const ACTIVITY_ICON = {
  width: 36.027,
  height: 32.855,
  left: 26.86,
  top: 28.59,
};

// Heart-rate button drop shadow — Figma: 0px 2.178px 2.178px rgba(0,0,0,0.16).
const BUTTON_DROP_SHADOW = Platform.select<ViewStyle>({
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2.178 },
    shadowRadius: 2.178,
    shadowOpacity: 0.16,
  },
  android: { elevation: 3 },
  web: ({ boxShadow: '0px 2.178px 2.178px rgba(0,0,0,0.16)' } as unknown as ViewStyle),
  default: {},
}) as ViewStyle;

// Heart-rate button inset shadow — web only (RN doesn't support inset).
const BUTTON_INSET_SHADOW: ViewStyle | undefined = Platform.OS === 'web'
  ? ({ boxShadow: 'inset 0px 2.178px 4.356px rgba(0,0,0,0.59)' } as unknown as ViewStyle)
  : undefined;

// Button-container (Elipse 34) drop shadow — Figma `295:2178`:
// 0px 2.18px 4.36px rgba(0,0,0,0.1608). Soft outer shadow around the inner
// recessed circle (different params than the outer Pressable shadow).
const BUTTON_CONTAINER_SIZE = 68.974;
const BUTTON_CONTAINER_R = BUTTON_CONTAINER_SIZE / 2;
const BUTTON_CONTAINER_DROP_SHADOW = Platform.select<ViewStyle>({
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2.18 },
    shadowRadius: 4.36,
    shadowOpacity: 0.1608,
  },
  android: { elevation: 2 },
  web: ({ boxShadow: '0px 2.18px 4.36px rgba(0,0,0,0.1608)' } as unknown as ViewStyle),
  default: {},
}) as ViewStyle;

// Compact preset scale factor: 289.733 / 360 = 0.80481 (Figma 342:9420).
const COMPACT_SCALE = 289.733 / STATUS_CHART_CANVAS.width;

export const StatusChart = ({
  condition = 'good',
  progress = 1,
  size = 'default',
  showActionButton = true,
  renderHeartStatus = true,
  onPressHeartRate,
  onPressSettings,
  extrapolate = false,
  discDiameter = 456.714,
  testID,
  accessibilityLabel,
}: StatusChartProps) => {
  const theme = useTheme();
  const p = palette(theme, condition);
  // Silhueta por condição (variantes Figma 304:2356): mesmo XML, só os stops
  // do gradient trocam — good preserva byte a byte o raw Caminho 4123.svg
  // (palette good = #3EAB2E→#B7E9A4). Memoizado pra não re-parsear o SVG a
  // cada render do chart.
  const silhouetteXml = useMemo(
    () => silhouetteBodyXml(p.gradientFrom, p.gradientTo),
    [p.gradientFrom, p.gradientTo],
  );

  const scale = size === 'compact' ? COMPACT_SCALE : 1;
  const outerW = STATUS_CHART_CANVAS.width * scale;
  const outerH = STATUS_CHART_CANVAS.height * scale;

  const chartBody = (
    <View
      style={{
        width: STATUS_CHART_CANVAS.width,
        height: STATUS_CHART_CANVAS.height,
        // extrapolate=true: backgroundColor transparent + overflow visible
        // permite o Caminho 4122 (background-circle 456.714 dia) sangrar pra
        // fora do canvas 360×374 conforme Figma data (top -25.7, bottom +57,
        // sides ±48). Default false preserva comportamento card-like com
        // background + rounded corners (back-compat).
        backgroundColor: extrapolate ? 'transparent' : theme.background,
        borderRadius: extrapolate ? 0 : theme.border.radius.l,
        overflow: extrapolate ? 'visible' : 'hidden',
      }}
      testID={testID}
      accessibilityLabel={accessibilityLabel ?? `status chart ${conditionLabel[condition]}`}
      accessibilityRole="image"
    >
      {/* Extrapolating disc (Caminho 4122) — rendered como View nativa quando
          extrapolate=true. Tamanho controlado por discDiameter (default 456.714
          Figma spec). View com borderRadius bypassa o viewBox clipping do SVG.
          SVG overlay dentro renderiza inner shadow (Figma spec X=0 Y=2.08
          blur=4.16 #000 98.82%) via mesmo filter chain do StatusChartBackdrop. */}
      {extrapolate ? (
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            width: discDiameter,
            height: discDiameter,
            borderRadius: discDiameter / 2,
            left: STATUS_CHART_CANVAS.width / 2 - discDiameter / 2,
            top: 202.64 - discDiameter / 2,
            overflow: 'hidden',
          }}
        >
          <Svg width={discDiameter} height={discDiameter}>
            <Defs>
              <Filter
                id="caminho4122-inner-shadow"
                x="-10%"
                y="-10%"
                width="120%"
                height="120%"
              >
                <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <FeColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <FeOffset dy="2.08" />
                <FeGaussianBlur stdDeviation="2.08" />
                <FeComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                <FeColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9882 0"
                />
                <FeBlend mode="normal" in2="shape" result="effect_innerShadow" />
              </Filter>
            </Defs>
            <Circle
              cx={discDiameter / 2}
              cy={discDiameter / 2}
              r={discDiameter / 2}
              fill={theme.surface.standard}
              filter="url(#caminho4122-inner-shadow)"
            />
          </Svg>
        </View>
      ) : null}

      {/* Lower backdrop layers: background-circle + inner-background-circle.
          Quando extrapolate=true, o background-circle (Caminho 4122) já foi
          renderizado como View acima — StatusChartBackdrop pula esse layer. */}
      <View style={{ position: 'absolute', inset: 0 } as ViewStyle}>
        <StatusChartBackdrop
          layer="lower"
          condition={condition}
          progress={progress}
          width={STATUS_CHART_CANVAS.width}
          height={STATUS_CHART_CANVAS.height}
          extrapolate={extrapolate}
        />
      </View>

      {/* Dotted-grid background — UMA única instância estendida verticalmente
          pra cobrir do topo do Caminho 4122 extrapolado (y=-75) até a linha
          do ombro da silhueta (y≈158). Usa prop `rows` pra adicionar linhas
          sem distorcer dots — 13 naturais (Figma `245:23280`) + 7 extras
          continuando o fade do fundo. Z-order: dots aparecem SOBRE Caminho
          4122 e Elipse 98, mas FICAM ATRÁS de Elipse 99/100, crescent,
          Ellipse 5, silhouette e badges. */}
      <BackgroundDotsGrid
        color={p.backgroundTint}
        rows={BG_GRID_ROWS}
        style={{
          position: 'absolute',
          top: -75,
          left: BG_GRID_LEFT,
          width: BG_GRID_WIDTH,
          height: BG_GRID_HEIGHT,
        }}
      />

      {/* Upper backdrop layers: track ring + crescent + inner well + silhouette */}
      <View style={{ position: 'absolute', inset: 0 } as ViewStyle}>
        <StatusChartBackdrop
          layer="upper"
          condition={condition}
          progress={progress}
          width={STATUS_CHART_CANVAS.width}
          height={STATUS_CHART_CANVAS.height}
          extrapolate={extrapolate}
        />
      </View>

      {/* Silhouette body — Caminho 4123.svg embedded via SvgXml.
          Posicionado absolute em SILHOUETTE_X=141.9, SILHOUETTE_Y=87.47.
          Dimensões 76.967 × 262.318 (canvas natural do SVG).
          Renderizado FORA do StatusChartBackdrop pra evitar problemas de
          interação entre gradient userSpaceOnUse e path transform em RN-SVG
          iOS. No `good`, match exato com my-stats SILHOUETTE_BODY_SVG;
          alert/low trocam os stops via palette (Figma 304:2356). */}
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          left: 141.9,
          top: 87.47,
          width: 76.967,
          height: 262.318,
        }}
      >
        <SvgXml xml={silhouetteXml} width="100%" height="100%" />
      </View>

      {/* Heart-status badge over the chest. Skipped when consumer passes
          `renderHeartStatus={false}` — the consumer is then expected to
          render `<HeartStatus>` manually after any post-silhouette overlay
          (e.g. mix-blend-mode:multiply) using HEART_STATUS_OFFSET. */}
      {renderHeartStatus ? (
        <View
          style={{
            position: 'absolute',
            left: HEART_STATUS_OFFSET.left,
            top: HEART_STATUS_OFFSET.top,
          }}
          pointerEvents="none"
        >
          <HeartStatus condition={p.heartStatus} size={HEART_STATUS_OFFSET.height} />
        </View>
      ) : null}

      {/* Heart-rate action button (bottom-right) — Figma `245:23280`.
          Hidden on the my-stats compact variant where the design omits both
          the button and its settings sub-badge (Figma `342:9420`). */}
      {showActionButton ? (
      <Pressable
        onPress={onPressHeartRate}
        disabled={!onPressHeartRate}
        accessibilityRole="button"
        accessibilityLabel="open heart rate details"
        // Press feedback intentionally OMITTED: the previous `opacity: pressed ? 0.85 : 1`
        // applied to the whole Pressable also faded the dark Elipse 34 recessed circle
        // and the inner-shadow SVG, producing a glitchy "transparent flash" on tap.
        // Keeping the visual stable; we can re-introduce a scoped feedback (e.g. icon-only
        // opacity or 0.98 scale) if product wants tactile feedback.
        style={{
          position: 'absolute',
          top: HEART_RATE_BUTTON.top,
          right: HEART_RATE_BUTTON.right,
          width: HEART_RATE_BUTTON.size,
          height: HEART_RATE_BUTTON.size,
          borderRadius: HEART_RATE_BUTTON.size / 2,
          backgroundColor: theme.surface.high,
          ...BUTTON_DROP_SHADOW,
        }}
      >
        {/* button-container (Elipse 34) — inner recessed circle behind the
            icon. Figma `295:2178`: bg surface.standard (#1F1F1F), drop shadow
            (0/2.18/4.36 #000 16.08%) + inner shadow (0/2.18/4.36 #000 63.14%).
            View handles bg + drop shadow nativamente; SVG overlay desenha o
            inner shadow via filter chain (Fe* primitives) sem afetar layout. */}
        <View
          pointerEvents="none"
          style={[
            {
              position: 'absolute',
              top: (HEART_RATE_BUTTON.size - BUTTON_CONTAINER_SIZE) / 2,
              left: (HEART_RATE_BUTTON.size - BUTTON_CONTAINER_SIZE) / 2,
              width: BUTTON_CONTAINER_SIZE,
              height: BUTTON_CONTAINER_SIZE,
              borderRadius: BUTTON_CONTAINER_R,
              backgroundColor: theme.surface.standard,
            },
            BUTTON_CONTAINER_DROP_SHADOW,
          ]}
        >
          <Svg
            width={BUTTON_CONTAINER_SIZE}
            height={BUTTON_CONTAINER_SIZE}
            pointerEvents="none"
          >
            <Defs>
              <Filter
                id="elipse34-inner-shadow"
                x="-10%"
                y="-10%"
                width="120%"
                height="120%"
              >
                <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                <FeBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <FeColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <FeOffset dy="2.18" />
                <FeGaussianBlur stdDeviation="2.18" />
                <FeComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                <FeColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6314 0"
                />
                <FeBlend mode="normal" in2="shape" result="effect_innerShadow" />
              </Filter>
            </Defs>
            <Circle
              cx={BUTTON_CONTAINER_R}
              cy={BUTTON_CONTAINER_R}
              r={BUTTON_CONTAINER_R}
              fill={theme.surface.standard}
              filter="url(#elipse34-inner-shadow)"
            />
          </Svg>
        </View>

        {/* Inner glossy shadow — Figma: inset 0px 2.178px 4.356px rgba(0,0,0,0.59). */}
        {BUTTON_INSET_SHADOW ? (
          <View
            pointerEvents="none"
            style={[
              {
                position: 'absolute',
                inset: 0,
                borderRadius: HEART_RATE_BUTTON.size / 2,
              } as ViewStyle,
              BUTTON_INSET_SHADOW,
            ]}
          />
        ) : null}

        <View
          style={{
            position: 'absolute',
            left: ACTIVITY_ICON.left,
            top: ACTIVITY_ICON.top,
            width: ACTIVITY_ICON.width,
            height: ACTIVITY_ICON.height,
          }}
        >
          <Icon
            name="health_activity"
            width={ACTIVITY_ICON.width}
            height={ACTIVITY_ICON.height}
            color={p.accent}
            accessibilityLabel="heart rate"
          />
        </View>

        {/* Settings sub-badge — own Pressable so taps don't propagate to the
            parent heart-rate button. When `onPressSettings` is omitted, the
            badge remains visible but the press is a silent no-op (no disabled
            visual). Positioned absolute top-right; its hit-area sits OUTSIDE
            the activity icon's hit-area, so the two targets don't fight. */}
        <Pressable
          onPress={onPressSettings}
          disabled={!onPressSettings}
          accessibilityRole="button"
          accessibilityLabel="open settings"
          hitSlop={4}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: SETTINGS_BADGE.size,
            height: SETTINGS_BADGE.size,
            borderRadius: SETTINGS_BADGE.size / 2,
            backgroundColor: theme.surface.medium,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            name="settings"
            size={SETTINGS_BADGE.iconSize}
            color={theme.content.primary}
            accessibilityLabel="settings"
          />
        </Pressable>
      </Pressable>
      ) : null}
    </View>
  );

  if (scale === 1) return chartBody;

  // Compact preset: outer box sized to scaled dimensions, inner 360×374
  // chart body shrunk via transform with top-left origin so the visible
  // footprint exactly matches the Figma 342:9420 compact canvas.
  //
  // transformOrigin '0 0' (numeric, no unit) é silenciosamente ignorado pela
  // CSS parser do RN-web em 0.19 e cai pro default 'center center', clipando
  // a silhueta. 'top left' (CSS keyword) é parseado em ambas as plataformas.
  return (
    <View style={{ width: outerW, height: outerH, overflow: 'hidden' }}>
      <View
        style={
          {
            width: STATUS_CHART_CANVAS.width,
            height: STATUS_CHART_CANVAS.height,
            transform: [{ scale }],
            transformOrigin: 'top left',
          } as unknown as ViewStyle
        }
      >
        {chartBody}
      </View>
    </View>
  );
};

StatusChart.displayName = 'StatusChart';
