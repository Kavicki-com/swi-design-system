import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { HeartrateStatus } from './HeartrateStatus';

const meta: Meta<typeof HeartrateStatus> = {
  title: 'Core Components/HeartrateStatus',
  component: HeartrateStatus,
  args: { condition: 'check', size: 22 },
  argTypes: {
    condition: { control: { type: 'inline-radio' }, options: ['check', 'low', 'alert'] },
    size: { control: { type: 'range', min: 12, max: 96, step: 1 } },
    accessibilityLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof HeartrateStatus>;

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
        <Caption>conditions @ 22 (default)</Caption>
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <HeartrateStatus condition="check" />
          <HeartrateStatus condition="low" />
          <HeartrateStatus condition="alert" />
        </View>
      </View>
      <View style={{ gap: 12 }}>
        <Caption>sized — 16 / 22 / 32 / 48</Caption>
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <HeartrateStatus condition="check" size={16} />
          <HeartrateStatus condition="check" size={22} />
          <HeartrateStatus condition="check" size={32} />
          <HeartrateStatus condition="check" size={48} />
        </View>
      </View>
    </View>
  ),
};
