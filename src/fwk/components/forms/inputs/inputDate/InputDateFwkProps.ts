import {AndroidNativeProps} from '@react-native-community/datetimepicker';
import {FieldValues, UseControllerProps} from 'react-hook-form';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ClearInputProps} from '../../inputClearIconWrapper/InputClearIconWrapperProps';

export interface InputDateFwkProps<T extends FieldValues> extends ClearInputProps {
  formControl: UseControllerProps<T>;
  dateInput: {
    dateStyle?: StyleProp<TextStyle>;
    dateContainerStyle?: StyleProp<ViewStyle>;
    formatDate: (date: Date | undefined) => string;
    datePickerConfig?: AndroidNativeProps;
  };
}
