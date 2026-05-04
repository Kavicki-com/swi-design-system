import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Tabs } from './Tabs';
import type { TabItem } from './Tabs.types';

const SAMPLE_TABS: TabItem[] = [
  { value: 'in-progress', label: 'Em Andamento' },
  { value: 'done', label: 'Concluídas' },
  { value: 'todo', label: 'A Fazer' },
];

const meta: Meta<typeof Tabs> = {
  title: 'Core Components/Tabs',
  component: Tabs,
  args: {
    tabs: SAMPLE_TABS,
    defaultValue: 'in-progress',
    fullWidth: true,
    disabled: false,
  },
  argTypes: {
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'change' },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 400 }}>
        <StoryComp />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

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

export const ContentWidth: Story = {
  name: 'fullWidth=false (content sized)',
  args: { fullWidth: false },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const SingleTabDisabled: Story = {
  args: {
    tabs: [
      { value: 'a', label: 'Disponível' },
      { value: 'b', label: 'Indisponível', disabled: true },
      { value: 'c', label: 'Disponível' },
    ],
  },
};

export const TwoTabs: Story = {
  args: {
    tabs: [
      { value: 'all', label: 'Todos' },
      { value: 'mine', label: 'Meus' },
    ],
  },
};

export const FiveTabs: Story = {
  args: {
    tabs: [
      { value: '1', label: 'Day' },
      { value: '2', label: 'Week' },
      { value: '3', label: 'Month' },
      { value: '4', label: 'Quarter' },
      { value: '5', label: 'Year' },
    ],
  },
  decorators: [(StoryComp) => <View style={{ width: 600 }}><StoryComp /></View>],
};

export const Controlled: Story = {
  name: 'Controlled (value + onChange)',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => {
    const [value, setValue] = useState('done');
    return (
      <View style={{ gap: 12, width: 400 }}>
        <Caption>{`current: ${value}`}</Caption>
        <Tabs tabs={SAMPLE_TABS} value={value} onChange={setValue} fullWidth />
      </View>
    );
  },
};

export const Overview: Story = {
  name: 'Overview — all states',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 24 }}>
      <View style={{ gap: 8, width: 400 }}>
        <Caption>full width — first active</Caption>
        <Tabs tabs={SAMPLE_TABS} defaultValue="in-progress" fullWidth />
      </View>
      <View style={{ gap: 8, width: 400 }}>
        <Caption>full width — middle active</Caption>
        <Tabs tabs={SAMPLE_TABS} defaultValue="done" fullWidth />
      </View>
      <View style={{ gap: 8, width: 400 }}>
        <Caption>full width — last active</Caption>
        <Tabs tabs={SAMPLE_TABS} defaultValue="todo" fullWidth />
      </View>
      <View style={{ gap: 8, width: 400 }}>
        <Caption>content width</Caption>
        <Tabs tabs={SAMPLE_TABS} defaultValue="in-progress" />
      </View>
      <View style={{ gap: 8, width: 400 }}>
        <Caption>disabled</Caption>
        <Tabs tabs={SAMPLE_TABS} defaultValue="in-progress" fullWidth disabled />
      </View>
    </View>
  ),
};
