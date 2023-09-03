import { StyleSheet } from 'react-native'
import { Fonts } from 'hooks/appStarting/fonts/FontFamily';
import { Colors, useTheme } from 'hooks/theme';

/**
 * @description - This hook is used to get the styles for the text component
 * @returns - styles and colors
 * @example - const { styles, colors } = useTextStyles();
 * @depencies useTheme
 */
export const useTextStyles = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return {
    styles,
    colors,
  };
}

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
  });
};