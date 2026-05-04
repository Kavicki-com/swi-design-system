import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { MapControl } from './MapControl';
import type { MapControlOption } from './MapControl.types';

const HEATMAP_OPTIONS: MapControlOption[] = [
  { id: 'productivity', label: 'Produtividade', checked: true },
  { id: 'alert', label: 'Zonas de alerta', checked: false },
];

const meta: Meta<typeof MapControl> = {
  title: 'Components/MapControl',
  component: MapControl,
  args: {
    variant: 'operators',
    expanded: true,
    options: HEATMAP_OPTIONS,
  },
  argTypes: {
    variant: { control: { type: 'inline-radio' }, options: ['operators', 'heatmap', 'cameras'] },
    expanded: { control: 'boolean' },
    title: { control: 'text' },
    searchPlaceholder: { control: 'text' },
    onSearchChange: { action: 'searchChange' },
    onOptionChange: { action: 'optionChange' },
    onExpandedChange: { action: 'expandedChange' },
  },
};

export default meta;
type Story = StoryObj<typeof MapControl>;

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

export const Operators: Story = { args: { variant: 'operators' } };
export const Heatmap: Story = { args: { variant: 'heatmap', options: HEATMAP_OPTIONS } };
export const Cameras: Story = { args: { variant: 'cameras' } };

export const OperatorsCollapsed: Story = {
  args: { variant: 'operators', expanded: false },
};
export const HeatmapCollapsed: Story = {
  args: { variant: 'heatmap', expanded: false },
};
export const CamerasCollapsed: Story = {
  args: { variant: 'cameras', expanded: false },
};

export const Interactive: Story = {
  name: 'Interactive — toggle expand',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => {
    const [opts, setOpts] = useState(HEATMAP_OPTIONS);
    const [search, setSearch] = useState('');
    return (
      <View style={{ gap: 16, alignItems: 'flex-start' }}>
        <MapControl
          variant="operators"
          searchValue={search}
          onSearchChange={setSearch}
        />
        <MapControl
          variant="heatmap"
          options={opts}
          onOptionChange={(id, checked) =>
            setOpts((prev) => prev.map((o) => (o.id === id ? { ...o, checked } : o)))
          }
        />
        <MapControl variant="cameras" />
      </View>
    );
  },
};

export const Overview: Story = {
  name: 'Overview — all variants × states',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 32 }}>
      <View style={{ gap: 8 }}>
        <Caption>operators — expanded / collapsed</Caption>
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'flex-start' }}>
          <MapControl variant="operators" />
          <MapControl variant="operators" expanded={false} />
        </View>
      </View>
      <View style={{ gap: 8 }}>
        <Caption>heatmap — expanded / collapsed</Caption>
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'flex-start' }}>
          <MapControl variant="heatmap" options={HEATMAP_OPTIONS} />
          <MapControl variant="heatmap" expanded={false} />
        </View>
      </View>
      <View style={{ gap: 8 }}>
        <Caption>cameras — expanded / collapsed</Caption>
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'flex-start' }}>
          <MapControl variant="cameras" />
          <MapControl variant="cameras" expanded={false} />
        </View>
      </View>
    </View>
  ),
};
