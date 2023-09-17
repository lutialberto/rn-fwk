import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface InputWrapperFwkProps {
  children: JSX.Element;
  childrenStyle?: StyleProp<ViewStyle>;
  label?: {
    value?: string;
    style?: StyleProp<TextStyle>;
    component?: JSX.Element;
  };
  error: {
    value: string;
    style?: StyleProp<TextStyle>;
    component?: JSX.Element;
  };
}
