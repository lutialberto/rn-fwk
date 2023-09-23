import {FieldValues, UseControllerProps} from 'react-hook-form';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface InputSelectFwkProps<T extends FieldValues> {
  selectInput: {
    style?: StyleProp<TextStyle>;
    options: {label: string; value: string}[];
    itemStyle?: StyleProp<TextStyle>;
    itemSelectedStyle?: StyleProp<TextStyle>;
  };
  modal?: {
    visibleContainerStyle: StyleProp<ViewStyle>;
    closeIconColor: string;
    transparentAreaBackgroundColor: string;
  };
  formControl: UseControllerProps<T>;
}
