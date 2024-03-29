import React, {PropsWithChildren} from 'react';
import {usePreventScreenCapture} from 'expo-screen-capture';

/**
 * @description Framework component that prevents screen capture of children
 * @snippet appScreenCapture
 * @example
 * <ScreenCaptureBlockerFwk>
 *  <Text>Screen Capture is blocked</Text>
 * </ScreenCaptureBlockerFwk>
 * @dependencies expo-screen-capture
 * @param children - children to be rendered
 */
const ScreenCaptureBlockerFwk = ({children}: PropsWithChildren) => {
  usePreventScreenCapture();

  return children;
};

export default ScreenCaptureBlockerFwk;
