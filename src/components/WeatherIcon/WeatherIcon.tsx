import React from 'react';
import { Image as RNImage, View } from 'react-native';
import sunnyPng from '../../icons/raw/sunny.png';
import rainyPng from '../../icons/raw/rainy.png';
import cloudlyPng from '../../icons/raw/cloudly.png';
import clearNightPng from '../../icons/raw/clear-night.png';
import rainyNightPng from '../../icons/raw/rainy-night.png';
import cloudlyNightPng from '../../icons/raw/cloudly-night.png';
import type {
  WeatherCondition,
  WeatherIconProps,
  WeatherIconSize,
} from './WeatherIcon.types';

const SIZE_MAP: Record<WeatherIconSize, number> = {
  s: 32,
  m: 48,
  l: 64,
};

const SOURCE_BY_CONDITION: Record<WeatherCondition, number | string> = {
  sunny: sunnyPng,
  rainy: rainyPng,
  'partly-cloudy': cloudlyPng,
};

const NIGHT_SOURCE_BY_CONDITION: Record<WeatherCondition, number | string> = {
  sunny: clearNightPng,
  rainy: rainyNightPng,
  'partly-cloudy': cloudlyNightPng,
};

export const WeatherIcon = ({
  condition,
  isNight = false,
  size = 'm',
  testID,
  accessibilityLabel,
}: WeatherIconProps) => {
  const px = SIZE_MAP[size];
  const source = (isNight ? NIGHT_SOURCE_BY_CONDITION : SOURCE_BY_CONDITION)[
    condition
  ];
  return (
    <View
      style={{ width: px, height: px, alignItems: 'center', justifyContent: 'center' }}
      testID={testID}
      accessibilityLabel={accessibilityLabel ?? condition}
      accessibilityRole="image"
    >
      <RNImage
        source={typeof source === 'string' ? { uri: source } : source}
        style={{ width: px, height: px }}
        resizeMode="contain"
      />
    </View>
  );
};

WeatherIcon.displayName = 'WeatherIcon';
