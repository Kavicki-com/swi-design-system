import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { WorkersInfoCard } from './WorkersInfoCard';
import type { WorkersInfoCardAlert } from './WorkersInfoCard.types';

const AVATAR = 'https://i.pravatar.cc/200?img=12';

const SAMPLE_ALERTS: WorkersInfoCardAlert[] = [
  {
    icon: 'favorite',
    title: 'Taquicardia detectada',
    description: 'Batimentos cardíacos 8% acima do recomendado',
  },
  {
    icon: 'av_timer',
    title: 'Pressão sanguínea abaixo do normal',
    description: 'Queda de pressão para 5% abaixo do normal para o funcionário',
  },
  {
    icon: 'cognition',
    title: 'Fadica excessiva',
    description: 'Carga operacional acima do recomendado para o funcionário',
  },
];

const EMPLOYEE = {
  name: 'Elisa Siqueira Jordão',
  age: 32,
  bloodType: 'O+',
  role: 'Administradora de Sistema',
  secondaryRole: 'Engenheira Civil',
  avatarUri: AVATAR,
};

const meta: Meta<typeof WorkersInfoCard> = {
  title: 'Components/WorkersInfoCard',
  component: WorkersInfoCard,
  args: {
    employee: EMPLOYEE,
    enabled: true,
    defaultExpanded: false,
    alerts: SAMPLE_ALERTS,
    fullWidth: false,
  },
  argTypes: {
    enabled: { control: 'boolean' },
    defaultExpanded: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    onEnabledChange: { action: 'enabledChange' },
    onExpandedChange: { action: 'expandedChange' },
    onDelete: { action: 'delete' },
    onChat: { action: 'chat' },
    onLocation: { action: 'location' },
    onExamHistory: { action: 'examHistory' },
    onCallEmployee: { action: 'callEmployee' },
    onSendBreakAlert: { action: 'sendBreakAlert' },
  },
};

export default meta;
type Story = StoryObj<typeof WorkersInfoCard>;

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

export const Collapsed: Story = { args: { defaultExpanded: false } };
export const Expanded: Story = { args: { defaultExpanded: true } };

export const Disabled: Story = {
  name: 'Toggle off',
  args: { enabled: false, defaultExpanded: true },
};

export const Overview: Story = {
  name: 'Overview — both states',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 6 }}>
        <Caption>collapsed</Caption>
        <WorkersInfoCard
          employee={EMPLOYEE}
          enabled
          alerts={SAMPLE_ALERTS}
          onDelete={() => {}}
          onChat={() => {}}
          onLocation={() => {}}
        />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>expanded</Caption>
        <WorkersInfoCard
          employee={EMPLOYEE}
          enabled
          defaultExpanded
          alerts={SAMPLE_ALERTS}
          onDelete={() => {}}
          onChat={() => {}}
          onLocation={() => {}}
          onExamHistory={() => {}}
          onCallEmployee={() => {}}
          onSendBreakAlert={() => {}}
        />
      </View>
    </View>
  ),
};
