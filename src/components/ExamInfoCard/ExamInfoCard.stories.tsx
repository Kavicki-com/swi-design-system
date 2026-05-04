import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { ExamInfoCard } from './ExamInfoCard';

const meta: Meta<typeof ExamInfoCard> = {
  title: 'Components/ExamInfoCard',
  component: ExamInfoCard,
  args: {
    year: 2025,
    date: '12 Ago',
    examName: 'Exame admissional',
    actionLabel: 'Baixar exame',
    actionDisabled: false,
    fullWidth: true,
  },
  argTypes: {
    year: { control: 'text' },
    date: { control: 'text' },
    examName: { control: 'text' },
    actionLabel: { control: 'text' },
    actionDisabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    onExamPress: { action: 'examPress' },
    onActionPress: { action: 'actionPress' },
  },
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof ExamInfoCard>;

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

export const Periodic: Story = {
  args: { year: 2024, date: '03 Mar', examName: 'Exame periódico' },
};

export const Demissional: Story = {
  args: { year: 2023, date: '28 Nov', examName: 'Exame demissional' },
};

export const DisabledAction: Story = {
  args: { actionDisabled: true },
};

export const Mobile: Story = {
  args: { fullWidth: true },
  parameters: { viewport: { defaultViewport: 'iphone14' } },
};

export const Stacked: Story = {
  name: 'Stacked — list of exams',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 8 }}>
      <Caption>Histórico de exames</Caption>
      <ExamInfoCard year={2025} date="12 Ago" examName="Exame admissional" fullWidth />
      <ExamInfoCard year={2024} date="03 Mar" examName="Exame periódico" fullWidth />
      <ExamInfoCard year={2023} date="28 Nov" examName="Exame demissional" fullWidth />
    </View>
  ),
};
