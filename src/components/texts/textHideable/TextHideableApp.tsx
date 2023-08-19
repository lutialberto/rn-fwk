import { StyleSheet } from 'react-native'
import React from 'react'
import TextHideableFwk from 'fwk/components/texts/textHideable/TextHideableFwk'
import { TextHideableAppProps } from './TextHideableAppProps'
import { useTextStyles } from '../hooks/useTextStyles'

const TextHideableApp = ({
  hide,
  replaceWith = '*',
  text,
  regex = new RegExp(/./g)
}: TextHideableAppProps) => {
  const { styles } = useTextStyles();

  return (
    <TextHideableFwk
      hide={hide}
      regex={regex}
      replaceWith={replaceWith}
      text={text}
      style={styles.textDefault}
    />
  )
}

export default TextHideableApp

const styles = StyleSheet.create({})