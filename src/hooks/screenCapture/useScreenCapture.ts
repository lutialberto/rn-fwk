import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {getItemAsync, deleteItemAsync, setItemAsync} from 'expo-secure-store';
import * as ScreenCapture from 'expo-screen-capture';

const preventScreenCapture = async () => {
  await ScreenCapture.preventScreenCaptureAsync();
};

const allowScreenCapture = async () => {
  await ScreenCapture.allowScreenCaptureAsync();
};

/**
 * @description - This hook is used to get the theme
 * @depencies zustand, expo-secure-store
 * @example - const { selectedTheme, themeOptions, colors, changeTheme } = useTheme();
 */
export const useScreenCapture = create<{
  enabled: boolean;
  isScreenCaptureHydrated: boolean;
  isScreenCaptureReady: boolean;
  toggle: () => void;
  setIsScreenCaptureHydrated: () => void;
  init: () => void;
}>()(
  persist(
    (set, get) => ({
      enabled: false,
      isScreenCaptureHydrated: false,
      isScreenCaptureReady: false,
      toggle: () => {
        const currentValue = get().enabled;
        const newValue = !currentValue;
        if (newValue) {
          allowScreenCapture();
        } else {
          preventScreenCapture();
        }
        set(() => ({
          enabled: newValue,
        }));
      },
      init: () => {
        const currentValue = get().enabled;
        if (currentValue) {
          allowScreenCapture();
        } else {
          preventScreenCapture();
        }
        set(() => ({
          isScreenCaptureReady: true,
        }));
      },
      setIsScreenCaptureHydrated: () => {
        set(() => ({
          isScreenCaptureHydrated: true,
        }));
      },
    }),
    {
      name: 'screen-capture-storage',
      storage: createJSONStorage(() => ({
        getItem: name => getItemAsync(name),
        removeItem: name => deleteItemAsync(name),
        setItem: (name: string, value: string) => setItemAsync(name, value),
      })),
      onRehydrateStorage: () => state => {
        state?.setIsScreenCaptureHydrated();
      },
      version: 1,
    },
  ),
);
