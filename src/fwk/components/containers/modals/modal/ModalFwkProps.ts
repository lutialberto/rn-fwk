import {ModalProps, StyleProp, ViewStyle} from 'react-native/types';

export interface ModalFwkProps {
  modalProps: ModalProps;
  children?: JSX.Element | JSX.Element[];
  visibleContainerStyle?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
  closeIconColor?: string;
  transparentAreaBackgroundColor?: string;
  variant?: 'modal' | 'bottomSheet';
}
