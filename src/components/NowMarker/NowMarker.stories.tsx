import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { NowMarker } from './NowMarker';

const meta: Meta<typeof NowMarker> = {
  title: 'Components/NowMarker',
  component: NowMarker,
  args: { label: 'AGORA', height: 80 },
  argTypes: {
    label: { control: 'text' },
    height: { control: { type: 'range', min: 20, max: 200, step: 4 } },
  },
};

export default meta;
type Story = StoryObj<typeof NowMarker>;

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
export const Short: Story = { args: { height: 40 } };
export const Tall: Story = { args: { height: 160 } };
export const English: Story = { args: { label: 'NOW' } };

export const Overview: Story = {
  name: 'Overview — variations',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ flexDirection: 'row', gap: 32, alignItems: 'flex-start' }}>
      <View style={{ gap: 6 }}>
        <Caption>default — h 80</Caption>
        <NowMarker />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>short — h 40</Caption>
        <NowMarker height={40} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>tall — h 160</Caption>
        <NowMarker height={160} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>english label</Caption>
        <NowMarker label="NOW" />
      </View>
    </View>
  ),
};
