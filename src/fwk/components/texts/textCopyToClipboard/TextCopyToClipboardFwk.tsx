import {Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import * as Clipboard from 'expo-clipboard';
import CopyIcon from 'assets/svg/CopyIcon.svg';
import CheckIcon from 'assets/svg/CheckIcon.svg';

export interface TextCopyToClipboardFwkProps {
  textToCopy: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  iconColor: string;
}

/**
 * @description Framework text copy to clipboard component
 * @example
 * <TextCopyToClipboardFwk
 *  textToCopy={props.textToCopy}
 *  iconColor={colors.themeColors.fontColor}
 *  textStyle={textStyles.textDefault}
 *  containerStyle={styles.container}
 * />
 * @dependencies expo-clipboard
 * @param textToCopy
 * @param iconColor
 * @param textStyle
 * @param containerStyle
 */
const TextCopyToClipboardFwk = (props: TextCopyToClipboardFwkProps) => {
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(props.textToCopy);
    setShowCopySuccess(true);
    setTimeout(() => {
      setShowCopySuccess(false);
    }, 2000);
  };

  return (
    <Pressable onPress={copyToClipboard} style={[styles.container, props.containerStyle]}>
      <Text style={[styles.text, props.textStyle]}>{props.textToCopy}</Text>
      {showCopySuccess ? (
        <CheckIcon width={15} height={15} style={{color: 'green'}} />
      ) : (
        <CopyIcon width={15} height={15} style={{color: props.iconColor}} />
      )}
    </Pressable>
  );
};

export default TextCopyToClipboardFwk;

const styles = StyleSheet.create({
  text: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
