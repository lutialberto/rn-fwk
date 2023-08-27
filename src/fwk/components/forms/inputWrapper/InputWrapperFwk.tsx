import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { InputWrapperFwkProps } from './InputWrapperFwkProps'

/**
 * @description Framework input wrapper component
 * @example
 * <InputWrapperFwk
 *  label={{ value: 'GenericLabel' }}
 *  error={{ value: 'GenericError' }}
 *  childrenStyle={styles.children}
 * >
 *  <Text>GenericInput</Text>
 * </InputWrapperFwk>
 * @param children - input wrapper children
 * @param childrenStyle - style of the children container
 * @param label - label of the input wrapper
 * @param error - error of the input wrapper
 */
const InputWrapperFwk = ({ children, childrenStyle, label, error }: InputWrapperFwkProps) => {
  return (
    <View>
      {label?.component ?? <Text style={label?.style}>{label?.value}</Text>}
      <View style={childrenStyle}>
        {children}
      </View>
      {error.value !== '' && (error.component ?? <Text style={error?.style}>{error.value}</Text>)}
    </View>
  )
}

export default InputWrapperFwk

const styles = StyleSheet.create({
})