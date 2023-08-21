import React from 'react'
import SpinnerFwk from 'fwk/components/containers/loading/spinner/SpinnerFwk'
import { SpinnerFwkProps } from 'fwk/components/containers/loading/spinner/SpinnerFwkProps'
import { useTheme } from 'hooks/theme'

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
