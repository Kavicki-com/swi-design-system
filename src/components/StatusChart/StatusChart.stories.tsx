import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { StatusChart } from './StatusChart';

const meta: Meta<typeof StatusChart> = {
  title: 'Charts/StatusChart',
  component: StatusChart,
  args: { condition: 'good', progress: 1 },
  argTypes: {
    condition: { control: { type: 'inline-radio' }, options: ['good', 'alert', 'low'] },
    progress: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
    accessibilityLabel: { control: 'text' },
    onPressHeartRate: { action: 'pressHeartRate' },
  },
};

export default meta;
type Story = StoryObj<typeof StatusChart>;

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

export const Good: Story = { args: { condition: 'good' } };
export const Alert: Story = { args: { condition: 'alert' } };
export const Low: Story = { args: { condition: 'low' } };

export const Overview: Story = {
  name: 'Overview — all conditions',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 24 }}>
      <View style={{ gap: 12 }}>
        <Caption>good</Caption>
        <StatusChart condition="good" />
      </View>
      <View style={{ gap: 12 }}>
        <Caption>alert</Caption>
        <StatusChart condition="alert" />
      </View>
      <View style={{ gap: 12 }}>
        <Caption>low</Caption>
        <StatusChart condition="low" />
      </View>
    </View>
  ),
};

export const ProgressLevels: Story = {
  name: 'Progress — decreasing values',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 24 }}>
      <View style={{ gap: 12 }}>
        <Caption>progress 1.0 (full)</Caption>
        <StatusChart condition="good" progress={1} />
      </View>
      <View style={{ gap: 12 }}>
        <Caption>progress 0.66</Caption>
        <StatusChart condition="good" progress={0.66} />
      </View>
      <View style={{ gap: 12 }}>
        <Caption>progress 0.33</Caption>
        <StatusChart condition="good" progress={0.33} />
      </View>
      <View style={{ gap: 12 }}>
        <Caption>progress 0 (empty)</Caption>
        <StatusChart condition="good" progress={0} />
      </View>
    </View>
  ),
};
