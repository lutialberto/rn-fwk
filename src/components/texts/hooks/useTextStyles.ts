import {StyleSheet} from 'react-native';
import {Fonts} from 'hooks/appStarting/fonts/FontFamily';
import {Colors, useTheme} from 'hooks/theme';

/**
 * @description - This hook is used to get the styles for the text component
 * @returns - styles and colors
 * @example - const { textStyles, colors } = useTextStyles();
 * @depencies useTheme
 */
export const useTextStyles = () => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return {
    textStyles: styles,
    colors,
  };
};

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    textDefault: {
      color: colors.themeColors.fontColor,
      fontSize: 16,
      fontFamily: Fonts.PrimaryRegular,
    },
    inputError: {
      color: colors.nonThemeColors.red,
      fontSize: 12,
    },
    inputLabel: {
      color: colors.themeColors.fontColor,
      fontSize: 14,
      fontFamily: Fonts.PrimaryBold,
      textTransform: 'uppercase',
      letterSpacing: 2,
    },
    screenTitle: {
      fontSize: 24,
      textAlign: 'center',
    },
  });
};
