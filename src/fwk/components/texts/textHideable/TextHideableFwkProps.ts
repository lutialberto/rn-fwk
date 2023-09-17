import {StyleProp, TextStyle} from 'react-native';

export interface TextHideableFwkProps {
  text: string;
  hide: boolean;
  regex: RegExp;
  replaceWith: string;
  style?: StyleProp<TextStyle>;
}
