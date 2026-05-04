import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { AvatarGroup } from './AvatarGroup';
import type { AvatarGroupItem } from './AvatarGroup.types';

const SAMPLE_AVATARS: AvatarGroupItem[] = [
  { uri: 'https://i.pravatar.cc/200?img=12' },
  { uri: 'https://i.pravatar.cc/200?img=15' },
  { uri: 'https://i.pravatar.cc/200?img=22' },
  { uri: 'https://i.pravatar.cc/200?img=33' },
  { uri: 'https://i.pravatar.cc/200?img=49' },
];

const meta: Meta<typeof AvatarGroup> = {
  title: 'Core Components/AvatarGroup',
  component: AvatarGroup,
  args: {
    avatars: SAMPLE_AVATARS,
    totalCount: 18,
    size: 'm',
    bordered: true,
  },
  argTypes: {
    totalCount: { control: { type: 'number', min: 0, max: 200 } },
    maxVisible: { control: { type: 'number', min: 1, max: 10 } },
    size: { control: { type: 'inline-radio' }, options: ['s', 'm', 'l'] },
    bordered: { control: 'boolean' },
    borderColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

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

export const NoOverflow: Story = {
  name: 'No overflow (totalCount = avatars.length)',
  args: { totalCount: 5 },
};

export const ThreeVisibleManyHidden: Story = {
  args: { maxVisible: 3, totalCount: 50 },
};

export const SmallSize: Story = { args: { size: 's' } };
export const LargeSize: Story = { args: { size: 'l' } };

export const NoBorder: Story = { args: { bordered: false } };

export const Overview: Story = {
  name: 'Overview — variations',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 24, alignItems: 'flex-start' }}>
      <View style={{ gap: 6 }}>
        <Caption>m / 5 visible / +13 overflow</Caption>
        <AvatarGroup avatars={SAMPLE_AVATARS} totalCount={18} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>m / 3 visible / +47 overflow</Caption>
        <AvatarGroup avatars={SAMPLE_AVATARS} maxVisible={3} totalCount={50} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>m / 5 visible / no overflow</Caption>
        <AvatarGroup avatars={SAMPLE_AVATARS} totalCount={5} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>s / 5 visible / +13 overflow</Caption>
        <AvatarGroup avatars={SAMPLE_AVATARS} totalCount={18} size="s" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>l / 4 visible / +9 overflow</Caption>
        <AvatarGroup avatars={SAMPLE_AVATARS.slice(0, 4)} totalCount={13} size="l" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>m / no border</Caption>
        <AvatarGroup avatars={SAMPLE_AVATARS} totalCount={18} bordered={false} />
      </View>
    </View>
  ),
};
