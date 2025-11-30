import { Ionicons } from '@expo/vector-icons';
import { Box, Text, VStack } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import { Pressable, StyleSheet } from 'react-native';

import { ThemeOption } from '@/constants/theme-options';

type Props = {
  option: ThemeOption;
  isActive: boolean;
  onSelect: () => void;
};

export function ThemeOptionCard({ option, isActive, onSelect }: Props) {
  return (
    <Pressable onPress={onSelect} style={styles.card}>
      <VStack space="sm" alignItems="center">
        <Box
          style={styles.frame}
          borderRadius="$3xl"
          overflow="hidden"
          borderWidth={isActive ? 2 : 1}
          borderColor={isActive ? '#F0B989' : 'rgba(227, 202, 180, 0.7)'}
          bg={isActive ? '#FFF3E5' : '#FFF9F3'}
        >
          <Image source={option.asset} style={styles.image} contentFit="cover" />
          {isActive && (
            <Box
              position="absolute"
              top={10}
              right={10}
              bg="#F0B989"
              borderRadius="$full"
              w={28}
              h={28}
              alignItems="center"
              justifyContent="center"
            >
              <Ionicons name="checkmark" size={16} color="#fff" />
            </Box>
          )}
        </Box>
        <Text fontSize="$md" fontWeight="$bold" color="#3D2C1F">
          {option.name}
        </Text>
      </VStack>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  frame: {
    width: 160,
    height: 256,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

