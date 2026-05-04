import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Core Components/Logo',
  component: Logo,
  args: {
    type: 'complete',
    size: 'm',
  },
  argTypes: {
    type: { control: { type: 'inline-radio' }, options: ['complete', 'symbol'] },
    size: { control: { type: 'inline-radio' }, options: ['s', 'm', 'l'] },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

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

export const SmallComplete: Story = { args: { type: 'complete', size: 's' } };
export const MediumComplete: Story = { args: { type: 'complete', size: 'm' } };
export const LargeComplete: Story = { args: { type: 'complete', size: 'l' } };

export const SmallSymbol: Story = { args: { type: 'symbol', size: 's' } };
export const MediumSymbol: Story = { args: { type: 'symbol', size: 'm' } };
export const LargeSymbol: Story = { args: { type: 'symbol', size: 'l' } };

export const TintedPrimary: Story = {
  args: { color: '#62bb81' },
};

export const Overview: Story = {
  name: 'Overview — all sizes & types',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 32, alignItems: 'flex-start' }}>
      <View style={{ gap: 12 }}>
        <Caption>complete — s / m / l (heights 32 / 48 / 64)</Caption>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 24 }}>
          <Logo type="complete" size="s" />
          <Logo type="complete" size="m" />
          <Logo type="complete" size="l" />
        </View>
      </View>
      <View style={{ gap: 12 }}>
        <Caption>symbol — s / m / l (heights 32 / 48 / 64)</Caption>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 24 }}>
          <Logo type="symbol" size="s" />
          <Logo type="symbol" size="m" />
          <Logo type="symbol" size="l" />
        </View>
      </View>
      <View style={{ gap: 12 }}>
        <Caption>tinted — primary green</Caption>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 24 }}>
          <Logo type="complete" size="m" color="#62bb81" />
          <Logo type="symbol" size="m" color="#62bb81" />
        </View>
      </View>
    </View>
  ),
};
