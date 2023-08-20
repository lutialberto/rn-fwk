import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { InputTextFwkProps } from './InputTextFwkProps'
import { FieldValues, useController } from 'react-hook-form'

function InputTextFwk<T extends FieldValues>(props: InputTextFwkProps<T>) {
  const { field } = useController({ ...props.formControl });
  return (
    <View>
      <TextInput
        {...props.textInput}
        value={field.value}
        onBlur={field.onBlur}
        onChangeText={value => field.onChange(value)}
        ref={field.ref}
      />
    </View>
  )
}

export default InputTextFwk

const styles = StyleSheet.create({
})