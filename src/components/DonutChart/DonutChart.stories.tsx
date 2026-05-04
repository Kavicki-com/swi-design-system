import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { DonutChart } from './DonutChart';
import { iconPaths } from '../../icons';

const meta: Meta<typeof DonutChart> = {
  title: 'Charts/DonutChart',
  component: DonutChart,
  args: {
    title: 'Sinais vitais',
    value: 512,
    label: 'Funcionários',
    caption: 'Excelentes',
    progress: 85,
    icon: 'vital_signs',
    size: 'default',
  },
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' },
    label: { control: 'text' },
    caption: { control: 'text' },
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    trackColor: { control: 'color' },
    iconColor: { control: 'color' },
    size: { control: { type: 'inline-radio' }, options: ['default', 'small'] },
    icon: { control: { type: 'select' }, options: Object.keys(iconPaths) },
    locationIcon: { control: { type: 'select' }, options: Object.keys(iconPaths) },
    onLocationPress: { action: 'locationPress' },
  },
};

export default meta;
type Story = StoryObj<typeof DonutChart>;

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

export const Small: Story = { args: { size: 'small' } };

export const WithLocationButton: Story = {
  args: { size: 'default' },
  render: (args) => <DonutChart {...args} onLocationPress={() => undefined} />,
};

export const LowProgress: Story = { args: { progress: 18, caption: 'Baixos' } };

export const MidProgress: Story = { args: { progress: 50, caption: 'Médios' } };

export const FullProgress: Story = { args: { progress: 100 } };

export const Mobile: Story = {
  args: { size: 'small' },
  parameters: { viewport: { defaultViewport: 'iphone14' } },
};

export const SizeComparison: Story = {
  name: 'Sizes — default vs small',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ flexDirection: 'row', gap: 32, alignItems: 'flex-start' }}>
      <View style={{ gap: 6, alignItems: 'center' }}>
        <Caption>default</Caption>
        <DonutChart
          title="Sinais vitais"
          value={512}
          label="Funcionários"
          caption="Excelentes"
          progress={85}
        />
      </View>
      <View style={{ gap: 6, alignItems: 'center' }}>
        <Caption>small</Caption>
        <DonutChart
          title="Sinais vitais"
          value={512}
          label="Funcionários"
          caption="Excelentes"
          progress={85}
          size="small"
        />
      </View>
    </View>
  ),
};

export const ProgressStates: Story = {
  name: 'Progress — semantic levels',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ flexDirection: 'row', gap: 24, flexWrap: 'wrap' }}>
      <View style={{ gap: 6, alignItems: 'center' }}>
        <Caption>excellent</Caption>
        <DonutChart
          title="Sinais vitais"
          value={512}
          label="Funcionários"
          caption="Excelentes"
          progress={92}
          size="small"
        />
      </View>
      <View style={{ gap: 6, alignItems: 'center' }}>
        <Caption>regular</Caption>
        <DonutChart
          title="Sinais vitais"
          value={328}
          label="Funcionários"
          caption="Regulares"
          progress={55}
          size="small"
        />
      </View>
      <View style={{ gap: 6, alignItems: 'center' }}>
        <Caption>low</Caption>
        <DonutChart
          title="Sinais vitais"
          value={120}
          label="Funcionários"
          caption="Baixos"
          progress={18}
          size="small"
        />
      </View>
    </View>
  ),
};
