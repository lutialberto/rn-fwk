import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { InputWrapperFwkProps } from './InputWrapperFwkProps'

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