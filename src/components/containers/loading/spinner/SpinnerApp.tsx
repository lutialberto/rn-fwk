import React from 'react';
import SpinnerFwk from 'fwk/components/containers/loading/spinner/SpinnerFwk';
import {SpinnerFwkProps} from 'fwk/components/containers/loading/spinner/SpinnerFwkProps';
import {useTheme} from 'hooks/theme';

/**
 * @description Application spinner component
 * @example Minimal Example
 * <SpinnerApp
 *  visible={true}
 *  style={{
 *   height: 100,//usar este
 *   flex: 1,//o este
 *  }}
 * />
 * @example Full Example
 * <SpinnerApp
 *  visible={true}
 *  style={{
 *   height: 100,//usar este
 *   flex: 1,//o este
 *  }}
 *  variant={'default'}
 * >
 *   <Text>Content</Text>
 * </SpinnerApp>
 * @dependencies SpinnerFwk, useTheme
 * @param visible - spinner visible
 * @param variant - spinner variant
 */
const SpinnerApp = (props: SpinnerFwkProps) => {
  const {colors} = useTheme();

  return <SpinnerFwk {...props} color={colors.themeColors.primary} />;
};

export default SpinnerApp;
