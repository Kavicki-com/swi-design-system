import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { HeaderUserInfo } from './HeaderUserInfo';

const AVATAR = 'https://i.pravatar.cc/200?img=12';

const meta: Meta<typeof HeaderUserInfo> = {
  title: 'Components/HeaderUserInfo',
  component: HeaderUserInfo,
  args: {
    bpm: 99,
    pressure: '12/8',
    progress: 50,
    avatarUri: AVATAR,
    bpmUnit: 'bpm',
  },
  argTypes: {
    bpm: { control: { type: 'number', min: 0, max: 250 } },
    pressure: { control: 'text' },
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    avatarUri: { control: 'text' },
    bpmUnit: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderUserInfo>;

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

export const LowProgress: Story = { args: { progress: 15 } };
export const HighProgress: Story = { args: { progress: 90 } };
export const HighBpm: Story = { args: { bpm: 142, pressure: '14/9', progress: 80 } };
export const NoAvatar: Story = { args: { avatarUri: undefined } };

export const Overview: Story = {
  name: 'Overview — varied vitals',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 24, alignItems: 'flex-start' }}>
      <View style={{ gap: 6 }}>
        <Caption>resting — bpm 72, pressure 12/8</Caption>
        <HeaderUserInfo bpm={72} pressure="12/8" progress={30} avatarUri={AVATAR} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>active — bpm 99, pressure 13/8</Caption>
        <HeaderUserInfo bpm={99} pressure="13/8" progress={55} avatarUri={AVATAR} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>peak — bpm 142, pressure 14/9</Caption>
        <HeaderUserInfo bpm={142} pressure="14/9" progress={92} avatarUri={AVATAR} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>no avatar</Caption>
        <HeaderUserInfo bpm={88} pressure="12/8" progress={40} />
      </View>
    </View>
  ),
};
