import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface BottonTabContainerFwkProps {
  tabItems: {
    label: string;
    name: string;
    children: JSX.Element;
  }[];
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
