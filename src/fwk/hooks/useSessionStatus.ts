import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {getItemAsync, deleteItemAsync, setItemAsync} from 'expo-secure-store';

type BaseSessionData<T> = {
  customData: T;
  baseData: {
    isSignedIn?: boolean;
  };
  login: (customData: T) => void;
  logout: () => void;
};

const INITIAL_CUSTOM_DATA: BaseSessionData<{}>['customData'] = {
  // content: {},
};

const useDataImpl = create<BaseSessionData<unknown>>()(
  persist(
    set => ({
      customData: INITIAL_CUSTOM_DATA,
      baseData: {
        isSignedIn: undefined,
      },
      login: (customData: unknown) =>
        set(() => ({
          customData,
          baseData: {
            isSignedIn: true,
          },
        })),
      logout: () =>
        set(() => ({
          customData: INITIAL_CUSTOM_DATA,
          baseData: {
            isSignedIn: false,
          },
        })),
    }),
    {
      name: `session-status-storage`,
      storage: createJSONStorage(() => ({
        getItem: name => getItemAsync(name),
        removeItem: name => deleteItemAsync(name),
        setItem: (name: string, value: string) => setItemAsync(name, value),
      })),
      version: 1,
    },
  ),
);

export const useSessionStatus = useDataImpl as {
  <T>(): BaseSessionData<T>;
  <T, U>(selector: (s: BaseSessionData<T>) => U): U;
};
