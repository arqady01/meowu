import { DarkTheme, DefaultTheme, ThemeProvider as NavigationProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import 'react-native-reanimated';

import { ThemeProvider } from '@/context/theme-context';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <NavigationProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GluestackUIProvider config={config}>
        <ThemeProvider>
          <StatusBar style="dark" backgroundColor="#FDF5EA" />
          <Stack
            screenOptions={{
              headerShadowVisible: false,
              headerStyle: { backgroundColor: '#FDF5EA' },
              headerTintColor: '#3D2C1F',
            }}
          >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="settings" options={{ title: '设置' }} />
            <Stack.Screen name="theme-gallery" options={{ title: '主题布景' }} />
          </Stack>
        </ThemeProvider>
      </GluestackUIProvider>
    </NavigationProvider>
  );
}
