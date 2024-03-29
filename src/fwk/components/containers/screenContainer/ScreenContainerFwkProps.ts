import {PropsWithChildren} from 'react';
import {StyleProp, ViewStyle} from 'react-native/types';

export interface ScreenContainerFwkProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}
