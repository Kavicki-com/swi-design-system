import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { ReportCard } from './ReportCard';

const AVATAR = 'https://i.pravatar.cc/200?img=12';

const SAMPLE = {
  status: 'accept' as const,
  statusLabel: 'Concluído',
  title: 'Status da área de mineração da ala Noroestes',
  summary: 'Percepção geral da área e pontos de possível erosão',
  creationDate: 'dd/mm/aaaa',
  author: { name: 'Josias Santos Menezes', avatarUri: AVATAR },
  location: 'Setor Noroeste',
  responsibles: 'Ana Clara Mendonça, Antonio Cláudio Silva, Rita Sampaio,',
};

const meta: Meta<typeof ReportCard> = {
  title: 'Components/ReportCard',
  component: ReportCard,
  args: {
    ...SAMPLE,
    fullWidth: false,
  },
  argTypes: {
    status: { control: { type: 'inline-radio' }, options: ['accept', 'pending', 'canceled'] },
    statusLabel: { control: 'text' },
    title: { control: 'text' },
    summary: { control: 'text' },
    creationDate: { control: 'text' },
    location: { control: 'text' },
    responsibles: { control: 'text' },
    fullWidth: { control: 'boolean' },
    onPress: { action: 'press' },
  },
};

export default meta;
type Story = StoryObj<typeof ReportCard>;

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

export const Pending: Story = { args: { status: 'pending', statusLabel: 'Em Análise' } };
export const Canceled: Story = { args: { status: 'canceled', statusLabel: 'Reprovado' } };

export const NoLocation: Story = { args: { location: undefined } };
export const NoResponsibles: Story = { args: { responsibles: undefined } };

export const Overview: Story = {
  name: 'Overview — variations',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start' }}>
      <View style={{ gap: 6 }}>
        <Caption>concluído</Caption>
        <ReportCard {...SAMPLE} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>pendente</Caption>
        <ReportCard {...SAMPLE} status="pending" statusLabel="Em Análise" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>cancelado</Caption>
        <ReportCard {...SAMPLE} status="canceled" statusLabel="Reprovado" />
      </View>
    </View>
  ),
};
