import React from 'react'
import SpinnerFwk from 'fwk/components/containers/loading/spinner/SpinnerFwk'
import { SpinnerFwkProps } from 'fwk/components/containers/loading/spinner/SpinnerFwkProps'
import { useTheme } from 'hooks/theme'

/**
 * @description Application spinner component
 * @example Minimal Example
 * <SpinnerApp visible={true} />
 * @example Full Example
 * <SpinnerApp
 *  visible={true}
 *  variant={'default'}
 * >
 *   <Text>Content</Text>
 * </SpinnerApp>
 * @param visible - spinner visible
 * @param variant - spinner variant
 */
const SpinnerApp = (props: SpinnerFwkProps) => {
  const { colors } = useTheme();

  return (
    <SpinnerFwk
      {...props}
      color={colors.themeColors.primary}
    />
  )
}

export default SpinnerApp
