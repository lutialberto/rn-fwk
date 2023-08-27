import { useFonts } from 'expo-font';

/**
 * @description hook to load fonts
 * @returns {Object} fontsLoaded: boolean
 */
export const useFontsApp = () => {
  const [fontsLoaded] = useFonts({
    'Primary-Thin': require('assets/fonts/Inter-Thin.ttf'), 
    'Primary-ExtraLight': require('assets/fonts/Inter-ExtraLight.ttf'), 
    'Primary-Light': require('assets/fonts/Inter-Light.ttf'), 
    'Primary-Regular': require('assets/fonts/Inter-Regular.ttf'), 
    'Primary-Medium': require('assets/fonts/Inter-Medium.ttf'), 
    'Primary-SemiBold': require('assets/fonts/Inter-SemiBold.ttf'), 
    'Primary-Bold': require('assets/fonts/Inter-Bold.ttf'), 
    'Primary-ExtraBold': require('assets/fonts/Inter-ExtraBold.ttf'), 
    'Primary-Black': require('assets/fonts/Inter-Black.ttf'), 
  });

  return {
    fontsLoaded,
  }

}