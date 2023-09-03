import { StyleSheet } from 'react-native'
import React from 'react'
import { InputDateImplementationProps } from '../InputDateImplementationProps'
import RNDateTimePicker from '@react-native-community/datetimepicker'

const InputDateIos = (props: InputDateImplementationProps) => {
  return (
    <>
      {props.visible &&
        <RNDateTimePicker
          {...props.dateTimePickeckProps}
        />
      }
    </>
  )
}

export default InputDateIos

const styles = StyleSheet.create({})