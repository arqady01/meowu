import { memo } from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import { Image } from 'expo-image';

import { useThemeContext } from '@/context/theme-context';

const ThemeHeroComponent = () => {
  const { selectedTheme } = useThemeContext();

  return (
    <Box
      mt="$4"
      borderRadius="$3xl"
      borderWidth={1}
      borderColor="rgba(255, 255, 255, 0.65)"
      bg="#FDEFE0"
      overflow="hidden"
      shadowColor="#F2C9A4"
      shadowOffset={{ width: 0, height: 12 }}
      shadowOpacity={0.3}
      shadowRadius={24}
      elevation={4}
    >
      <Box p="$4">
        <Text fontSize="$lg" fontWeight="$bold" color="#40312A">
          今日主题 · {selectedTheme.name}
        </Text>
        <Text mt="$1" color="#806D5C">
          {selectedTheme.description}
        </Text>
      </Box>
      <Box alignItems="center" justifyContent="center" bg="#FFF4E9" py="$4">
        <Image source={selectedTheme.asset} style={{ width: 280, height: 200 }} contentFit="contain" />
      </Box>
    </Box>
  );
};

ThemeHeroComponent.displayName = 'ThemeHero';

export const ThemeHero = memo(ThemeHeroComponent);

