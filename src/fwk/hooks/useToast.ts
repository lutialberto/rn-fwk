import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import Toast from 'react-native-root-toast';

export interface ToastProps {
  message: string;
  durationMiliseconds?: number;
  positionFromTop?: number;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

/**
 * @description Hook to show toasts
 * @example
 * const {showToast} = useToasts();
 * @dependencies react-native-root-toast
 */
export const useToast = () => {
  const showToast = ({
    message,
    durationMiliseconds = Toast.durations.LONG,
    positionFromTop = Toast.positions.BOTTOM,
    textStyle,
    containerStyle,
  }: ToastProps) => {
    Toast.show(message, {
      duration: durationMiliseconds,
      position: positionFromTop,
      textStyle,
      containerStyle,
    });
  };

  return {showToast};
};
