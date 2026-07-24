import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { WeatherIcon } from './WeatherIcon';

const meta: Meta<typeof WeatherIcon> = {
  title: 'Core Components/WeatherIcon',
  component: WeatherIcon,
  args: { condition: 'sunny', size: 'm', isNight: false },
  argTypes: {
    condition: {
      control: { type: 'inline-radio' },
      options: ['sunny', 'rainy', 'partly-cloudy', 'storm'],
    },
    size: { control: { type: 'inline-radio' }, options: ['s', 'm', 'l'] },
    isNight: { control: { type: 'boolean' } },
  },
};

export default meta;
type Story = StoryObj<typeof WeatherIcon>;

const Caption = ({ children }: { children: string }) => (
  <Text
    style={{
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: 11,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: '#9F9F9F',
    }}
  >
    {children}
  </Text>
);

export const Playground: Story = {};

export const Sunny: Story = { args: { condition: 'sunny' } };
export const Rainy: Story = { args: { condition: 'rainy' } };
export const PartlyCloudy: Story = { args: { condition: 'partly-cloudy' } };

export const Night: Story = {
  args: { isNight: true },
};

export const Overview: Story = {
  name: 'Overview — all conditions × sizes',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 24 }}>
      {(['sunny', 'rainy', 'partly-cloudy', 'storm'] as const).map((c) => (
        <View key={c} style={{ gap: 8 }}>
          <Caption>{c}</Caption>
          <View style={{ flexDirection: 'row', gap: 24, alignItems: 'flex-end' }}>
            <WeatherIcon condition={c} size="s" />
            <WeatherIcon condition={c} size="m" />
            <WeatherIcon condition={c} size="l" />
          </View>
        </View>
      ))}
    </View>
  ),
};

export const OverviewNight: Story = {
  name: 'Overview — night variants',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 24 }}>
      {(['sunny', 'rainy', 'partly-cloudy', 'storm'] as const).map((c) => (
        <View key={c} style={{ gap: 8 }}>
          <Caption>{`${c} — night`}</Caption>
          <View style={{ flexDirection: 'row', gap: 24, alignItems: 'flex-end' }}>
            <WeatherIcon condition={c} isNight size="s" />
            <WeatherIcon condition={c} isNight size="m" />
            <WeatherIcon condition={c} isNight size="l" />
          </View>
        </View>
      ))}
    </View>
  ),
};
