import {InputBooleanFwkProps} from 'fwk/components/forms/inputs/inputBoolean/InputBooleanFwkProps';
import {FieldValues} from 'react-hook-form';
import {StyleProp, ViewStyle} from 'react-native';

export interface InputBooleanAppProps<T extends FieldValues> extends InputBooleanFwkProps<T> {
  label?: string;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
}
