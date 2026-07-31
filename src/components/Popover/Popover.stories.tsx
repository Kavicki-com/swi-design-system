import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Icon } from '../Icon';
import { Popover, PopoverItem, PopoverSeparator } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    docs: {
      description: {
        component:
          'Menu flutuante ancorado num gatilho. O painel reusa o visual do painel do Combobox, ' +
          'valor por valor, porque era o unico painel flutuante que o DS tinha. Fechar no clique ' +
          'fora e no Esc vale no web; no nativo o consumidor fecha por acao explicita.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

const Caption = ({ children }: { children: string }) => (
  <Text
    style={{
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: 11,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: '#9F9F9F',
      marginBottom: 8,
    }}
  >
    {children}
  </Text>
);

/** Gatilho padrao: o mesmo more_vert que a bolha do chat usa. */
const DotsTrigger = ({ onPress }: { onPress: () => void }) => (
  <Pressable
    accessibilityRole="button"
    accessibilityLabel="Acoes da mensagem"
    onPress={onPress}
    style={{ padding: 2 }}
  >
    <Icon name="more_vert" size={16} color="#F5F5F5" />
  </Pressable>
);

/**
 * O caso real: acoes de uma mensagem do chat. Abre, fecha no clique fora, e
 * "Excluir" troca o conteudo do painel por uma confirmacao no mesmo lugar, sem
 * abrir segunda camada.
 */
export const AcoesDaMensagem: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [confirming, setConfirming] = useState(false);
    const [log, setLog] = useState('nada ainda');

    const close = () => {
      setOpen(false);
      setConfirming(false);
    };

    return (
      <View style={{ padding: 40, backgroundColor: '#171717', minHeight: 340 }}>
        <Caption>gatilho na esquerda, align start</Caption>
        <Popover
          visible={open}
          onDismiss={close}
          align="start"
          accessibilityLabel="Acoes da mensagem"
          testID="acoes"
          trigger={
            <DotsTrigger
              onPress={() => {
                setConfirming(false);
                setOpen((v) => !v);
              }}
            />
          }
        >
          {confirming ? (
            <View style={{ gap: 10, padding: 4, maxWidth: 220 }}>
              <Text style={{ color: '#F5F5F5', fontSize: 13, fontFamily: 'Inter' }}>
                Excluir esta mensagem? Ela vira &quot;Mensagem excluida&quot; para os dois lados.
              </Text>
              <View style={{ flexDirection: 'row', gap: 8 }}>
                <PopoverItem label="Cancelar" onPress={() => setConfirming(false)} />
                <PopoverItem
                  label="Excluir"
                  tone="destructive"
                  onPress={() => {
                    setLog('excluida');
                    close();
                  }}
                />
              </View>
            </View>
          ) : (
            <>
              <PopoverItem
                label="Editar"
                icon="edit"
                onPress={() => {
                  setLog('editar');
                  close();
                }}
              />
              <PopoverItem
                label="Copiar"
                icon="content_copy"
                onPress={() => {
                  setLog('copiar');
                  close();
                }}
              />
              <PopoverSeparator />
              <PopoverItem
                label="Excluir"
                icon="delete_icon"
                tone="destructive"
                onPress={() => setConfirming(true)}
              />
            </>
          )}
        </Popover>
        <Text style={{ color: '#9F9F9F', fontSize: 12, marginTop: 230, fontFamily: 'Inter' }}>
          ultima acao: {log}
        </Text>
      </View>
    );
  },
};

/** Alinhamento pela direita, para gatilho que mora na borda direita. */
export const AlinhadoPelaDireita: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <View
        style={{
          padding: 40,
          backgroundColor: '#171717',
          minHeight: 300,
          alignItems: 'flex-end',
        }}
      >
        <Caption>gatilho na direita, align end</Caption>
        <Popover
          visible={open}
          onDismiss={() => setOpen(false)}
          align="end"
          trigger={<DotsTrigger onPress={() => setOpen((v) => !v)} />}
        >
          <PopoverItem label="Copiar" icon="content_copy" onPress={() => setOpen(false)} />
        </Popover>
      </View>
    );
  },
};

/** Os estados de uma linha, sem interacao, para conferir cor e peso. */
export const Estados: Story = {
  render: () => (
    <View style={{ padding: 40, backgroundColor: '#171717' }}>
      <Caption>default, destrutivo, desabilitado</Caption>
      <View
        style={{
          backgroundColor: '#303030',
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#9F9F9F',
          padding: 8,
          gap: 4,
          minWidth: 176,
          alignSelf: 'flex-start',
        }}
      >
        <PopoverItem label="Editar" icon="edit" />
        <PopoverItem label="Copiar" icon="content_copy" />
        <PopoverSeparator />
        <PopoverItem label="Excluir" icon="delete_icon" tone="destructive" />
        <PopoverItem label="Responder" icon="chat_bubble" disabled />
      </View>
    </View>
  ),
};
