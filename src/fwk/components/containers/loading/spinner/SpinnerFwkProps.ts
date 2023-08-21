import {StyleProp, ViewStyle} from 'react-native/types';

export interface SpinnerFwkProps {
  visible: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  variant?: 'default' | 'overlap';
}
