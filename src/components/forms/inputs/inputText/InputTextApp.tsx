import {StyleSheet} from 'react-native';
import React from 'react';
import InputTextFwk from 'fwk/components/forms/inputs/inputText/InputTextFwk';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import InputWrapperApp from '../inputWrapper/InputWrapperApp';
import {InputTextAppProps} from './InputTextAppProps';
import {FieldValues} from 'react-hook-form';

/**
 * @description Application input text component
 * @example
 * <InputTextApp
 *  formControl={{ control: control, name: 'genericName' }}
 *  textInput={{ placeholder: 'GenericPlaceholder' }}
 *  label='GenericLabel'
 *  error='GenericError'
 * />
 * @dependencies InputTextFwk, InputWrapperApp, useTextStyles, react-hook-form
 * @param formControl - form control of the input text
 * @param textInput - text input props
 * @param label - input wrapper label
 * @param error - input wrapper error
 */
function InputTextApp<T extends FieldValues>(props: InputTextAppProps<T>) {
  const {styles} = useTextStyles();
  return (
    <InputWrapperApp label={props.label} error={props.error}>
      <InputTextFwk
        {...props}
        textInput={{
          ...props.textInput,
          style: [styles.textDefault, styles2.input, props.textInput?.style],
        }}
      />
    </InputWrapperApp>
  );
}

export default InputTextApp;

const styles2 = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
