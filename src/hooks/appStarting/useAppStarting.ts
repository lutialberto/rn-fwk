import { useFontsApp } from './fonts/useFontsApp';

/**
 * @description hook to check if app is ready
 **/
export const useAppStarting = () => {
  const {fontsLoaded} = useFontsApp();

  return {
    appReady: fontsLoaded,
  }
}