import {AndroidNativeProps, IOSNativeProps} from '@react-native-community/datetimepicker';

export interface InputDateImplementationProps {
  visible: boolean;
  value?: Date;
  dateTimePickeckProps: AndroidNativeProps | IOSNativeProps;
}
