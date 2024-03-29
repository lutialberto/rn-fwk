import {PropsWithChildren} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface BottonTabContainerFwkProps {
  tabItems: TabItemsProps[];
  navigatorProps?: {
    tabsContainerStyle?: StyleProp<ViewStyle>;
    tabItem?: {
      containerStyle?: StyleProp<ViewStyle>;
      labelStyle?: StyleProp<TextStyle>;
      containerFocusStyle?: StyleProp<ViewStyle>;
      labelFocusStyle?: StyleProp<TextStyle>;
    };
    initialRouteName?: string;
  };
}

interface TabItemsProps extends PropsWithChildren {
  label: string;
  name: string;
}
[];
