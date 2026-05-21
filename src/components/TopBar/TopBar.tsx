import React, { forwardRef } from 'react';
import { type View as RNView } from 'react-native';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { useTheme } from '../../theme';
import { Container, BackSlot, TitleSlot } from './TopBar.styles';
import type { TopBarProps } from './TopBar.types';

/**
 * TopBar — drill-down navigation primitive. Left back-slot (optional)
 * with chevron-left + label, right title slot. Montserrat Bold 14 in
 * both slots (variant `link.m`); back slot uses content.primaryLight
 * (#CAE8D4), title uses content.dark. Figma 353:11629; first consumer:
 * settings/personal-data.
 */
export const TopBar = forwardRef<RNView, TopBarProps>(
  (
    { title, onBack, backLabel = 'Voltar', accessibilityLabel, testID },
    ref,
  ) => {
    const theme = useTheme();
    const backColor = theme.content.primaryLight;
    return (
      <Container ref={ref} testID={testID}>
        {onBack ? (
          <BackSlot
            onPress={onBack}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel ?? backLabel}
          >
            <Icon
              name="keyboard_arrow_left"
              width={24}
              height={24}
              color={backColor}
            />
            <Text variant="link.m" color={backColor}>
              {backLabel}
            </Text>
          </BackSlot>
        ) : null}
        <TitleSlot>
          <Text variant="link.m" color={theme.content.dark}>
            {title}
          </Text>
        </TitleSlot>
      </Container>
    );
  },
);

TopBar.displayName = 'TopBar';
