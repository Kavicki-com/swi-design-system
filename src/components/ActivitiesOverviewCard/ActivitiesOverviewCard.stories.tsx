import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { ActivitiesOverviewCard } from './ActivitiesOverviewCard';
import { iconPaths } from '../../icons';

const AVATARS = [
  { uri: 'https://i.pravatar.cc/200?img=11', alt: 'Worker 1' },
  { uri: 'https://i.pravatar.cc/200?img=12', alt: 'Worker 2' },
  { uri: 'https://i.pravatar.cc/200?img=13', alt: 'Worker 3' },
  { uri: 'https://i.pravatar.cc/200?img=14', alt: 'Worker 4' },
  { uri: 'https://i.pravatar.cc/200?img=15', alt: 'Worker 5' },
];

const meta: Meta<typeof ActivitiesOverviewCard> = {
  title: 'Components/ActivitiesOverviewCard',
  component: ActivitiesOverviewCard,
  args: {
    title: 'Reparo',
    subtitle: 'Setor Leste',
    progress: 84,
    icon: 'build',
    avatars: AVATARS,
    totalAvatarsCount: 18,
    maxVisibleAvatars: 5,
    locationIcon: 'location_on',
    fullWidth: false,
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    progressColor: { control: 'color' },
    progressTrackColor: { control: 'color' },
    icon: { control: { type: 'select' }, options: Object.keys(iconPaths) },
    iconColor: { control: 'color' },
    locationIcon: {
      control: { type: 'select' },
      options: ['', ...Object.keys(iconPaths)],
    },
    totalAvatarsCount: { control: 'number' },
    maxVisibleAvatars: { control: 'number' },
    fullWidth: { control: 'boolean' },
    onPress: { action: 'press' },
    onLocationPress: { action: 'locationPress' },
  },
};

export default meta;
type Story = StoryObj<typeof ActivitiesOverviewCard>;

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

export const NoSubtitle: Story = { args: { subtitle: undefined } };

export const NoLocation: Story = { args: { locationIcon: null } };

export const FullProgress: Story = { args: { progress: 100 } };

export const StartedProgress: Story = { args: { progress: 12 } };

export const FewAvatars: Story = {
  args: {
    avatars: AVATARS.slice(0, 2),
    totalAvatarsCount: 2,
  },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: {
    layout: 'padded',
  },
};

export const Mobile: Story = {
  args: { fullWidth: true },
  parameters: { viewport: { defaultViewport: 'iphone14' } },
};

export const Overview: Story = {
  name: 'Overview — variations',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 16, alignItems: 'flex-start' }}>
      <View style={{ gap: 6 }}>
        <Caption>default</Caption>
        <ActivitiesOverviewCard
          title="Reparo"
          subtitle="Setor Leste"
          progress={84}
          avatars={AVATARS}
          totalAvatarsCount={18}
        />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>different activity</Caption>
        <ActivitiesOverviewCard
          title="Inspeção"
          subtitle="Setor Norte"
          progress={42}
          icon="monitoring"
          avatars={AVATARS.slice(0, 3)}
          totalAvatarsCount={3}
        />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>complete</Caption>
        <ActivitiesOverviewCard
          title="Manutenção"
          subtitle="Setor Sul"
          progress={100}
          icon="build"
          avatars={AVATARS.slice(0, 4)}
          totalAvatarsCount={4}
          locationIcon={null}
        />
      </View>
    </View>
  ),
};
