import { StyleSheet } from 'react-native';
import React from 'react';
import { ModalFwkProps } from 'fwk/components/containers/modals/modal/ModalFwkProps';
import { Colors, useTheme } from 'hooks/theme';
import ModalFwk from 'fwk/components/containers/modals/modal/ModalFwk';

const ModalApp = ({
  visibleContainerStyle,
  childrenContainerStyle,
  ...props
}: ModalFwkProps) => {
  const { getColors } = useTheme();
  const colors = getColors();
  const styles = getStyles(colors);

  return (
    <ModalFwk
      {...props}
      visibleContainerStyle={[styles.visibleContainer, visibleContainerStyle]}
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
      width: '75%',
      backgroundColor: colors.themeColors.backgroundColor,
      borderRadius: 15,
      padding: 15,
    },
  });
};
