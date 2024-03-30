import {StyleSheet} from 'react-native';
import React from 'react';
import InputTextFwk from 'fwk/components/forms/inputs/inputText/InputTextFwk';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import InputWrapperApp from '../inputWrapper/InputWrapperApp';
import {InputTextAppProps} from './InputTextAppProps';
import {FieldValues} from 'react-hook-form';
import {Colors, useTheme} from 'hooks/theme';

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
  const {textStyles} = useTextStyles();
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <InputWrapperApp label={props.label} error={props.error} containerStyle={props.containerStyle}>
      <InputTextFwk
        {...props}
        textInput={{
          ...props.textInput,
          style: [textStyles.textDefault, styles.input, props.textInput?.style],
          cursorColor: colors.themeColors.fontColor,
        }}
        clearIconColor={colors.themeColors.fontColor}
      />
    </InputWrapperApp>
  );
}

export default InputTextApp;

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    input: {
      backgroundColor: 'transparent',
      padding: 5,
      color: colors.themeColors.fontColor,
    },
  });
