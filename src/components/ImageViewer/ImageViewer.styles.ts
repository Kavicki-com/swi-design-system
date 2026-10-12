import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
`;

export const CloseButton = styled(Pressable)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

/* Palco da imagem: fundo do app atrás da imagem inteira (contain), para as
   faixas que sobram em volta de uma foto de outra proporção não parecerem
   parte dela. */
export const Stage = styled(View)`
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.background};
`;

export const Footer = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
`;
