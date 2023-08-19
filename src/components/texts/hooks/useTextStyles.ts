import { StyleSheet } from 'react-native'
import { Fonts } from 'hooks/appStarting/fonts/FontFamily';
import { Colors, useTheme } from 'hooks/theme';

export const useTextStyles = () => {
  const { getColors } = useTheme();
  const colors = getColors();
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
  });
};