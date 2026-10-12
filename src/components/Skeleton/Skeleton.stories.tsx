import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { Skeleton } from './Skeleton';
import { SkeletonList } from './SkeletonList';

const meta: Meta<typeof SkeletonList> = {
  title: 'Core Components/Skeleton',
  component: SkeletonList,
  args: { rows: 3, lines: 2, avatarSize: 56, animated: true },
  argTypes: {
    rows: { control: 'number' },
    lines: { control: 'number' },
    avatarSize: { control: 'number' },
    animated: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Espera de lista: bloco em surface.high com a opacidade pulsando devagar (40% e ' +
          'volta, 1,8 s), no formato do cartão das listas do painel. Quem pediu menos ' +
          'movimento no sistema vê os blocos parados. O leitor de tela ouve "Carregando".',
      },
    },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 640, maxWidth: '100%' }}>
        <StoryComp />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SkeletonList>;

export const List: Story = {
  name: 'Lista',
};

// Linha da lista de administradores: avatar de 64 e três linhas de texto.
export const AdminsRow: Story = {
  name: 'Lista de administradores',
  args: { avatarSize: 64, lines: 3, rows: 4 },
};

export const WithoutAvatar: Story = {
  name: 'Sem avatar',
  args: { avatarSize: null },
};

export const Static: Story = {
  name: 'Parado',
  args: { animated: false },
};

export const Blocks: Story = {
  name: 'Blocos soltos',
  parameters: { controls: { disable: true } },
  render: () => (
    <View style={{ gap: 12, alignItems: 'flex-start' }}>
      <Skeleton shape="circle" height={56} />
      <Skeleton width={240} height={16} />
      <Skeleton width="80%" />
      <Skeleton width={120} height={41} />
    </View>
  ),
};
