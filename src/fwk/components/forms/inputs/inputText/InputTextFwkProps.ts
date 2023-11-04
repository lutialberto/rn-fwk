import {FieldValues, UseControllerProps} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {ClearInputProps} from '../../inputClearIconWrapper/InputClearIconWrapperProps';

export interface InputTextFwkProps<T extends FieldValues> extends ClearInputProps {
  textInput?: TextInputProps;
  formControl: UseControllerProps<T>;
}
