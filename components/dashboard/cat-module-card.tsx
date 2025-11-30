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
      <Box
        bg="rgba(255,255,255,0.92)"
        borderRadius="$3xl"
        borderWidth={1.2}
        borderColor="rgba(247, 212, 187, 0.6)"
        p="$3"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg={`${module.accent}55`}
          borderRadius="$2xl"
          w={72}
          h={72}
          alignItems="center"
          justifyContent="center"
        >
          <Image source={module.asset} style={styles.icon} contentFit="contain" />
        </Box>
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
    padding: 6,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.65,
  },
  icon: {
    width: 48,
    height: 48,
  },
});

