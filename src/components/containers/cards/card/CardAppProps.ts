import {StyleProp, ViewStyle} from 'react-native';

export interface CardAppProps {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
}
