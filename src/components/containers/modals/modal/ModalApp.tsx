import {StyleSheet} from 'react-native';
import React from 'react';
import {ModalFwkProps} from 'fwk/components/containers/modals/modal/ModalFwkProps';
import {Colors, useTheme} from 'hooks/theme';
import ModalFwk from 'fwk/components/containers/modals/modal/ModalFwk';

/**
 * @description Application modal component
 * @example Minimal Example
 * <ModalApp modalProps={{ visible: true, onDismiss: () => { } }} >
 *  <Text>GenericModal</Text>
 * </ModalApp>
 * @example Full Example
 * <ModalApp
 *  modalProps={{ visible: true, onDismiss: () => { } }}
 *  visibleContainerStyle={styles.visibleContainer}
 *  childrenContainerStyle={styles.childrenContainer}
 * >
 *  <Text>GenericModal</Text>
 * </ModalApp>
 * @dependencies ModalFwk, TextApp, useTheme
 * @param modalProps - modal props
 * @param children - modal children
 * @param childrenContainerStyle - style of the children container
 * @param visibleContainerStyle - style of the visible container
 */
const ModalApp = ({
  visibleContainerStyle,
  childrenContainerStyle,
  variant = 'modal',
  ...props
}: ModalFwkProps) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <ModalFwk
      {...props}
      variant={variant}
      visibleContainerStyle={[
        styles.visibleContainer,
        variant === 'modal' ? styles.visibleContainerModal : styles.visibleContainerBottomsheet,
        visibleContainerStyle,
      ]}
      childrenContainerStyle={childrenContainerStyle}
      closeIconColor={colors.themeColors.fontColor}
      transparentAreaBackgroundColor={colors.themeColors.lowOpacityColor}
    />
  );
};

export default ModalApp;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    visibleContainer: {
      backgroundColor: colors.themeColors.backgroundColor,
      borderRadius: 15,
      padding: 15,
    },
    visibleContainerModal: {
      width: '75%',
    },
    visibleContainerBottomsheet: {
      width: '100%',
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
  });
};
