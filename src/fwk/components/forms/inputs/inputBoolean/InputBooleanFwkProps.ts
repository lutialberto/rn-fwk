import { FieldValues, UseControllerProps } from 'react-hook-form';
import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';

export interface InputBooleanFwkProps <T extends FieldValues> {
  formControl: UseControllerProps<T>
  booleanInput?: {
    style?: StyleProp<TextStyle>;
    enabled?: boolean;
    borderStyle?: StyleProp<ViewStyle>;
    children?: JSX.Element;
  };
}
