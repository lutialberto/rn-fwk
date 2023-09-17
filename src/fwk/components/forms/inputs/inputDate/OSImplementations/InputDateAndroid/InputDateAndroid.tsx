import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {InputDateImplementationProps} from '../InputDateImplementationProps';
import {DateTimePickerAndroid, AndroidNativeProps} from '@react-native-community/datetimepicker';

const InputDateAndroid = (props: InputDateImplementationProps) => {
  useEffect(() => {
    if (props.visible) {
      DateTimePickerAndroid.open(props.dateTimePickeckProps as AndroidNativeProps);
    }
  }, [props.visible]);

  return <></>;
};

export default InputDateAndroid;

const styles = StyleSheet.create({});
