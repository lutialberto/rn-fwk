import {PropsWithChildren} from 'react';
import {StyleProp, ViewStyle} from 'react-native/types';

export interface TopTabItemFwkProps extends PropsWithChildren {
  name: string;
  label: string;
  labelComponent?: (focused: boolean) => React.ReactNode;
  tabScreenOptions?: {
    tabBarIndicatorStyle?: StyleProp<ViewStyle>;
  };
}
