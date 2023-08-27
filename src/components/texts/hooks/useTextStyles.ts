import { StyleSheet } from 'react-native'
import { Fonts } from 'hooks/appStarting/fonts/FontFamily';
import { Colors, useTheme } from 'hooks/theme';

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