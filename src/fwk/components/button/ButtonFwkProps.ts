import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';

export interface ButtonFwkProps {
  onPress: () => void;
  label?: string;
  enabled?: boolean;
  icon?: JSX.Element;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  labelComponent?: JSX.Element;
}
