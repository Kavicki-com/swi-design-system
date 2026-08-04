import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Radio } from '../Radio';
import { isSelected } from './RadioGroup.selection';
import { Container, Description, Label, Options } from './RadioGroup.styles';
import type { RadioGroupProps } from './RadioGroup.types';

/**
 * Pergunta de escolha única com N opções.
 *
 * Existe porque o erro de um grupo pertence à PERGUNTA, não a uma das opções:
 * pendurar a legenda num `Radio` deixaria o irmão sem, e a mensagem apareceria
 * deslocada. Mesma relação de `ChipGroup` com `Chip`.
 */
export const RadioGroup = forwardRef<View, RadioGroupProps>(
  (
    {
      label,
      options,
      value,
      onChange,
      description,
      descriptionVariant = 'default',
      size = 'm',
      disabled = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => (
    <Container
      ref={ref}
      accessibilityRole="radiogroup"
      accessibilityLabel={accessibilityLabel ?? label}
      testID={testID}
    >
      {label ? <Label $disabled={disabled}>{label}</Label> : null}

      <Options>
        {options.map((option) => (
          <Radio
            key={option.value}
            label={option.label}
            checked={isSelected(option.value, value)}
            disabled={disabled}
            size={size}
            // O Radio avisa "fui marcado"; qual opção é, quem sabe é o grupo.
            // Ignorar o argumento evita desmarcar no segundo toque: escolha
            // única não tem estado "nenhuma" depois que a pessoa respondeu.
            onChange={() => onChange?.(option.value)}
          />
        ))}
      </Options>

      {description ? (
        <Description $disabled={disabled} $variant={descriptionVariant}>
          {description}
        </Description>
      ) : null}
    </Container>
  ),
);

RadioGroup.displayName = 'RadioGroup';
