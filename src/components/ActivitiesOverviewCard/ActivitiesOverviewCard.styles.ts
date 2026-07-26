import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

// O Card era um Pressable com o LocationButton (outro Pressable) dentro, o que
// gera <button> aninhado no DOM: React loga validateDOMNesting e o clique no
// ícone de localização borbulha, disparando as DUAS ações. Agora o Card é só o
// contêiner visual e a área clicável é o CardPressable, IRMÃO do LocationButton.
export const Card = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.sm}px ${({ theme }) => theme.padding.m}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.standard};
  gap: ${({ theme }) => theme.gap.m}px;
`;

// Cobre tudo menos o botão de localização. flex: 1 mantém o mesmo
// enquadramento que o Card tinha quando ele próprio era o Pressable.
export const CardPressable = styled(Pressable)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap.m}px;
  min-width: 0;
`;

export const LeftContent = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.l}px;
  flex-shrink: 1;
`;

export const IconSlot = styled(View)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled(View)`
  align-self: stretch;
  width: 1px;
  background-color: ${({ theme }) => theme.content.dark};
  opacity: 0.2;
`;

export const InfoColumn = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gap.xs}px;
  flex-shrink: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m}px;
`;

export const ProgressSlot = styled(View)`
  width: 119px;
  margin-top: ${({ theme }) => theme.gap.xs}px;
`;

export const RightContent = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.m}px;
`;

export const LocationButton = styled(Pressable)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;
