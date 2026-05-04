import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from './Avatar';

const URI = 'https://i.pravatar.cc/200?img=12';

const meta: Meta<typeof Avatar> = {
  title: 'Core Components/Avatar',
  component: Avatar,
  args: { uri: URI, size: 'm', bordered: false },
  argTypes: {
    uri: { control: 'text' },
    size: { control: { type: 'inline-radio' }, options: ['s', 'm', 'l'] },
    bordered: { control: 'boolean' },
    borderColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

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

export const Small: Story = { args: { size: 's' } };
export const Medium: Story = { args: { size: 'm' } };
export const Large: Story = { args: { size: 'l' } };
export const Bordered: Story = { args: { bordered: true } };
export const NoUri: Story = { args: { uri: undefined } };

export const Overview: Story = {
  name: 'Overview — sizes & states',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 24 }}>
      <View style={{ gap: 8 }}>
        <Caption>sizes — s / m / l</Caption>
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'flex-end' }}>
          <Avatar uri={URI} size="s" />
          <Avatar uri={URI} size="m" />
          <Avatar uri={URI} size="l" />
        </View>
      </View>
      <View style={{ gap: 8 }}>
        <Caption>bordered — m / l</Caption>
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'flex-end' }}>
          <Avatar uri={URI} size="m" bordered />
          <Avatar uri={URI} size="l" bordered />
        </View>
      </View>
      <View style={{ gap: 8 }}>
        <Caption>no uri (fallback bg)</Caption>
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'flex-end' }}>
          <Avatar size="m" />
          <Avatar size="l" bordered />
        </View>
      </View>
    </View>
  ),
};
