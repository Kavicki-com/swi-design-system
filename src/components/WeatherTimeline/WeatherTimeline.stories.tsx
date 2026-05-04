import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { WeatherTimeline } from './WeatherTimeline';
import type {
  IntensitySegment,
  WeatherTimelineEvent,
} from './WeatherTimeline.types';

const SAMPLE_EVENTS: WeatherTimelineEvent[] = [
  { id: '1', condition: 'rainy', time: '09:00AM', label: 'CHUVAS\nMODERADAS' },
  { id: '2', condition: 'sunny', time: '10:08 AM', label: 'SOL\nINTENSO' },
  { id: '3', condition: 'rainy', time: '12:20 PM', label: 'CHUVAS\nMODERADAS' },
  { id: '4', condition: 'partly-cloudy', time: '14:25 PM', label: 'PARCIALMENTE\nNUBLADO', isNow: true },
];

const SAMPLE_SEGMENTS: IntensitySegment[] = [
  { id: 's1', flex: 2, color: 'rain' },
  { id: 's2', flex: 1, color: 'sun' },
  { id: 's3', flex: 2, color: 'rain' },
  { id: 's4', flex: 1, color: 'cloudy' },
];

const meta: Meta<typeof WeatherTimeline> = {
  title: 'Components/WeatherTimeline',
  component: WeatherTimeline,
  args: {
    events: SAMPLE_EVENTS,
    intensitySegments: SAMPLE_SEGMENTS,
    nowLabel: 'AGORA',
    fullWidth: true,
  },
  argTypes: {
    nowLabel: { control: 'text' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof WeatherTimeline>;

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

export const NoNowMarker: Story = {
  args: {
    events: SAMPLE_EVENTS.map((e) => ({ ...e, isNow: false })),
  },
};

export const AutoSegments: Story = {
  name: 'Auto segments (no intensitySegments prop)',
  args: {
    intensitySegments: undefined,
  },
};

export const NowAtStart: Story = {
  args: {
    events: SAMPLE_EVENTS.map((e, i) => ({ ...e, isNow: i === 0 })),
  },
};

export const Overview: Story = {
  name: 'Overview — full timeline',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 32 }}>
      <View style={{ gap: 12 }}>
        <Caption>4-event day with AGORA at 14:25</Caption>
        <WeatherTimeline events={SAMPLE_EVENTS} intensitySegments={SAMPLE_SEGMENTS} />
      </View>
    </View>
  ),
};
