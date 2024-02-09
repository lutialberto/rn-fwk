import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import {useToast} from 'fwk/hooks/useToast';
import {Colors, useTheme} from 'hooks/theme';
import {StyleSheet} from 'react-native';

export const TOAST_TYPES = {
  error: 'error' as ToastType,
  success: 'success' as ToastType,
  info: 'info' as ToastType,
  warning: 'warning' as ToastType,
};

export type ToastType = 'error' | 'success' | 'info' | 'warning';

interface ToastAppProps {
  type?: ToastType;
  message: string;
  durationMiliseconds?: number;
  positionFromTop?: number;
}

/**
 * @description Hook to show toasts
 * @example
 * const {showToast} = useToastsApp();
 * @dependencies useToasts, useTextStyles, useTheme
 */
export const useToastApp = () => {
  const {showToast: showToastFwk} = useToast();
  const {textStyles: textStylesHook} = useTextStyles();
  const {colors} = useTheme();
  const styles = getStyles(colors);

  const textStyles = {
    [TOAST_TYPES.error]: styles.textError,
    [TOAST_TYPES.success]: styles.textSuccess,
    [TOAST_TYPES.info]: styles.textInfo,
    [TOAST_TYPES.warning]: styles.textWarning,
  };

  const containerStyles = {
    [TOAST_TYPES.error]: styles.containerError,
    [TOAST_TYPES.success]: styles.containerSuccess,
    [TOAST_TYPES.info]: styles.containerInfo,
    [TOAST_TYPES.warning]: styles.containerWarning,
  };

  const showToast = ({
    message,
    type = TOAST_TYPES.info,
    durationMiliseconds,
    positionFromTop,
  }: ToastAppProps) => {
    showToastFwk({
      message,
      durationMiliseconds,
      positionFromTop,
      textStyle: [textStylesHook.textDefault, textStyles[type]],
      containerStyle: [styles.containerBase, containerStyles[type]],
    });
  };

  return {showToast};
};

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    containerBase: {
      backgroundColor: colors.themeColors.primary,
    },
    textError: {
      color: colors.nonThemeColors.white,
    },
    containerError: {
      backgroundColor: colors.nonThemeColors.red,
    },
    textSuccess: {
      color: colors.nonThemeColors.white,
    },
    containerSuccess: {
      backgroundColor: colors.nonThemeColors.green,
    },
    textInfo: {
      color: colors.nonThemeColors.black,
    },
    containerInfo: {
      backgroundColor: colors.nonThemeColors.yellow,
    },
    textWarning: {
      color: colors.nonThemeColors.black,
    },
    containerWarning: {
      backgroundColor: colors.nonThemeColors.orange,
    },
  });
