import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { Silhouette } from './Silhouette';

const meta: Meta<typeof Silhouette> = {
  title: 'Charts/Silhouette',
  component: Silhouette,
  args: { gender: 'male', showHeart: true },
  argTypes: {
    gender: { control: { type: 'inline-radio' }, options: ['male', 'female'] },
    height: { control: { type: 'range', min: 80, max: 480, step: 4 } },
    showHeart: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Silhouette>;

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

export const Male: Story = { args: { gender: 'male' } };
export const Female: Story = { args: { gender: 'female' } };
export const Small: Story = { args: { height: 160 } };
export const Tall: Story = { args: { height: 400 } };
export const NoHeart: Story = { args: { showHeart: false } };

export const Overview: Story = {
  name: 'Overview — both genders, multiple sizes',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 32 }}>
      <View style={{ gap: 12 }}>
        <Caption>natural sizes — male 320 / female 311</Caption>
        <View style={{ flexDirection: 'row', gap: 32, alignItems: 'flex-end' }}>
          <Silhouette gender="male" />
          <Silhouette gender="female" />
        </View>
      </View>
      <View style={{ gap: 12 }}>
        <Caption>small — height 160</Caption>
        <View style={{ flexDirection: 'row', gap: 32, alignItems: 'flex-end' }}>
          <Silhouette gender="male" height={160} />
          <Silhouette gender="female" height={160} />
        </View>
      </View>
      <View style={{ gap: 12 }}>
        <Caption>no heart overlay</Caption>
        <View style={{ flexDirection: 'row', gap: 32, alignItems: 'flex-end' }}>
          <Silhouette gender="male" height={200} showHeart={false} />
          <Silhouette gender="female" height={200} showHeart={false} />
        </View>
      </View>
    </View>
  ),
};
