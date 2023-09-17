import {Text, TextProps} from 'react-native';
import React from 'react';
import {useTextStyles} from '../hooks/useTextStyles';

/**
 * @description Application text component
 * @example Minimal Example
 * <TextApp>GenericText</TextApp>
 * @example Full Example
 * <TextApp
 *  style={styles.text}
 * >
 *  GenericText
 * </TextApp>
 * @dependencies useTextStyles
 */
const TextApp = (props: TextProps) => {
  const {styles} = useTextStyles();

  return (
    <Text {...props} style={[styles.textDefault, props.style]}>
      {props.children}
    </Text>
  );
};

export default TextApp;
