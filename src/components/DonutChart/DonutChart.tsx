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
      size = 'default',
      onLocationPress,
      locationIcon = 'location_on',
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    const dims = DIMS[size];
    const arcTrackColor = trackColor ?? theme.surface.medium;
    const contentColor = iconColor ?? theme.content.dark;

    return (
      <Container
        ref={ref}
        accessibilityLabel={accessibilityLabel ?? `${title}: ${value} ${label} - ${caption ?? ''}`}
        testID={testID}
      >
        <TitleText $size={dims.titleSize}>{title}</TitleText>

        <DonutWrapper $size={dims.outer}>
          <ArcSlot>
            <DonutArc
              size={dims.outer}
              strokeWidth={dims.stroke}
              progress={progress}
              gradient={progressGradient}
              trackColor={arcTrackColor}
            />
          </ArcSlot>

          <Center>
            <Icon
              name={icon}
              width={dims.iconWidth}
              height={dims.iconHeight}
              color={contentColor}
            />
            <ValueText $size={dims.valueSize}>{value}</ValueText>
            <LabelText>{label}</LabelText>
          </Center>

          {onLocationPress ? (
            <LocationButton
              $size={dims.locationButton}
              onPress={onLocationPress}
              accessibilityRole="button"
              accessibilityLabel="Open location"
            >
              <Icon name={locationIcon} size={20} color={contentColor} />
            </LocationButton>
          ) : null}
        </DonutWrapper>

        {caption ? <Caption>{caption}</Caption> : null}
      </Container>
    );
  },
);

DonutChart.displayName = 'DonutChart';
