import { Image } from 'expo-image';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { useThemeContext } from '@/context/theme-context';

const ThemeBackgroundComponent = () => {
  const { selectedTheme } = useThemeContext();

  return (
    <View pointerEvents="none" style={styles.container}>
      <Image
        key={selectedTheme.id}
        source={selectedTheme.asset}
        style={styles.image}
        contentFit="cover"
        transition={300}
      />
    </View>
  );
};

ThemeBackgroundComponent.displayName = 'ThemeBackground';

export const ThemeBackground = memo(ThemeBackgroundComponent);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
});


