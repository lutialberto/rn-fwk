import { useFontsApp } from './fonts/useFontsApp';

export const useAppStarting = () => {
  const {fontsLoaded} = useFontsApp();

  return {
    appReady: fontsLoaded,
  }
}