import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputDateAndroid from './OSImplementations/InputDateAndroid/InputDateAndroid';
import InputDateIos from './OSImplementations/InputDateIos/InputDateIos';
import {InputDateFwkProps} from './InputDateFwkProps';
import {FieldValues, useController} from 'react-hook-form';
import {DateTimePickerEvent, AndroidNativeProps} from '@react-native-community/datetimepicker';
import InputClearIconWrapper from '../../inputClearIconWrapper/InputClearIconWrapper';

/**
 * @description Framework input date component
 * @example
 * <InputDateFwk
 *  formControl={{ name: 'date', control: control }}
 *  dateInput={{
 *    formatDate: (date?: Date) => date?.toLocaleDateString(),
 *  }}
 * />
 * @dependencies react-hook-form, @react-native-community/datetimepicker
 * @param formControl - form control of the input date
 * @param dateInput - date input props
 */
function InputDateFwk<T extends FieldValues>({
  formControl,
  dateInput,
  clearIconColor,
  clearInput,
}: InputDateFwkProps<T>) {
  const {field} = useController(formControl);
  const [visible, setVisible] = useState(false);

  const showDatePicker = () => {
    setVisible(true);
  };

  const handleChange = (event: DateTimePickerEvent, date?: Date) => {
    const updateValue = event.type !== 'dismissed';
    if (updateValue) {
      field.onChange(date);
    }
    setVisible(false);
  };

  const dateTimeConfig: AndroidNativeProps = {
    ...dateInput.datePickerConfig,
    value: field.value ?? new Date(),
    onChange: handleChange,
  };

  return (
    <View>
      <InputClearIconWrapper
        clearIconColor={clearIconColor}
        clearInput={clearInput}
        valueIsEmpty={!!field.value}>
        <Pressable style={dateInput?.dateContainerStyle} onPress={showDatePicker}>
          <Text style={dateInput?.dateStyle}>{dateInput?.formatDate(field.value)}</Text>
        </Pressable>
      </InputClearIconWrapper>
      {Platform.OS === 'android' && (
        <InputDateAndroid
          visible={visible}
          value={field.value}
          dateTimePickeckProps={dateTimeConfig}
        />
      )}
      {Platform.OS === 'ios' && (
        <InputDateIos visible={visible} value={field.value} dateTimePickeckProps={dateTimeConfig} />
      )}
    </View>
  );
}

export default InputDateFwk;

const styles = StyleSheet.create({});
