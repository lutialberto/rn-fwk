import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, useTheme} from 'hooks/theme';
import TextApp from 'components/texts/textApp/TextApp';

const SectionSupportText = (props: {name: string}) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);
  return <TextApp style={styles.sectionName}>{props.name}</TextApp>;
};

export default SectionSupportText;

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    sectionName: {
      color: colors.themeColors.disabledColor,
      fontSize: 13,
    },
  });
