import {StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';
import React from 'react';
import {ButtonAppProps} from './ButtonAppProps';
import {ButtonFwk} from 'fwk/components';
import {useButtonVariants} from '../../../fwk/components/button/hooks/useButtonVariants';
import TextApp from 'components/texts/textApp/TextApp';
import {Colors, useTheme} from 'hooks/theme';
import {vw} from 'fwk/constants/Dimentions';
import {Variant} from './models/Variant';

/**
 * @description Application button component
 * @snippet appButton
 * @example Minimal Example
 * <ButtonApp onPress={() => { }} />
 * @example Full Example
 * <ButtonApp
 *  variant={'default'}
 *  enabled={true}
 *  onPress={() => { }}
 *  label={'Button'}
 *  icon={<Icon name={'check'} />}
 *  containerStyle={styles.container}
 *  labelStyle={styles.label}
 * />
 * @dependencies ButtonFwk, useButtonVariants, TextApp, useTheme, vw
 * @param variant - button variant
 * @param enabled - button enabled
 * @param onPress - function to execute when the button is pressed and enabled
 * @param label - button label
 * @param icon - button icon
 * @param containerStyle - style of the button container
 * @param labelStyle - style of the button label
 */

const ButtonApp = ({
  variant = 'default',
  enabled = true,
  containerStyle,
  labelStyle,
  labelComponent,
  ...props
}: ButtonAppProps) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  const {getContainerStyle, getLabelStyle} = useButtonVariants<Variant>({
    baseStyles: {
      container: styles.baseContainer as StyleProp<ViewStyle>,
      label: styles.baseLabel as StyleProp<TextStyle>,
    },
    containerStyles: {
      default: {
        container: styles.defaultContainer as StyleProp<ViewStyle>,
        containerDisabled: styles.defaultDisabledContainer as StyleProp<ViewStyle>,
      },
      outline: {
        container: styles.outlineContainer as StyleProp<ViewStyle>,
        containerDisabled: styles.outlineDisabledContainer as StyleProp<ViewStyle>,
      },
      textOnly: {
        container: {},
        containerDisabled: styles.outlineDisabledContainer as StyleProp<ViewStyle>,
      },
    },
    labelStyles: {
      default: {
        label: {},
        labelDisabled: {},
      },
      outline: {
        label: styles.outlineLabel as StyleProp<TextStyle>,
        labelDisabled: styles.outlineDisabledLabel as StyleProp<TextStyle>,
      },
      textOnly: {
        label: styles.outlineLabel as StyleProp<TextStyle>,
        labelDisabled: styles.outlineDisabledLabel as StyleProp<TextStyle>,
      },
    },
  });

  const containerStyleFinal = getContainerStyle(enabled, variant, containerStyle);
  const labelStyleFinal = getLabelStyle(enabled, variant, labelStyle);

  return (
    <ButtonFwk
      {...props}
      enabled={enabled}
      containerStyle={containerStyleFinal}
      labelStyle={labelStyleFinal}
      labelComponent={
        labelComponent ?? <TextApp style={labelStyleFinal}>{props.label ?? ''}</TextApp>
      }
    />
  );
};

export default ButtonApp;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    baseContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: vw * 10,
      paddingVertical: vw * 2,
      paddingHorizontal: vw * 3,
      flexDirection: 'row',
    },
    baseLabel: {
      marginLeft: vw,
      textAlign: 'center',
      color: colors.themeColors.fontColor,
    },
    defaultContainer: {
      backgroundColor: colors.themeColors.primary,
    },
    defaultDisabledContainer: {
      backgroundColor: colors.themeColors.disabledColor,
    },
    outlineContainer: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.themeColors.primary,
    },
    outlineDisabledContainer: {
      borderColor: colors.themeColors.disabledColor,
    },
    outlineLabel: {
      color: colors.themeColors.primary,
    },
    outlineDisabledLabel: {
      color: colors.themeColors.disabledColor,
    },
  });
};
