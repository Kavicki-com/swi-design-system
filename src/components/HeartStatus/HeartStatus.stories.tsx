import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { HeartStatus } from './HeartStatus';

const meta: Meta<typeof HeartStatus> = {
  title: 'Core Components/HeartStatus',
  component: HeartStatus,
  args: { condition: 'check' },
  argTypes: {
    condition: { control: { type: 'inline-radio' }, options: ['check', 'low', 'alert'] },
    size: { control: { type: 'range', min: 24, max: 160, step: 1 } },
    accessibilityLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof HeartStatus>;

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

export const Check: Story = { args: { condition: 'check' } };
export const Low: Story = { args: { condition: 'low' } };
export const Alert: Story = { args: { condition: 'alert' } };

export const Overview: Story = {
  name: 'Overview — all conditions',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 24 }}>
      <View style={{ gap: 12 }}>
        <Caption>conditions @ natural size (35)</Caption>
        <View style={{ flexDirection: 'row', gap: 24, alignItems: 'flex-end' }}>
          <HeartStatus condition="check" />
          <HeartStatus condition="low" />
          <HeartStatus condition="alert" />
        </View>
      </View>
      <View style={{ gap: 12 }}>
        <Caption>sized — 35 / 56 / 96</Caption>
        <View style={{ flexDirection: 'row', gap: 24, alignItems: 'flex-end' }}>
          <HeartStatus condition="check" />
          <HeartStatus condition="check" size={56} />
          <HeartStatus condition="check" size={96} />
        </View>
      </View>
    </View>
  ),
};
