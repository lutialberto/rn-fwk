import { StyleProp, StyleSheet, TextProps, ViewProps } from 'react-native';
import { vw } from 'fwk/constants/Dimentions';
import { Colors, useTheme } from 'hooks/theme';
import { Variant } from '../models/Variant';

export const useButtonStyles = () => {
  const { getColors } = useTheme();
  const colors = getColors();
  const styles = getStyles(colors);

  const getContainerStyle = (enabled: boolean, variant: Variant, containerStyle: StyleProp<ViewProps>) => {
    const containerStyles = {
      default: styles.defaultContainer,
      outline: styles.outlineContainer,
      textOnly: {},
    };
    const containerDisabledStyles = {
      default: !enabled && styles.defaultDisabledContainer,
      outline: !enabled && styles.outlineDisabledContainer,
      textOnly: !enabled && styles.outlineDisabledContainer,
    };

    return [
      styles.baseContainer,
      containerStyles[variant],
      containerStyle,
      containerDisabledStyles[variant],
    ];
  };

  const getLabelStyle = (enabled: boolean, variant: Variant, labelStyle: StyleProp<TextProps>) => {
    const labelStyles = {
      default: {},
      outline: styles.outlineLabel,
      textOnly: styles.outlineLabel,
    };
    const labelDisabledStyles = {
      default: {},
      outline: !enabled && styles.outlineDisabledLabel,
      textOnly: !enabled && styles.outlineDisabledLabel,
    };

    return [styles.baseLabel, labelStyles[variant], labelStyle, labelDisabledStyles[variant]];
  };

  return {
    getContainerStyle,
    getLabelStyle,
  };
}

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