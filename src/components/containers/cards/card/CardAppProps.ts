import {PropsWithChildren} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface CardAppProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}
