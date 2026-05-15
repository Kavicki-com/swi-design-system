import React, { forwardRef } from 'react';
import { type View as RNView } from 'react-native';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { useTheme } from '../../theme';
import { Container, BackSlot, IconSlot, TitleSlot } from './TopBar.styles';
import type { TopBarProps } from './TopBar.types';

/**
 * TopBar — drill-down navigation primitive. Left back-slot (optional)
 * with chevron-left + label, right title slot. Montserrat Bold 14 in
 * both slots; back slot uses content.primaryLight (#CAE8D4), title uses
 * content.dark. Figma 353:11629; first consumer: settings/personal-data.
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
            <IconSlot>
              <Icon
                name="keyboard_arrow_left"
                width={7.4}
                height={12}
                color={backColor}
              />
            </IconSlot>
            <Text
              color={backColor}
              style={{
                fontFamily: theme.fontFamily.title,
                fontWeight: theme.fontWeight.bold,
                fontSize: theme.fontSize.m,
              }}
            >
              {backLabel}
            </Text>
          </BackSlot>
        ) : null}
        <TitleSlot>
          <Text
            color={theme.content.dark}
            style={{
              fontFamily: theme.fontFamily.title,
              fontWeight: theme.fontWeight.bold,
              fontSize: theme.fontSize.m,
            }}
          >
            {title}
          </Text>
        </TitleSlot>
      </Container>
    );
  },
);

TopBar.displayName = 'TopBar';
