import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import SecureStore from 'expo-secure-store';
import {Colors, ThemeNameOptions} from './Models';
import {NONE_THEME_PROPS, THEMES_PROPS, THEME_NAME_OPTIONS} from './Constants';

export interface ThemeState {
  selectedTheme: ThemeNameOptions;
  themeOptions: readonly ThemeNameOptions[];
  getColors: () => Colors;
  changeTheme: (newTheme: ThemeNameOptions) => void;
}

export const useTheme = create<ThemeState>()(
  persist(
    (set, get) => ({
      selectedTheme: THEME_NAME_OPTIONS[0],
      themeOptions: THEME_NAME_OPTIONS,
      getColors: () => {
        const currentTheme = get().selectedTheme;
        const themeColors = THEMES_PROPS[currentTheme];
        const colors: Colors = {
          nonThemeColors: NONE_THEME_PROPS,
          themeColors,
        };
        return colors;
      },
      changeTheme: (newTheme: ThemeNameOptions) => set(() => ({selectedTheme: newTheme})),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => ({
        getItem: SecureStore.getItemAsync,
        removeItem: SecureStore.deleteItemAsync,
        setItem: SecureStore.setItemAsync,
      })),
      version: 1,
    },
  ),
)