import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { Header } from './Header';

const AVATAR = 'https://i.pravatar.cc/200?img=12';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  args: {
    bpm: 99,
    pressure: '12/8',
    progress: 50,
    avatarUri: AVATAR,
    bpmUnit: 'bpm',
    logoSize: 'm',
    logoType: 'complete',
    fullWidth: true,
  },
  argTypes: {
    bpm: { control: { type: 'number', min: 0, max: 250 } },
    pressure: { control: 'text' },
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    avatarUri: { control: 'text' },
    bpmUnit: { control: 'text' },
    logoSize: { control: { type: 'inline-radio' }, options: ['s', 'm', 'l'] },
    logoType: { control: { type: 'inline-radio' }, options: ['complete', 'symbol'] },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

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

export const SymbolLogo: Story = { args: { logoType: 'symbol' } };
export const SmallLogo: Story = { args: { logoSize: 's' } };
export const LargeLogo: Story = { args: { logoSize: 'l' } };
export const HighBpm: Story = { args: { bpm: 142, pressure: '14/9', progress: 88 } };

export const Overview: Story = {
  name: 'Overview — variations',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 24 }}>
      <View style={{ gap: 6 }}>
        <Caption>default — bpm 99 / 12-8 / 50% load</Caption>
        <Header bpm={99} pressure="12/8" progress={50} avatarUri={AVATAR} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>symbol logo</Caption>
        <Header bpm={99} pressure="12/8" progress={50} avatarUri={AVATAR} logoType="symbol" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>large logo</Caption>
        <Header bpm={99} pressure="12/8" progress={50} avatarUri={AVATAR} logoSize="l" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>peak vitals</Caption>
        <Header bpm={142} pressure="14/9" progress={88} avatarUri={AVATAR} />
      </View>
    </View>
  ),
};
