import React from 'react';
import {
  Image as RNImage,
  Platform,
  Pressable,
  View,
  type ViewStyle,
} from 'react-native';
import { useTheme } from '../../theme';
import { HeartStatus } from '../HeartStatus';
import { Icon } from '../Icon';
import backgroundChartPng from '../../icons/raw/background-chart.png';
import { StatusChartBackdrop } from './StatusChartBackdrop';
import {
  HEART_RATE_BUTTON,
  HEART_STATUS_OFFSET,
  STATUS_CHART_CANVAS,
} from './StatusChart.paths';
import { conditionLabel, palette } from './StatusChart.theme';
import type { StatusChartProps } from './StatusChart.types';

const BG_GRID_WIDTH = 425;
const BG_GRID_HEIGHT = 158;
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

export const StatusChart = ({
  condition = 'good',
  progress = 1,
  onPressHeartRate,
  testID,
  accessibilityLabel,
}: StatusChartProps) => {
  const theme = useTheme();
  const p = palette(theme, condition);

  return (
    <View
      style={{
        width: STATUS_CHART_CANVAS.width,
        height: STATUS_CHART_CANVAS.height,
        backgroundColor: theme.background,
        borderRadius: theme.border.radius.l,
        overflow: 'hidden',
      }}
      testID={testID}
      accessibilityLabel={accessibilityLabel ?? `status chart ${conditionLabel[condition]}`}
      accessibilityRole="image"
    >
      {/* Lower backdrop layers: background-circle + inner-background-circle */}
      <View style={{ position: 'absolute', inset: 0 } as ViewStyle}>
        <StatusChartBackdrop
          layer="lower"
          condition={condition}
          progress={progress}
          width={STATUS_CHART_CANVAS.width}
          height={STATUS_CHART_CANVAS.height}
        />
      </View>

      {/* Dotted-grid background — sits between the inner-bg-circle and the lighter track ring */}
      <RNImage
        source={typeof backgroundChartPng === 'string' ? { uri: backgroundChartPng } : backgroundChartPng}
        style={{
          position: 'absolute',
          top: 0,
          left: BG_GRID_LEFT,
          width: BG_GRID_WIDTH,
          height: BG_GRID_HEIGHT,
          tintColor: p.backgroundTint,
          opacity: 0.45,
        }}
        resizeMode="stretch"
        accessible={false}
      />

      {/* Upper backdrop layers: track ring + crescent + inner well + silhouette */}
      <View style={{ position: 'absolute', inset: 0 } as ViewStyle}>
        <StatusChartBackdrop
          layer="upper"
          condition={condition}
          progress={progress}
          width={STATUS_CHART_CANVAS.width}
          height={STATUS_CHART_CANVAS.height}
        />
      </View>

      {/* Heart-status badge over the chest */}
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

      {/* Heart-rate action button (bottom-right) */}
      <Pressable
        onPress={onPressHeartRate}
        disabled={!onPressHeartRate}
        accessibilityRole="button"
        accessibilityLabel="open heart rate details"
        style={({ pressed }) => [
          {
            position: 'absolute',
            top: HEART_RATE_BUTTON.top,
            right: HEART_RATE_BUTTON.right,
            width: HEART_RATE_BUTTON.size,
            height: HEART_RATE_BUTTON.size,
            borderRadius: HEART_RATE_BUTTON.size / 2,
            backgroundColor: theme.surface.high,
            opacity: pressed ? 0.85 : 1,
          },
          BUTTON_DROP_SHADOW,
        ]}
      >
        {/* button-container — inner darker recessed circle behind the icon. */}
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            top: (HEART_RATE_BUTTON.size - 68.974) / 2,
            left: (HEART_RATE_BUTTON.size - 68.974) / 2,
            width: 68.974,
            height: 68.974,
            borderRadius: 68.974 / 2,
            backgroundColor: theme.surface.medium,
          }}
        />

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

        {/* Settings sub-badge in the top-right corner of the button */}
        <View
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
            color={theme.content.dark}
            accessibilityLabel="settings"
          />
        </View>
      </Pressable>
    </View>
  );
};

StatusChart.displayName = 'StatusChart';
