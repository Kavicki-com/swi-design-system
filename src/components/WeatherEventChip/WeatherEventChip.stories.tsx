import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { WeatherEventChip } from './WeatherEventChip';

const meta: Meta<typeof WeatherEventChip> = {
  title: 'Components/WeatherEventChip',
  component: WeatherEventChip,
  args: { time: '09:00AM', label: 'CHUVAS MODERADAS' },
  argTypes: {
    time: { control: 'text' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof WeatherEventChip>;

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
export const SunIntense: Story = { args: { time: '10:08 AM', label: 'SOL INTENSO' } };
export const PartlyCloudy: Story = { args: { time: '14:25 PM', label: 'PARCIALMENTE NUBLADO' } };

export const Overview: Story = {
  name: 'Overview — variations',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 16, alignItems: 'flex-start' }}>
      <View style={{ gap: 6 }}>
        <Caption>moderate rain</Caption>
        <WeatherEventChip time="09:00AM" label="CHUVAS MODERADAS" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>intense sun</Caption>
        <WeatherEventChip time="10:08 AM" label="SOL INTENSO" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>partly cloudy</Caption>
        <WeatherEventChip time="14:25 PM" label="PARCIALMENTE NUBLADO" />
      </View>
    </View>
  ),
};
