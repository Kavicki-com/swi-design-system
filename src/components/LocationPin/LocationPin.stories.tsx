import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { LocationPin } from './LocationPin';

const URI = 'https://i.pravatar.cc/200?img=12';

const meta: Meta<typeof LocationPin> = {
  title: 'Core Components/LocationPin',
  component: LocationPin,
  args: { avatarUri: URI, status: 'good', size: 40 },
  argTypes: {
    avatarUri: { control: 'text' },
    status: { control: 'inline-radio', options: ['good', 'alert', 'low', 'offline'] },
    size: { control: { type: 'range', min: 24, max: 96, step: 4 } },
    borderColor: { control: 'color' },
    tailColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof LocationPin>;

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

export const Good: Story = { args: { status: 'good' } };
export const Alert: Story = { args: { status: 'alert' } };
export const Low: Story = { args: { status: 'low' } };
export const Offline: Story = { args: { status: 'offline' } };

export const Overview: Story = {
  name: 'Overview — statuses & sizes',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 24, padding: 24, backgroundColor: '#1f1f1f' }}>
      <View style={{ gap: 8 }}>
        <Caption>Statuses</Caption>
        <View style={{ flexDirection: 'row', gap: 16 }}>
          <LocationPin avatarUri={URI} status="good" name="Good" />
          <LocationPin avatarUri={URI} status="alert" name="Alert" />
          <LocationPin avatarUri={URI} status="low" name="Low" />
          <LocationPin avatarUri={URI} status="offline" name="Offline" />
        </View>
      </View>
      <View style={{ gap: 8 }}>
        <Caption>Sizes</Caption>
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'flex-end' }}>
          <LocationPin avatarUri={URI} size={28} />
          <LocationPin avatarUri={URI} size={40} />
          <LocationPin avatarUri={URI} size={56} />
        </View>
      </View>
    </View>
  ),
};
