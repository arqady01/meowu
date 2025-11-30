import { Box, HStack, Text, VStack } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CatModuleCard } from '@/components/dashboard/cat-module-card';
import { SoftBackground } from '@/components/dashboard/soft-background';
import { ThemeBackground } from '@/components/dashboard/theme-background';
import { CAT_MODULES, CatModule } from '@/constants/modules';

type ModuleGridItem = CatModule | null;

const GRID_COLUMNS = 4;
const MIN_GRID_CELLS = 8;

export default function DashboardScreen() {
  const router = useRouter();

  const modulesGrid = useMemo<ModuleGridItem[]>(() => {
    const items: ModuleGridItem[] = [...CAT_MODULES];
    const targetLength = Math.max(MIN_GRID_CELLS, Math.ceil(items.length / GRID_COLUMNS) * GRID_COLUMNS);
    while (items.length < targetLength) {
      items.push(null);
    }
    return items;
  }, []);

  const renderItem: ListRenderItem<ModuleGridItem> = ({ item }) => {
    if (!item) {
      return <Box style={styles.placeholder} />;
    }

    const route = item.route;
    return <CatModuleCard module={item} onPress={route ? () => router.push(route) : undefined} />;
  };

  const keyExtractor = useCallback((item: ModuleGridItem, index: number) => (item ? item.id : `placeholder-${index}`), []);

  return (
    <Box flex={1}>
      <ThemeBackground />
      <SoftBackground />
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={modulesGrid}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          numColumns={GRID_COLUMNS}
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<DashboardHeader />}
        />
      </SafeAreaView>
    </Box>
  );
}

function DashboardHeader() {
  return (
    <VStack space="lg" mb="$4">
      <HStack alignItems="center" justifyContent="space-between">
        <HStack alignItems="center" space="md">
          <Box
            borderRadius="$full"
            overflow="hidden"
            borderWidth={2}
            borderColor="rgba(255, 255, 255, 0.6)"
            shadowColor="#EFC9A4"
            shadowOffset={{ width: 0, height: 4 }}
            shadowOpacity={0.25}
            shadowRadius={10}
          >
            <Image source={require('@/assets/icons/profile.png')} style={{ width: 64, height: 64 }} contentFit="cover" />
          </Box>
          <VStack>
            <Text fontSize="$md" color="#7A6252">
              喵屋住客
            </Text>
            <Text fontSize="$3xl" fontWeight="$black" color="#3D2C1F">
              花卷
            </Text>
          </VStack>
        </HStack>
        <Box
          px="$4"
          py="$2"
          borderRadius="$full"
          bg="rgba(253, 245, 234, 0.8)"
          borderWidth={1}
          borderColor="rgba(240, 185, 137, 0.55)"
        >
          <Text fontSize="$xs" color="#A88975">
            喵屋 ID · 9201
          </Text>
        </Box>
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 48,
    paddingTop: 16,
  },
  columnWrapper: {
    gap: 12,
  },
  placeholder: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
    minHeight: 120,
  },
});

