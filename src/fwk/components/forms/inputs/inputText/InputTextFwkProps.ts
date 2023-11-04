import {FieldValues, UseControllerProps} from 'react-hook-form';
import {TextInputProps} from 'react-native';

export interface InputTextFwkProps<T extends FieldValues> {
  textInput?: TextInputProps;
  formControl: UseControllerProps<T>;
  clearInput?: () => void;
  clearIconColor?: string;
}
