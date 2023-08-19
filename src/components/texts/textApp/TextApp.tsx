import { StyleSheet, Text, TextProps } from 'react-native'
import React from 'react'
import { Colors, useTheme } from 'hooks/theme'
import { Fonts } from 'hooks/appStarting/fonts/FontFamily';

const TextApp = (props: TextProps) => {
  const { getColors } = useTheme();
  const colors = getColors();
  const styles = getStyles(colors);

  return (
    <Text
      {...props}
      style={[
        styles.text,
        props.style,
      ]}
    >
      {props.children}
    </Text>
  )
}

export default TextApp

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    text: {
      color: colors.themeColors.fontColor,
      fontSize: 16,
      fontFamily: Fonts.PrimaryRegular,
    },
  });
};