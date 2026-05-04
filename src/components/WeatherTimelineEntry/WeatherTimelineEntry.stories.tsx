import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { WeatherTimelineEntry } from './WeatherTimelineEntry';

const meta: Meta<typeof WeatherTimelineEntry> = {
  title: 'Components/WeatherTimelineEntry',
  component: WeatherTimelineEntry,
  args: { condition: 'rainy', time: '09:00AM', label: 'CHUVAS MODERADAS' },
  argTypes: {
    condition: {
      control: { type: 'inline-radio' },
      options: ['sunny', 'rainy', 'partly-cloudy'],
    },
    time: { control: 'text' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof WeatherTimelineEntry>;

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

export const Default: Story = {};
export const Sunny: Story = { args: { condition: 'sunny', time: '10:08 AM', label: 'SOL INTENSO' } };
export const PartlyCloudy: Story = {
  args: { condition: 'partly-cloudy', time: '14:25 PM', label: 'PARCIALMENTE NUBLADO' },
};

export const Overview: Story = {
  name: 'Overview — all conditions',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ flexDirection: 'row', gap: 32 }}>
      <View style={{ gap: 6 }}>
        <Caption>rainy</Caption>
        <WeatherTimelineEntry condition="rainy" time="09:00AM" label="CHUVAS MODERADAS" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>sunny</Caption>
        <WeatherTimelineEntry condition="sunny" time="10:08 AM" label="SOL INTENSO" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>partly-cloudy</Caption>
        <WeatherTimelineEntry condition="partly-cloudy" time="14:25 PM" label="PARCIALMENTE NUBLADO" />
      </View>
    </View>
  ),
};
