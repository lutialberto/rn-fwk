import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextApp from 'components/texts/textApp/TextApp';
import {Colors, useTheme} from 'hooks/theme';

const SectionName = (props: {name: string}) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);
  return <TextApp style={styles.sectionName}>{props.name}</TextApp>;
};

export default SectionName;

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    sectionName: {
      borderBottomWidth: 1,
      borderColor: colors.themeColors.disabledColor,
      color: colors.themeColors.disabledColor,
    },
  });
