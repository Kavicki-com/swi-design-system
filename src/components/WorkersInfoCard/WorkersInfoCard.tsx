import React, { forwardRef, useCallback, useState } from 'react';
import { type View } from 'react-native';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Toggle } from '../Toggle';
import { useTheme } from '../../theme';
import { elevation } from '../../tokens';
import {
  ActionsColumn,
  ActionsRow,
  AgeText,
  AlertBody,
  AlertContent,
  AlertItem,
  AlertTitle,
  AlertsList,
  BloodRow,
  BloodText,
  Card,
  ChevronWrap,
  ExpandedRow,
  HeaderRow,
  HorizontalDivider,
  IconButton,
  NameAge,
  NameText,
  PauseButton,
  PauseButtonLabel,
  RolePrimary,
  RoleSecondary,
  RoleStack,
  UserData,
  UserInfoCluster,
  UserText,
  VerticalDivider,
} from './WorkersInfoCard.styles';
import type { WorkersInfoCardProps } from './WorkersInfoCard.types';

export const WorkersInfoCard = forwardRef<View, WorkersInfoCardProps>(
  (
    {
      employee,
      enabled,
      onEnabledChange,
      expanded: controlledExpanded,
      defaultExpanded = false,
      onExpandedChange,
      alerts = [],
      onDelete,
      onChat,
      onLocation,
      onExamHistory,
      onCallEmployee,
      onSendBreakAlert,
      examHistoryLabel = 'Histórico de exames clínicos',
      callEmployeeLabel = 'Ligar para o funcionário',
      sendBreakAlertLabel = 'Enviar alerta de pausa',
      fullWidth = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    const isExpandedControlled = controlledExpanded !== undefined;
    const [uncontrolledExpanded, setUncontrolledExpanded] = useState(defaultExpanded);
    const expanded = isExpandedControlled ? controlledExpanded : uncontrolledExpanded;

    const handleToggleExpanded = useCallback(() => {
      const next = !expanded;
      if (!isExpandedControlled) setUncontrolledExpanded(next);
      onExpandedChange?.(next);
    }, [expanded, isExpandedControlled, onExpandedChange]);

    return (
      <Card
        ref={ref}
        accessibilityLabel={accessibilityLabel ?? employee.name}
        testID={testID}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start', width: 877 }
        }
      >
        <HeaderRow
          onPress={handleToggleExpanded}
          accessibilityRole="button"
          accessibilityState={{ expanded }}
        >
          <UserInfoCluster>
            <UserData>
              <Avatar uri={employee.avatarUri} size="l" bordered />
              <UserText>
                <NameAge>
                  <NameText numberOfLines={1}>{employee.name}</NameText>
                  <AgeText>{`${employee.age} anos`}</AgeText>
                </NameAge>
                <BloodRow>
                  <Icon name="humidity_mid" size={20} color={theme.surface.error} />
                  <BloodText>{employee.bloodType}</BloodText>
                </BloodRow>
              </UserText>
            </UserData>

            <VerticalDivider />

            <RoleStack>
              <RolePrimary numberOfLines={1}>{employee.role}</RolePrimary>
              {employee.secondaryRole ? (
                <RoleSecondary numberOfLines={1}>{employee.secondaryRole}</RoleSecondary>
              ) : null}
            </RoleStack>

            <VerticalDivider />

            <Toggle value={enabled} onChange={onEnabledChange} />
          </UserInfoCluster>

          <ActionsRow>
            {onDelete ? (
              <IconButton onPress={onDelete} accessibilityRole="button" accessibilityLabel="Excluir">
                <Icon name="delete_icon" size={24} color={theme.content.dark} />
              </IconButton>
            ) : null}
            {onChat ? (
              <IconButton onPress={onChat} accessibilityRole="button" accessibilityLabel="Mensagem">
                <Icon name="chat_bubble" size={24} color={theme.content.dark} />
              </IconButton>
            ) : null}
            {onLocation ? (
              <IconButton onPress={onLocation} accessibilityRole="button" accessibilityLabel="Localização">
                <Icon name="location_on" size={24} color={theme.content.dark} />
              </IconButton>
            ) : null}
          </ActionsRow>

          <ChevronWrap>
            <Icon
              name={expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
              size={20}
              color={theme.content.dark}
            />
          </ChevronWrap>
        </HeaderRow>

        {expanded ? (
          <>
            <HorizontalDivider />
            <ExpandedRow>
              <AlertsList>
                {alerts.map((alert, idx) => (
                  <AlertItem key={`${alert.title}-${idx}`}>
                    <Icon name={alert.icon} size={24} color={theme.content.dark} />
                    <AlertContent>
                      <AlertTitle>{alert.title}</AlertTitle>
                      <AlertBody>{alert.description}</AlertBody>
                    </AlertContent>
                  </AlertItem>
                ))}
              </AlertsList>
              <ActionsColumn>
                {onExamHistory ? (
                  <Button
                    label={examHistoryLabel}
                    variant="outline"
                    fullWidth
                    onPress={onExamHistory}
                  />
                ) : null}
                {onCallEmployee ? (
                  <Button
                    label={callEmployeeLabel}
                    variant="outline"
                    fullWidth
                    onPress={onCallEmployee}
                  />
                ) : null}
                {onSendBreakAlert ? (
                  <PauseButton
                    onPress={onSendBreakAlert}
                    accessibilityRole="button"
                    accessibilityLabel={sendBreakAlertLabel}
                    style={elevation.md}
                  >
                    <PauseButtonLabel>{sendBreakAlertLabel}</PauseButtonLabel>
                  </PauseButton>
                ) : null}
              </ActionsColumn>
            </ExpandedRow>
          </>
        ) : null}
      </Card>
    );
  },
);

WorkersInfoCard.displayName = 'WorkersInfoCard';
