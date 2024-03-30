import {StyleSheet} from 'react-native';
import React from 'react';
import {InputSelectAppProps} from './InputSelectAppProps';
import {FieldValues} from 'react-hook-form';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import InputWrapperApp from '../inputWrapper/InputWrapperApp';
import InputSelectFwk from 'fwk/components/forms/inputs/inputSelect/InputSelectFwk';
import {Colors, useTheme} from 'hooks/theme';
import {vh} from 'fwk/constants/Dimentions';

/**
 * @description App input select component
 * @example Minimal Example
 * <InputSelectApp
 *  formControl={{ control: control, name: 'country' }}
 *  label={'Pais'}
 *  error={errors.country?.message}
 *  selectInput={{
 *   options: [
 *    { label: 'Argentina', value: 'Argentina' },
 *    { label: 'Brasil', value: 'Brasil' },
 *    //...
 *   ],
 *  }}
 * />
 * @dependencies InputWrapperApp, InputSelectFwk, useTextStyles, useTheme
 */
const InputSelectApp = <T extends FieldValues>(props: InputSelectAppProps<T>) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);
  const {textStyles} = useTextStyles();

  return (
    <InputWrapperApp label={props.label} error={props.error} containerStyle={props.containerStyle}>
      <InputSelectFwk
        {...props}
        selectInput={{
          ...props.selectInput,
          style: [textStyles.textDefault, styles.input, props.selectInput?.style],
          itemStyle: [textStyles.textDefault, styles.item],
          itemSelectedStyle: [styles.itemSelected],
        }}
        clearIconColor={colors.themeColors.fontColor}
        modal={{
          visibleContainerStyle: styles.visibleContainer,
          closeIconColor: colors.themeColors.fontColor,
          transparentAreaBackgroundColor: colors.themeColors.lowOpacityColor,
        }}
      />
    </InputWrapperApp>
  );
};

export default InputSelectApp;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    input: {
      backgroundColor: 'transparent',
      height: 40,
      padding: 10,
      borderRadius: 4,
    },
    visibleContainer: {
      width: '75%',
      backgroundColor: colors.themeColors.backgroundColor,
      borderRadius: 15,
      padding: 15,
      maxHeight: vh * 75,
    },
    item: {
      paddingVertical: 10,
    },
    itemSelected: {
      color: colors.themeColors.primary,
      fontWeight: 'bold',
    },
  });
};
