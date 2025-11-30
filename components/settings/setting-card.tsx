import { ReactNode } from 'react';
import { Pressable } from 'react-native';
import { Box, HStack, Text, VStack } from '@gluestack-ui/themed';

type Props = {
  title: string;
  description: string;
  icon?: ReactNode;
  trailing?: ReactNode;
  onPress?: () => void;
};

export function SettingCard({ title, description, icon, trailing, onPress }: Props) {
  return (
    <Pressable disabled={!onPress} onPress={onPress} style={{ marginBottom: 16 }}>
      <Box
        bg="#FFF8F0"
        borderRadius="$3xl"
        borderWidth={1}
        borderColor="rgba(238, 200, 162, 0.7)"
        px="$4"
        py="$4"
        shadowColor="#F6D8B2"
        shadowOffset={{ width: 0, height: 10 }}
        shadowOpacity={0.25}
        shadowRadius={18}
        elevation={1}
      >
        <HStack space="md" alignItems="center">
          {icon}
          <VStack flex={1}>
            <Text fontWeight="$bold" color="#3D2C1F">
              {title}
            </Text>
            <Text color="#806D5C" mt="$1">
              {description}
            </Text>
          </VStack>
          {trailing}
        </HStack>
      </Box>
    </Pressable>
  );
}

