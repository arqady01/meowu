import { useCallback } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HStack, Text, VStack } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';

import { CatModuleCard } from '@/components/dashboard/cat-module-card';
import { SoftBackground } from '@/components/dashboard/soft-background';
import { ThemeHero } from '@/components/dashboard/theme-hero';
import { CAT_MODULES, CatModule } from '@/constants/modules';

export default function DashboardScreen() {
  const router = useRouter();

  const renderItem: ListRenderItem<CatModule> = ({ item }) => (
    <CatModuleCard module={item} onPress={item.route ? () => router.push(item.route) : undefined} />
  );

  const keyExtractor = useCallback((item: CatModule) => item.id, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Box flex={1} bg="#FDF5EA">
        <SoftBackground />
        <FlatList
          data={CAT_MODULES}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<DashboardHeader />}
        />
      </Box>
    </SafeAreaView>
  );
}

function DashboardHeader() {
  return (
    <VStack space="md" mb="$4">
      <Box>
        <Text fontSize="$3xl" fontWeight="$black" color="#3D2C1F">
          喵屋星球
        </Text>
        <Text fontSize="$md" color="#6B5648" mt="$1">
          暖色奶油风的猫咪日程，让灵感与治愈同在。
        </Text>
      </Box>
      <Box
        bg="#FFECD4"
        borderRadius="$3xl"
        px="$4"
        py="$3"
        borderWidth={1}
        borderColor="#F6D8B5"
        shadowColor="#F4C79B"
        shadowOffset={{ width: 0, height: 10 }}
        shadowOpacity={0.25}
        shadowRadius={18}
      >
        <HStack alignItems="center" justifyContent="space-between">
          <VStack flex={1}>
            <Text fontSize="$lg" fontWeight="$bold" color="#3D2C1F">
              今日关怀
            </Text>
            <Text color="#7A6252" mt="$1">
              记得给猫咪补充清水，并查看晚间的互动计划。
            </Text>
          </VStack>
        </HStack>
      </Box>
      <ThemeHero />
      <Text fontSize="$lg" fontWeight="$bold" color="#3D2C1F" mt="$4">
        能量模块
      </Text>
    </VStack>
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
  },
  columnWrapper: {
    gap: 12,
  },
});

