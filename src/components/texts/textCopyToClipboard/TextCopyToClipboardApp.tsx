import {StyleSheet} from 'react-native';
import React from 'react';
import TextCopyToClipboardFwk from 'fwk/components/texts/textCopyToClipboard/TextCopyToClipboardFwk';
import {Colors, useTheme} from 'hooks/theme';
import {useTextStyles} from '../hooks/useTextStyles';

export interface TextCopyToClipboardAppProps {
  textToCopy: string;
}

/**
 * @description Application text copy to clipboard component
 * @example
 * <TextCopyToClipboardApp textToCopy={'texto...'} />
 * @dependencies TextCopyToClipboardFwk, useTextStyles, useTheme
 * @param textToCopy
 */
const TextCopyToClipboardApp = (props: TextCopyToClipboardAppProps) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);
  const {styles: textStyles} = useTextStyles();

  return (
    <TextCopyToClipboardFwk
      textToCopy={props.textToCopy}
      iconColor={colors.themeColors.fontColor}
      textStyle={textStyles.textDefault}
      containerStyle={styles.container}
    />
  );
};

export default TextCopyToClipboardApp;

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      borderColor: colors.themeColors.fontColor,
      borderWidth: 1,
      padding: 5,
      borderRadius: 5,
    },
  });
