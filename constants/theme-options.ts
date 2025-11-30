import { ImageSourcePropType } from 'react-native';

export type ThemeOption = {
  id: string;
  name: string;
  description: string;
  asset: ImageSourcePropType;
};

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'siamese-sit',
    name: '慵懒小憩',
    description: '暹罗猫静静坐着，适合慢生活节奏。',
    asset: require('@/assets/images/themes/siamese-sit.gif'),
  },
  {
    id: 'siamese-lap',
    name: '膝上柔软',
    description: '依偎在膝上的猫咪，传递陪伴感。',
    asset: require('@/assets/images/themes/siamese-lap.gif'),
  },
  {
    id: 'cat-adventure',
    name: '猫咪探险',
    description: '活泼的猫咪探头，带来灵动氛围。',
    asset: require('@/assets/images/themes/cat-1.gif'),
  },
];

