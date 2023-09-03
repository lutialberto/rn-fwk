import { AndroidNativeProps } from '@react-native-community/datetimepicker';
import { FieldValues, UseControllerProps } from 'react-hook-form';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface InputDateFwkProps <T extends FieldValues> {
  formControl: UseControllerProps<T>
  dateInput: {
    dateStyle?: StyleProp<TextStyle>;
    dateContainerStyle?: StyleProp<ViewStyle>;
    formatDate: (date: Date | undefined) => string;
    datePickerConfig?: AndroidNativeProps;
  };
}