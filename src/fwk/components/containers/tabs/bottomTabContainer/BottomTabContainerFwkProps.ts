import {StyleProp, ViewStyle} from 'react-native';
import {BottomTabItemFwkProps} from './bottomTabItem/BottomTabItemFwkProps';

export interface BottonTabContainerFwkProps {
  tabItems: BottomTabItemFwkProps[];
  navigatorProps?: {
    tabBarItemStyle?: StyleProp<ViewStyle>;
    barStyle?: StyleProp<ViewStyle>;
    activeColor?: string;
    inactiveColor?: string;
    shitfting?: boolean;
    initialRouteName?: string;
  };
}
