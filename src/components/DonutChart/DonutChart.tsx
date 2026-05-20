import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Icon } from '../Icon';
import { primitive } from '../../tokens';
import { useTheme } from '../../theme';
import { DonutArc } from './DonutArc';
import {
  ArcSlot,
  Caption,
  Center,
  Container,
  DIMS,
  DonutWrapper,
  LabelText,
  LocationButton,
  TitleText,
  ValueText,
} from './DonutChart.styles';
import type {
  DonutChartProps,
  DonutGradient,
} from './DonutChart.types';

const DEFAULT_GRADIENT: DonutGradient = [primitive.green[200], primitive.green[300]];

export const DonutChart = forwardRef<View, DonutChartProps>(
  (
    {
      title,
      value,
      label,
      caption,
      progress,
      progressGradient = DEFAULT_GRADIENT,
      trackColor,
      icon = 'vital_signs',
      iconColor,
      iconGradient,
      size = 'default',
      appearance = 'bevel',
      titleAlign,
      iconWidth,
      iconHeight,
      labelSize,
      labelWeight,
      onLocationPress,
      locationIcon = 'location_on_filled',
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    const dims = DIMS[size];
    const arcTrackColor = trackColor ?? theme.surface.medium;
    const contentColor = iconColor ?? theme.content.dark;
    const resolvedIconWidth = iconWidth ?? dims.iconWidth;
    const resolvedIconHeight = iconHeight ?? dims.iconHeight;

    return (
      <Container
        ref={ref}
        accessibilityLabel={accessibilityLabel ?? `${title}: ${value} ${label} - ${caption ?? ''}`}
        testID={testID}
      >
        <TitleText $size={dims.titleSize} $align={titleAlign} numberOfLines={1}>{title}</TitleText>

        <DonutWrapper $size={dims.outer}>
          {/* LocationButton rendered FIRST so its bg + icon paint behind
              the arc + center. Only the top-right corner of the round bg
              shows outside the donut's circular arc (matches Figma). */}
          {onLocationPress ? (
            <LocationButton
              $size={dims.locationButton}
              onPress={onLocationPress}
              accessibilityRole="button"
              accessibilityLabel="Open location"
              // dataSet is RN-Web specific (becomes data-* attrs on the DOM);
              // styled(Pressable) drops it from the public type so we cast.
              {...({ dataSet: { donutLocBtn: 'true' } } as Record<string, unknown>)}
            >
              {/* Location pin stays content.dark (white) regardless of the
                 heartbeat iconColor — Figma 43:2131 spec. */}
              <Icon name={locationIcon} size={20} color={theme.content.dark} />
            </LocationButton>
          ) : null}

          <ArcSlot>
            <DonutArc
              size={dims.outer}
              strokeWidth={dims.stroke}
              progress={progress}
              gradient={progressGradient}
              trackColor={arcTrackColor}
              appearance={appearance}
            />
          </ArcSlot>

          <Center>
            <Icon
              name={icon}
              width={resolvedIconWidth}
              height={resolvedIconHeight}
              color={contentColor}
              gradient={iconGradient}
            />
            <ValueText $size={dims.valueSize}>{value}</ValueText>
            <LabelText $size={labelSize} $weight={labelWeight}>{label}</LabelText>
          </Center>
        </DonutWrapper>

        {caption ? <Caption>{caption}</Caption> : null}
      </Container>
    );
  },
);

DonutChart.displayName = 'DonutChart';
