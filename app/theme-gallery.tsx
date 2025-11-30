import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VStack, Text } from '@gluestack-ui/themed';

import { ThemeOptionCard } from '@/components/settings/theme-option-card';
import { useThemeContext } from '@/context/theme-context';

export default function ThemeGalleryScreen() {
  const { options, selectedThemeId, selectTheme } = useThemeContext();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FDF5EA' }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 48 }} showsVerticalScrollIndicator={false}>
        <VStack space="lg">
          <VStack space="xs">
            <Text fontSize="$xs" color="#A88975" textTransform="uppercase" letterSpacing={2}>
              theme scene
            </Text>
            <Text fontSize="$3xl" fontWeight="$black" color="#3D2C1F">
              选择猫咪布景
            </Text>
            <Text color="#7A6252">
              轻触即可切换猫咪场景，动画会立即呈现在首页中。
            </Text>
          </VStack>
          {options.map((option) => (
            <ThemeOptionCard
              key={option.id}
              option={option}
              isActive={selectedThemeId === option.id}
              onSelect={() => selectTheme(option.id)}
            />
          ))}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

