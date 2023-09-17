import {StyleProp, ViewStyle} from 'react-native/types';

export interface ScreenContainerFwkProps {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
}
