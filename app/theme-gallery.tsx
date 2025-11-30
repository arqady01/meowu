import { Text, VStack } from '@gluestack-ui/themed';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemeOptionCard } from '@/components/settings/theme-option-card';
import { useThemeContext } from '@/context/theme-context';

export default function ThemeGalleryScreen() {
  const { options, selectedThemeId, selectTheme } = useThemeContext();

  const renderItem = ({ item }: { item: (typeof options)[number] }) => (
    <ThemeOptionCard option={item} isActive={selectedThemeId === item.id} onSelect={() => selectTheme(item.id)} />
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        ListHeaderComponent={
          <VStack space="xs" mb="$6">
            <Text fontSize="$3xl" fontWeight="$black" color="#3D2C1F">
              主题
            </Text>
          </VStack>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FDF5EA',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 48,
    paddingTop: 16,
    gap: 16,
  },
  columnWrapper: {
    gap: 12,
  },
});

