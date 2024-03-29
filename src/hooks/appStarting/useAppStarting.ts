import {useScreenCapture} from 'hooks/screenCapture/useScreenCapture';
import {useFontsApp} from './fonts/useFontsApp';
import {useEffect} from 'react';

/**
 * @description hook to check if app is ready
 **/
export const useAppStarting = () => {
  const {fontsLoaded} = useFontsApp();
  const {isScreenCaptureHydrated, init, isScreenCaptureReady} = useScreenCapture();

  useEffect(() => {
    if (isScreenCaptureHydrated) {
      init();
    }
  }, [isScreenCaptureHydrated]);

  return {
    appReady: fontsLoaded && isScreenCaptureReady,
  };
};
