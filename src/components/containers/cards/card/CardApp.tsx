import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CardAppProps} from './CardAppProps';
import {Colors, useTheme} from 'hooks/theme';

const CardApp = (props: CardAppProps) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);
  return <View style={[props.style, styles.container]}>{props.children}</View>;
};

export default CardApp;

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.themeColors.cardColor,
      padding: 15,
      borderRadius: 10,
    },
  });
