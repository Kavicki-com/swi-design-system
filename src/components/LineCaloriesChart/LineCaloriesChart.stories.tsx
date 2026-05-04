import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { LineCaloriesChart } from './LineCaloriesChart';
import type { LineCaloriesPoint } from './LineCaloriesChart.types';

const FIGMA_DATA: LineCaloriesPoint[] = [
  { time: '07:15', kcal: 41 },
  { time: '08:42', kcal: 57 },
  { time: '10:51', kcal: 62 },
  { time: '14:22', kcal: 38 },
  { time: '16:33', kcal: 55 },
  { time: '18:54', kcal: 49 },
  { time: '18:54', kcal: 49 },
  { time: '19:00', kcal: 22 },
  { time: '19:30', kcal: 19 },
];

const meta: Meta<typeof LineCaloriesChart> = {
  title: 'Charts/LineCaloriesChart',
  component: LineCaloriesChart,
  args: {
    points: FIGMA_DATA,
    unit: 'kcal',
    fullWidth: true,
  },
  argTypes: {
    unit: { control: 'text' },
    width: { control: { type: 'range', min: 320, max: 1500, step: 10 } },
    height: { control: { type: 'range', min: 80, max: 240, step: 4 } },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof LineCaloriesChart>;

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

export const ShortDay: Story = {
  args: {
    points: [
      { time: '08:00', kcal: 30 },
      { time: '12:00', kcal: 65 },
      { time: '15:00', kcal: 42 },
      { time: '19:00', kcal: 18 },
    ],
  },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  decorators: [(StoryComp) => <View style={{ width: 1100 }}><StoryComp /></View>],
};

export const Overview: Story = {
  name: 'Overview — full day timeline',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 16 }}>
      <Caption>nine entries — natural width 1013</Caption>
      <LineCaloriesChart points={FIGMA_DATA} />
    </View>
  ),
};
