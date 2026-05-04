import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SideMenu } from './SideMenu';
import type { SideMenuItem } from './SideMenu.types';

const SWI_MENU: SideMenuItem[] = [
  { value: 'home', label: 'HOME', icon: 'home' },
  { value: 'admin', label: 'ADMINISTRADORES', icon: 'manage_accounts' },
  { value: 'employees', label: 'FUNCIONÁRIOS', icon: 'badge' },
  { value: 'monitoring', label: 'MONITORAMENTO', icon: 'desktop_windows' },
  { value: 'reports', label: 'RELATÓRIOS', icon: 'monitoring' },
  { value: 'alerts', label: 'ALERTAS', icon: 'notifications' },
  { value: 'settings', label: 'CONFIGURAÇÕES', icon: 'settings' },
];

const meta: Meta<typeof SideMenu> = {
  title: 'Components/SideMenu',
  component: SideMenu,
  args: {
    items: SWI_MENU,
    defaultValue: 'home',
    fullWidth: false,
  },
  argTypes: {
    fullWidth: { control: 'boolean' },
    onChange: { action: 'change' },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 280, padding: 16 }}>
        <StoryComp />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SideMenu>;

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

export const HomeSelected: Story = { args: { defaultValue: 'home' } };
export const AdminSelected: Story = { args: { defaultValue: 'admin' } };
export const EmployeesSelected: Story = { args: { defaultValue: 'employees' } };
export const SettingsSelected: Story = { args: { defaultValue: 'settings' } };

export const WithDisabledItem: Story = {
  args: {
    items: SWI_MENU.map((item) =>
      item.value === 'admin' ? { ...item, disabled: true } : item,
    ),
  },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  decorators: [(StoryComp) => <View style={{ width: 320, padding: 16 }}><StoryComp /></View>],
};

export const Controlled: Story = {
  name: 'Controlled (value + onChange)',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => {
    const [value, setValue] = useState('reports');
    return (
      <View style={{ gap: 12, width: 280 }}>
        <Caption>{`current: ${value}`}</Caption>
        <SideMenu items={SWI_MENU} value={value} onChange={setValue} />
      </View>
    );
  },
};
