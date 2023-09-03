import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors, useTheme } from 'hooks/theme';
import InputBooleanFwk from 'fwk/components/forms/inputs/inputBoolean/InputBooleanFwk';
import { vw } from 'fwk/constants/Dimentions';
import { FieldValues } from 'react-hook-form';
import { InputBooleanAppProps } from './InputBooleanAppProps';
import TextApp from 'components/texts/textApp/TextApp';
import { useTextStyles } from 'components/texts/hooks/useTextStyles';

/**
 * @description Application input boolean component
 * @example
 * <InputBooleanApp
 *  formControl={{ control: control, name: 'genericName' }}
 *  booleanInput={{ enabled: true }}
 *  label='GenericLabel'
 *  error='GenericError'
 * />
 * @dependencies InputBooleanFwk, TextApp, useTheme, vw, useTextStyles, react-hook-form
 * @param formControl - form control of the input boolean
 * @param booleanInput - boolean input props
 * @param label - input wrapper label
 * @param error - input wrapper error
 */
function InputBooleanApp<T extends FieldValues>(props: InputBooleanAppProps<T>) {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const { styles: textStyles } = useTextStyles();

  return (
    <View>
      <View style={styles.container}>
        <InputBooleanFwk
          formControl={props.formControl}
          booleanInput={{
            ...props.booleanInput,
            borderStyle: [
              styles.border,
              !!props.error && styles.inputInvalid,
              !props.booleanInput?.enabled ? styles.inputDisabled : {},
            ],
            children: <View style={[styles.value, styles.trueValue]} />,
          }}
        />
        <TextApp>{props.label}</TextApp>
      </View>
      {props.error && <TextApp style={textStyles.inputError}>{props.error}</TextApp>}
    </View>
  );
};

export default InputBooleanApp;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    border: {
      borderColor: colors.themeColors.fontColor,
      borderWidth: 2,
      backgroundColor: 'transparent',
      aspectRatio: 1,
      marginRight: vw * 2,
      width: vw * 4,
      borderRadius: vw * 4,
    },
    value: {
      flex: 1,
      borderRadius: vw * 4,
    },
    trueValue: {
      backgroundColor: colors.themeColors.primary,
    },
    inputInvalid: {
      borderColor: colors.nonThemeColors.red,
    },
    inputDisabled: {
      borderColor: colors.themeColors.disabledColor,
    },
  });
};
