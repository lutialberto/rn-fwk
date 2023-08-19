import { Text, TextProps } from 'react-native'
import React from 'react'
import { useTextStyles } from '../hooks/useTextStyles';

const TextApp = (props: TextProps) => {
  const { styles } = useTextStyles();

  return (
    <Text
      {...props}
      style={[
        styles.textDefault,
        props.style,
      ]}
    >
      {props.children}
    </Text>
  )
}

export default TextApp