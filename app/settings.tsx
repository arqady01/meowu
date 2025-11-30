import { Ionicons } from '@expo/vector-icons';
import { Box, HStack, Text, VStack } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SettingCard } from '@/components/settings/setting-card';
import { useThemeContext } from '@/context/theme-context';

export default function SettingsScreen() {
  const router = useRouter();
  const { selectedTheme } = useThemeContext();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FDF5EA' }} edges={['left', 'right', 'bottom']}>
      <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
        <VStack space="lg">
          <Box>
            <Text fontSize="$xs" color="#A88975" textTransform="uppercase" letterSpacing={2}>
              meowu studio
            </Text>
            <Text fontSize="$3xl" fontWeight="$black" color="#3D2C1F" mt="$1">
              小屋调节
            </Text>
            <Text color="#7A6252" mt="$1">
              为猫咪挑选喜欢的氛围，或开启温柔的提醒。
            </Text>
          </Box>

          <SettingCard
            title="通知提醒"
            description="开启后，喵屋会轻声提示每个暖心计划。"
            trailing={
              <Switch
                trackColor={{ false: '#E4D2C3', true: '#F0B989' }}
                thumbColor="#fff"
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
              />
            }
          />

          <SettingCard
            title="主题布景"
            description={`当前主题：${selectedTheme.name}`}
            onPress={() => router.push('/theme-gallery')}
            trailing={
              <HStack alignItems="center" space="xs">
                <Text color="#A88975">{selectedTheme.name}</Text>
                <Ionicons name="chevron-forward" size={20} color="#A88975" />
              </HStack>
            }
          />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

