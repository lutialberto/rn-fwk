import { StyleSheet } from 'react-native'
import React from 'react'
import { InputWrapperAppProps } from './InputWrapperAppProps'
import InputWrapperFwk from 'fwk/components/forms/inputWrapper/InputWrapperFwk'
import TextApp from 'components/texts/textApp/TextApp'
import { Colors, useTheme } from 'hooks/theme'

const InputWrapperApp = ({ children, error, label }: InputWrapperAppProps) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  return (
    <InputWrapperFwk
      label={{ component: <TextApp style={styles.label}>{label}</TextApp> }}
      error={{ value: error ?? '', component: <TextApp style={styles.error}>{error}</TextApp> }}
      childrenStyle={[styles.children, !!error && { borderBottomColor: colors.nonThemeColors.red }]}
    >
      {children}
    </InputWrapperFwk>
  )
}

export default InputWrapperApp

const getStyles = (colors: Colors) => StyleSheet.create({
  label: {
  },
  children: {
    borderBottomColor: colors.nonThemeColors.black,
    borderBottomWidth: 1,
  },
  error: {
    color: colors.nonThemeColors.red,
    fontSize: 12,
  }
})