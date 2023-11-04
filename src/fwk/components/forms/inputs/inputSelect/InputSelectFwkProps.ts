import {FieldValues, UseControllerProps} from 'react-hook-form';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ClearInputProps} from '../../inputClearIconWrapper/InputClearIconWrapperProps';

export interface InputSelectFwkProps<T extends FieldValues> extends ClearInputProps {
  selectInput: {
    style?: StyleProp<TextStyle>;
    options: InputSelectOptionFwkProps[];
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

export interface InputSelectOptionFwkProps {
  label: string;
  value: string;
}
