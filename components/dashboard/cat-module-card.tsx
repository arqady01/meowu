import { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Box, Text } from '@gluestack-ui/themed';
import { Image } from 'expo-image';

import { CatModule } from '@/constants/modules';

type Props = {
  module: CatModule;
  onPress?: () => void;
  footer?: ReactNode;
};

export function CatModuleCard({ module, onPress, footer }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={module.title}
      disabled={!onPress}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed, !onPress && styles.disabled]}
    >
      <Box alignItems="center" justifyContent="center" py="$4">
        <Image source={module.asset} style={styles.icon} contentFit="contain" />
        <Text mt="$3" color="#3D2C1F" fontWeight="$bold" textAlign="center">
          {module.title}
        </Text>
        {footer}
      </Box>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  pressed: {
    opacity: 0.6,
  },
  disabled: {
    opacity: 0.65,
  },
  icon: {
    width: 56,
    height: 56,
  },
});

