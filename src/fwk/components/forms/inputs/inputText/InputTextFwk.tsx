import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { InputTextFwkProps } from './InputTextFwkProps'
import { FieldValues, useController } from 'react-hook-form'

/**
 * @description Framework input text component
 * @example
 * <InputTextFwk
 *  formControl={{ control: control, name: 'genericName' }}
 *  textInput={{ placeholder: 'GenericPlaceholder' }}
 * />
 * @param formControl - form control of the input text
 * @param textInput - text input props
 */
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