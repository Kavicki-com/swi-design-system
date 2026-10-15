import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { AttachmentList } from './AttachmentList';
import type { AttachmentItem } from './AttachmentList.types';

const PHOTO = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=200&q=60';

const ITEMS: AttachmentItem[] = [
  { id: 'a', name: 'inspecao-escavadeira-930E.jpg', kind: 'image', thumbnailUri: PHOTO },
  { id: 'b', name: 'exame-admissional-2026.pdf', kind: 'file' },
  { id: 'v', name: 'Vídeo 1', kind: 'video' },
  { id: 'u', name: 'Áudio 1', kind: 'audio' },
  {
    id: 'c',
    name: 'foto-com-um-nome-de-arquivo-muito-comprido-que-precisa-cortar-no-fim.png',
    kind: 'image',
    thumbnailUri: PHOTO,
  },
];

const meta: Meta<typeof AttachmentList> = {
  title: 'Components/AttachmentList',
  component: AttachmentList,
  args: { items: ITEMS },
  argTypes: {
    onView: { action: 'onView' },
    onDownload: { action: 'onDownload' },
    onRemove: { action: 'onRemove' },
    emptyLabel: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Uma linha por anexo, no molde do exame compacto do Figma (159:15646): miniatura ' +
          'de 56 ou ícone do tipo (clipe, vídeo, áudio), nome em uma linha e botões só de ícone (visualizar, baixar, ' +
          'excluir). Cada botão só aparece com o handler; o item pode restringir as ações.',
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
type Story = StoryObj<typeof AttachmentList>;

export const AllActions: Story = {
  name: 'Visualizar, baixar e excluir',
};

// Visualizar relatório: as imagens abrem e baixam, mas não são excluídas ali.
export const ReadOnly: Story = {
  name: 'Sem excluir',
  render: (args) => <AttachmentList {...args} onRemove={undefined} />,
};

// Cadastro: o arquivo ainda não foi enviado, não há o que baixar.
export const PendingUpload: Story = {
  name: 'Arquivo ainda não enviado',
  args: {
    items: ITEMS.map((item) => ({ ...item, actions: ['view', 'remove'] as const })),
  },
};

export const Busy: Story = {
  name: 'Item excluindo',
  args: { busyIds: ['b'] },
};

export const Empty: Story = {
  name: 'Vazia',
  args: { items: [], emptyLabel: 'Nenhum exame anexado.' },
};

export const Mobile: Story = {
  name: 'Tela estreita',
  parameters: { viewport: { defaultViewport: 'iphone14' } },
};
