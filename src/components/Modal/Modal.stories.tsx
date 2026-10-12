import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from '../Button';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Core Components/Modal',
  component: Modal,
  args: {
    visible: true,
    validation: 'error',
    title: 'EXCLUIR',
    description: 'Essa ação é irreversível. Deseja continuar?',
  },
  argTypes: {
    visible: { control: 'boolean' },
    validation: { control: 'radio', options: ['error', 'success'] },
    title: { control: 'text' },
    description: { control: 'text' },
    confirmLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
    onConfirm: { action: 'onConfirm' },
    onCancel: { action: 'onCancel' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Modal da biblioteca do Figma (461:10263). `error` confirma uma ação irreversível; ' +
          '`success` avisa que algo terminou. Esc e clique fora valem como "Não" no erro e ' +
          'como "Continuar" no sucesso. Abre num portal por cima da página inteira.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Error: Story = {
  name: 'Erro (EXCLUIR)',
};

export const Success: Story = {
  name: 'Sucesso',
  args: {
    validation: 'success',
    title: 'sucesso!',
    description: 'Seu cadastro foi realizado com sucesso',
  },
};

export const RemoveAttachment: Story = {
  name: 'Excluir anexo',
  args: {
    title: 'EXCLUIR',
    description: 'O arquivo exame-admissional.pdf será removido. Deseja continuar?',
  },
};

function OpenOnPress() {
  const [open, setOpen] = useState(false);
  return (
    <View style={{ alignItems: 'flex-start' }}>
      <Button label="Excluir anexo" variant="contained" onPress={() => setOpen(true)} />
      <Modal
        visible={open}
        title="EXCLUIR"
        description="Essa ação é irreversível. Deseja continuar?"
        onConfirm={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </View>
  );
}

export const Interactive: Story = {
  name: 'Abrir pelo botão',
  parameters: { controls: { disable: true } },
  render: () => <OpenOnPress />,
};
