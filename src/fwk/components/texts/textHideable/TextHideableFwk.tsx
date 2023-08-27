import { Text } from 'react-native'
import React from 'react'
import { TextHideableFwkProps } from './TextHideableFwkProps'

/**
 * @description Framework text hideable component
 * @example
 * <TextHideableFwk
 *  hide={true}
 *  regex={/./g}
 *  replaceWith={'*'}
 *  text={'123456789'}
 *  style={styles.text}
 * />
 * @param hide - hide text
 * @param regex - regex to replace
 * @param replaceWith - replace with
 * @param text - text to hide
 * @param style - style of the text
 */
const TextHideableFwk = ({ hide, regex, replaceWith, text, style }: TextHideableFwkProps) => {
  return (
    <Text style={style}>{hide ? text.replace(regex, replaceWith) : text}</Text>
  )
}

export default TextHideableFwk
