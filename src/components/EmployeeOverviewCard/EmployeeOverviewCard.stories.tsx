import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { EmployeeOverviewCard } from './EmployeeOverviewCard';

const AVATAR = 'https://i.pravatar.cc/200?img=12';

const meta: Meta<typeof EmployeeOverviewCard> = {
  title: 'Components/EmployeeOverviewCard',
  component: EmployeeOverviewCard,
  args: {
    employee: { name: 'Ezequiel Almeida', sector: 'Setor Leste', avatarUri: AVATAR },
    progress: 84,
    bpm: 65,
    pressure: '120/80',
    bpmUnit: 'Bpm',
    fullWidth: false,
  },
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    bpm: { control: { type: 'number', min: 0, max: 250 } },
    pressure: { control: 'text' },
    bpmUnit: { control: 'text' },
    fullWidth: { control: 'boolean' },
    onPress: { action: 'press' },
    onLocationPress: { action: 'locationPress' },
  },
};

export default meta;
type Story = StoryObj<typeof EmployeeOverviewCard>;

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

export const HighBpm: Story = {
  args: { bpm: 142, pressure: '14/9', progress: 92 },
};

export const LowProgress: Story = {
  args: { progress: 12 },
};

export const Roster: Story = {
  name: 'Roster — multiple employees',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 12 }}>
      <Caption>employee roster</Caption>
      <EmployeeOverviewCard
        employee={{ name: 'Ezequiel Almeida', sector: 'Setor Leste', avatarUri: AVATAR }}
        progress={84}
        bpm={65}
        pressure="120/80"
        onLocationPress={() => {}}
      />
      <EmployeeOverviewCard
        employee={{
          name: 'Mariana Costa',
          sector: 'Setor Norte',
          avatarUri: 'https://i.pravatar.cc/200?img=20',
        }}
        progress={42}
        bpm={88}
        pressure="13/8"
        onLocationPress={() => {}}
      />
      <EmployeeOverviewCard
        employee={{
          name: 'João Silva',
          sector: 'Setor Sul',
          avatarUri: 'https://i.pravatar.cc/200?img=22',
        }}
        progress={97}
        bpm={142}
        pressure="14/9"
        onLocationPress={() => {}}
      />
    </View>
  ),
};
