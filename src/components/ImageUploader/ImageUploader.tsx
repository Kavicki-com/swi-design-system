import React, { forwardRef } from 'react';
import { Image as RNImage, View } from 'react-native';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ProgressBar } from '../ProgressBar';
import { useTheme } from '../../theme';
import {
  Container,
  HelperText,
  PreviewSlot,
  RemoveButton,
} from './ImageUploader.styles';
import type { ImageUploaderProps } from './ImageUploader.types';

const DEFAULT_HELPER = 'Selecione arquivos do tipo: JPG ou PNG';
const DEFAULT_TAKE_PHOTO = 'Tirar Foto';
const DEFAULT_PICK_FILE = 'Enviar arquivo';

export const ImageUploader = forwardRef<View, ImageUploaderProps>(
  (
    {
      value,
      progress,
      onTakePhoto,
      onPickFile,
      onRemove,
      helperText = DEFAULT_HELPER,
      takePhotoLabel = DEFAULT_TAKE_PHOTO,
      pickFileLabel = DEFAULT_PICK_FILE,
      showTakePhoto = true,
      disabled = false,
      accessibilityLabel,
      removeAccessibilityLabel = 'Remover imagem',
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    const hasValue = !!value?.uri;
    const ctaDisabled = disabled || hasValue;
    const ctaIconColor = ctaDisabled ? theme.content.primaryLight : theme.content.primary;

    return (
      <Container
        ref={ref}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
      >
        {hasValue ? (
          <PreviewSlot>
            <RNImage
              source={{ uri: value!.uri }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
              accessibilityRole="image"
            />
            {onRemove && !disabled ? (
              <RemoveButton
                accessibilityRole="button"
                accessibilityLabel={removeAccessibilityLabel}
                onPress={onRemove}
              >
                <Icon name="close" size={10} color={theme.content.dark} />
              </RemoveButton>
            ) : null}
          </PreviewSlot>
        ) : (
          <ProgressBar value={progress ?? 0} disabled={disabled} />
        )}

        <HelperText>{helperText}</HelperText>

        {showTakePhoto ? (
          <Button
            label={takePhotoLabel}
            variant="outline"
            fullWidth
            disabled={ctaDisabled}
            onPress={onTakePhoto}
            iconRight={<Icon name="add_a_photo" size={24} color={ctaIconColor} />}
            accessibilityLabel={takePhotoLabel}
          />
        ) : null}

        <Button
          label={pickFileLabel}
          variant="outline"
          fullWidth
          disabled={ctaDisabled}
          onPress={onPickFile}
          iconRight={<Icon name="cloud_upload" size={24} color={ctaIconColor} />}
          accessibilityLabel={pickFileLabel}
        />
      </Container>
    );
  },
);

ImageUploader.displayName = 'ImageUploader';
