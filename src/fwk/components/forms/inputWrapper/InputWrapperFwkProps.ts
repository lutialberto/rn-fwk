import {PropsWithChildren} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface InputWrapperFwkProps extends PropsWithChildren {
  childrenStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  label?: {
    value?: string;
    style?: StyleProp<TextStyle>;
    component?: React.ReactNode;
  };
  error: {
    value: string;
    style?: StyleProp<TextStyle>;
    component?: React.ReactNode;
  };
}
