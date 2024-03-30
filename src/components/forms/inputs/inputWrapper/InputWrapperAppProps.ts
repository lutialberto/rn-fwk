import {PropsWithChildren} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface InputWrapperAppProps extends PropsWithChildren {
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  error?: string;
}
