import { PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from 'react';

import { THEME_OPTIONS, ThemeOption } from '@/constants/theme-options';

type ThemeContextValue = {
  options: ThemeOption[];
  selectedTheme: ThemeOption;
  selectedThemeId: string;
  selectTheme: (id: string) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [selectedThemeId, setSelectedThemeId] = useState(THEME_OPTIONS[0].id);

  const selectTheme = useCallback((id: string) => {
    setSelectedThemeId((current) => (current === id ? current : id));
  }, []);

  const selectedTheme = useMemo(() => {
    return THEME_OPTIONS.find((option) => option.id === selectedThemeId) ?? THEME_OPTIONS[0];
  }, [selectedThemeId]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      options: THEME_OPTIONS,
      selectedTheme,
      selectedThemeId,
      selectTheme,
    }),
    [selectedTheme, selectedThemeId, selectTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext 必须在 ThemeProvider 中使用');
  }
  return context;
}

