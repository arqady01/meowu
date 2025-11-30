import { ImageSourcePropType } from 'react-native';

type ModuleRoute = '/settings';

export type CatModule = {
  id: string;
  title: string;
  asset: ImageSourcePropType;
  accent: string;
  route?: ModuleRoute;
};

export const CAT_MODULES: CatModule[] = [
  {
    id: 'planet',
    title: '星球',
    asset: require('@/assets/icons/medal.png'),
    accent: '#F6C89F',
  },
  {
    id: 'profile',
    title: '资料',
    asset: require('@/assets/icons/bowl.png'),
    accent: '#F4B0B3',
  },
  {
    id: 'consult',
    title: '问诊',
    asset: require('@/assets/icons/nootbook.png'),
    accent: '#B9E8D5',
  },
  {
    id: 'notes',
    title: '记事',
    asset: require('@/assets/icons/bag.png'),
    accent: '#CBD7F6',
  },
  {
    id: 'settings',
    title: '设置',
    asset: require('@/assets/icons/setting.png'),
    accent: '#F5D0A8',
    route: '/settings',
  },
];

