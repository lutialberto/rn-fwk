import { StyleSheet } from 'react-native'
import React from 'react'
import { InputDateAppProps } from './InputDateAppProps'
import { FieldValues } from 'react-hook-form'
import InputDateFwk from 'fwk/components/forms/inputs/inputDate/InputDateFwk'
import InputWrapperApp from '../inputWrapper/InputWrapperApp'

/**
 * @description Application input date component
 * @example
 * <InputDateApp
 *  formControl={{ name: 'date', control: control }}
 *  label='Date'
 *  error={errors.date?.message}
 * />
 * @dependencies InputDateFwk, InputWrapperApp, react-hook-form
 * @param formControl - form control of the input date
 * @param dateInput - date input props
 */
function InputDateApp<T extends FieldValues>(props: InputDateAppProps<T>) {
  const formatDate = (date?: Date) => {
    if (date === undefined) return ''
    if (props.dateInput?.formatDate) return props.dateInput?.formatDate(date)
    return date?.toLocaleDateString()
  }

  return (
    <InputWrapperApp error={props.error} label={props.label}>
      <InputDateFwk
        {...props}
        dateInput={{
          dateStyle: {},
          dateContainerStyle: {},
          formatDate
        }}
      />
    </InputWrapperApp>
  )
}

export default InputDateApp

const styles = StyleSheet.create({})