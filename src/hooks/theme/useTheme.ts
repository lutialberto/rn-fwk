import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import { getItemAsync,deleteItemAsync,setItemAsync} from 'expo-secure-store';
import {Colors, ThemeNameOptions} from './Models';
import {NONE_THEME_PROPS, THEMES_PROPS, THEME_NAME_OPTIONS} from './Constants';

export interface ThemeState {
  selectedTheme: ThemeNameOptions;
  themeOptions: readonly ThemeNameOptions[];
  colors: Colors;
  changeTheme: (newTheme: ThemeNameOptions) => void;
}

/**
 * @description - This hook is used to get the theme
 * @example - const { selectedTheme, themeOptions, colors, changeTheme } = useTheme();
 */
export const useTheme = create<ThemeState>()(
  persist(
    set => ({
      selectedTheme: THEME_NAME_OPTIONS[0],
      themeOptions: THEME_NAME_OPTIONS,
      colors: {
        nonThemeColors: NONE_THEME_PROPS,
        themeColors: THEMES_PROPS[THEME_NAME_OPTIONS[0]],
      },
      changeTheme: (newTheme: ThemeNameOptions) => set(
        () => ({
          selectedTheme: newTheme,
          colors: {
            nonThemeColors: NONE_THEME_PROPS,
            themeColors: THEMES_PROPS[newTheme],
          },
        })
      ),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => ({
        getItem: name => getItemAsync(name),
        removeItem: name => deleteItemAsync(name),
        setItem: (name: string, value: string) => setItemAsync(name, value),
      })),
      version: 1,
    },
  ),
)