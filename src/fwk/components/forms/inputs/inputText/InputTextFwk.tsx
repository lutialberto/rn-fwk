import {Pressable, StyleSheet, TextInput, View, Text} from 'react-native';
import React from 'react';
import {InputTextFwkProps} from './InputTextFwkProps';
import {FieldValues, useController} from 'react-hook-form';
import ClearIcon from './ClearIcon.svg';

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
    <View style={styles.container}>
      <TextInput
        {...props.textInput}
        style={[styles.textInput, props.textInput?.style]}
        value={field.value}
        onBlur={field.onBlur}
        onChangeText={value => field.onChange(value)}
        ref={field.ref}
      />
      {props.clearInput && !!field.value && (
        <Pressable onPress={props.clearInput}>
          <ClearIcon style={{color: props.clearIconColor ?? 'grey'}} />
        </Pressable>
      )}
    </View>
  );
}

export default InputTextFwk;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
  },
});
