import {InputTextFwkProps} from 'fwk/components/forms/inputs/inputText/InputTextFwkProps';
import {FieldValues} from 'react-hook-form';
import {StyleProp, ViewStyle} from 'react-native';

export interface InputTextAppProps<T extends FieldValues> extends InputTextFwkProps<T> {
  label?: string;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
}
