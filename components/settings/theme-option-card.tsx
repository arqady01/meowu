import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Box, HStack, Text, VStack } from '@gluestack-ui/themed';
import { Image } from 'expo-image';

import { ThemeOption } from '@/constants/theme-options';

type Props = {
  option: ThemeOption;
  isActive: boolean;
  onSelect: () => void;
};

export function ThemeOptionCard({ option, isActive, onSelect }: Props) {
  return (
    <Pressable onPress={onSelect} style={{ marginBottom: 16 }}>
      <Box
        borderRadius="$3xl"
        borderWidth={1.6}
        borderColor={isActive ? '#F0B989' : 'rgba(227, 202, 180, 0.7)'}
        bg={isActive ? '#FFF3E5' : '#FFF9F3'}
        overflow="hidden"
      >
        <HStack alignItems="center" justifyContent="space-between" px="$4" py="$3" space="md">
          <VStack flex={1}>
            <Text fontSize="$lg" fontWeight="$bold" color="#3D2C1F">
              {option.name}
            </Text>
            <Text mt="$1" color="#806D5C">
              {option.description}
            </Text>
          </VStack>
          {isActive && (
            <Box
              bg="#F0B989"
              borderRadius="$full"
              w={36}
              h={36}
              alignItems="center"
              justifyContent="center"
            >
              <Ionicons name="checkmark" size={20} color="#fff" />
            </Box>
          )}
        </HStack>
        <Box alignItems="center" bg="#FFF6EE">
          <Image source={option.asset} style={{ width: 320, height: 200 }} contentFit="contain" />
        </Box>
      </Box>
    </Pressable>
  );
}

