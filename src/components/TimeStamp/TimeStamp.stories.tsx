import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { TimeStamp } from './TimeStamp';

const meta: Meta<typeof TimeStamp> = {
  title: 'Charts/TimeStamp',
  component: TimeStamp,
  args: { time: '6:30' },
  argTypes: { time: { control: 'text' } },
  decorators: [
    (StoryComp) => (
      <View style={{ paddingTop: 16 }}>
        <StoryComp />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TimeStamp>;

export const Playground: Story = {};
export const Default: Story = {};

export const Overview: Story = {
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ flexDirection: 'row', gap: 24, paddingTop: 16 }}>
      <TimeStamp time="06:30" />
      <TimeStamp time="07:15" />
      <TimeStamp time="14:22" />
      <TimeStamp time="19:30" />
    </View>
  ),
};
