import {Text, TextProps} from 'react-native';
import React from 'react';
import {useTextStyles} from '../hooks/useTextStyles';

/**
 * @description Application text component
 * @snippet appText
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
  const {textStyles} = useTextStyles();

  return (
    <Text {...props} style={[textStyles.textDefault, props.style]}>
      {props.children}
    </Text>
  );
};

export default TextApp;
