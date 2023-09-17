import {StyleProp, ViewStyle} from 'react-native/types';

export interface TopTabItemFwkProps {
  name: string;
  children: JSX.Element;
  label: string;
  labelComponent?: (focused: boolean) => JSX.Element;
  tabScreenOptions?: {
    tabBarIndicatorStyle?: StyleProp<ViewStyle>;
  };
}
