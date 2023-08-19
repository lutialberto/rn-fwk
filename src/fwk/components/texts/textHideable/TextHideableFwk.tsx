import { Text } from 'react-native'
import React from 'react'
import { TextHideableFwkProps } from './TextHideableFwkProps'

const TextHideableFwk = ({ hide, regex, replaceWith, text, style }: TextHideableFwkProps) => {
  return (
    <Text style={style}>{hide ? text.replace(regex, replaceWith) : text}</Text>
  )
}

export default TextHideableFwk
