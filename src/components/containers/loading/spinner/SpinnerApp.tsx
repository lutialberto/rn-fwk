import React from 'react'
import SpinnerFwk from 'fwk/components/containers/loading/spinner/SpinnerFwk'
import { SpinnerFwkProps } from 'fwk/components/containers/loading/spinner/SpinnerFwkProps'
import { useTheme } from 'hooks/theme'

const SpinnerApp = (props: SpinnerFwkProps) => {
  const { getColors } = useTheme();
  const colors = getColors();

  return (
    <SpinnerFwk
      {...props}
      color={colors.themeColors.primary}
    />
  )
}

export default SpinnerApp
