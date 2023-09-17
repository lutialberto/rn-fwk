import {StyleSheet} from 'react-native';
import React from 'react';
import TextHideableFwk from 'fwk/components/texts/textHideable/TextHideableFwk';
import {TextHideableAppProps} from './TextHideableAppProps';
import {useTextStyles} from '../hooks/useTextStyles';

/**
 * @description Application text hideable component
 * @example Minimal Example
 * <TextHideableApp
 *  hide={true}
 *  text='GenericTextHideable'
 * />
 * @example Full Example
 * <TextHideableApp
 *  hide={true}
 *  text='GenericTextHideable'
 *  regex={new RegExp(/./g)}
 *  replaceWith='*'
 * />
 * @dependencies TextHideableFwk, useTextStyles
 * @param hide - hide text
 * @param text - text to hide
 * @param regex - regex to hide
 * @param replaceWith - replace with
 */
const TextHideableApp = ({
  hide,
  replaceWith = '*',
  text,
  regex = new RegExp(/./g),
}: TextHideableAppProps) => {
  const {styles} = useTextStyles();

  return (
    <TextHideableFwk
      hide={hide}
      regex={regex}
      replaceWith={replaceWith}
      text={text}
      style={styles.textDefault}
    />
  );
};

export default TextHideableApp;

const styles = StyleSheet.create({});
