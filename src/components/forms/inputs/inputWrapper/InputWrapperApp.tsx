import {StyleSheet} from 'react-native';
import React from 'react';
import {InputWrapperAppProps} from './InputWrapperAppProps';
import InputWrapperFwk from 'fwk/components/forms/inputWrapper/InputWrapperFwk';
import TextApp from 'components/texts/textApp/TextApp';
import {Colors, useTheme} from 'hooks/theme';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';

/**
 * @description Application input wrapper component
 * @example
 * <InputWrapperApp
 *  label='GenericInputWrapper'
 *  error='GenericError'
 * >
 *  <Text>GenericInputWrapper</Text>
 * </InputWrapperApp>
 * @dependencies InputWrapperFwk, TextApp, useTheme, useTextStyles
 * @param children - input wrapper children
 * @param error - input wrapper error
 * @param label - input wrapper label
 */
const InputWrapperApp = ({children, error, label, containerStyle}: InputWrapperAppProps) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);
  const {textStyles} = useTextStyles();

  return (
    <InputWrapperFwk
      label={{component: label ? <TextApp style={textStyles.inputLabel}>{label}</TextApp> : <></>}}
      error={{
        value: error ?? '',
        component: <TextApp style={textStyles.inputError}>{error}</TextApp>,
      }}
      containerStyle={containerStyle}
      childrenStyle={[styles.children, !!error && {borderBottomColor: colors.nonThemeColors.red}]}>
      {children}
    </InputWrapperFwk>
  );
};

export default InputWrapperApp;

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    label: {},
    children: {
      borderBottomColor: colors.themeColors.fontColor,
      borderBottomWidth: 1,
    },
  });
