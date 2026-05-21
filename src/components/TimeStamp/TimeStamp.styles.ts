import { View } from 'react-native';
import styled from 'styled-components/native';

// Pill min-width:40 compensa o `width:0` no TimeAnchor parent — sem isso
// o filho colapsa via constraint e o text mede width:0.
export const Pill = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.xs}px;
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  background-color: ${({ theme }) => theme.surface.primaryLight};
  min-width: 40px;
`;

// Triangle: 'left: 50%' centraliza VISUALMENTE em RN porque Yoga trata
// width:0 + borders extendendo dos dois lados do ponto-zero (diferente
// de CSS web onde borders ficam DENTRO do width). CSS web precisaria
// margin-left:-(width/2) pra compensar, mas em RN isso desloca o centro.
export const Triangle = styled(View)`
  position: absolute;
  top: -9px;
  left: 50%;
  width: 0;
  height: 0;
  border-left-width: 4.5px;
  border-right-width: 4.5px;
  border-bottom-width: 9px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${({ theme }) => theme.surface.primaryLight};
`;
