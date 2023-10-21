import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface BottomTabItemFwkProps {
  label: string;
  onPress: () => void;
  textStyle: StyleProp<TextStyle>;
  viewStyle: StyleProp<ViewStyle>;
}
