import {StyleProp, ViewStyle} from 'react-native/types';
import {TopTabItemFwkProps} from './topTabItem/TopTabItemFwkProps';

export interface TopTabContainerFwkProps {
  tabItems: TopTabItemFwkProps[];
  navigatorProps?: {
    tabBarItemStyle?: StyleProp<ViewStyle>;
  };
}
