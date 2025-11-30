import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Box } from '@gluestack-ui/themed';

const pawPrints = [
  { top: 60, left: 40, size: 28, opacity: 0.22 },
  { top: 140, right: 60, size: 36, opacity: 0.16 },
  { top: 260, left: 80, size: 32, opacity: 0.18 },
  { top: 380, right: 40, size: 34, opacity: 0.14 },
] as const;

const SoftBackgroundComponent = () => {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      backgroundColor="#FDF5EA"
      opacity={0.9}
    >
      <Box
        position="absolute"
        top={-120}
        left="-20%"
        right="-20%"
        height={320}
        borderBottomLeftRadius={480}
        borderBottomRightRadius={480}
        backgroundColor="#FFEAD1"
      />
      {pawPrints.map((print, index) => (
        <View
          key={index}
          style={[
            styles.paw,
            {
              top: print.top,
              left: print.left,
              right: print.right,
              opacity: print.opacity,
              width: print.size,
              height: print.size,
            },
          ]}
        />
      ))}
    </Box>
  );
};

SoftBackgroundComponent.displayName = 'SoftBackground';

export const SoftBackground = memo(SoftBackgroundComponent);

const styles = StyleSheet.create({
  paw: {
    position: 'absolute',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#F0C9A8',
    borderRadius: 999,
    transform: [{ rotate: '20deg' }],
  },
});

