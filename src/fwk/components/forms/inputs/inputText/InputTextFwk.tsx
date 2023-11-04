import {Pressable, StyleSheet, TextInput, View, Text} from 'react-native';
import React from 'react';
import {InputTextFwkProps} from './InputTextFwkProps';
import {FieldValues, useController} from 'react-hook-form';
import InputClearIconWrapper from '../../inputClearIconWrapper/InputClearIconWrapper';

/**
 * @description Framework input text component
 * @example
 * <InputTextFwk
 *  formControl={{ control: control, name: 'genericName' }}
 *  textInput={{ placeholder: 'GenericPlaceholder' }}
 * />
 * @dependencies react-hook-form
 * @param formControl - form control of the input text
 * @param textInput - text input props
 */
function InputTextFwk<T extends FieldValues>(props: InputTextFwkProps<T>) {
  const {field} = useController({...props.formControl});

  return (
    <InputClearIconWrapper
      clearIconColor={props.clearIconColor}
      clearInput={props.clearInput}
      valueIsEmpty={!!field.value?.value}>
      <TextInput
        {...props.textInput}
        value={field.value}
        onBlur={field.onBlur}
        onChangeText={value => field.onChange(value)}
        ref={field.ref}
      />
    </InputClearIconWrapper>
  );
}

export default InputTextFwk;

const styles = StyleSheet.create({});
