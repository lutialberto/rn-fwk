import { StyleSheet } from 'react-native';
import React from 'react';
import { ModalFwkProps } from 'fwk/components/containers/modals/modal/ModalFwkProps';
import ModalFwk from 'fwk/components/containers/modals/modal/ModalFwk';
import TextApp from 'components/texts/textApp/TextApp';
import { Colors, useTheme } from 'hooks/theme';

const BottomSheetApp = ({
  modalProps,
  children,
  childrenContainerStyle,
  visibleContainerStyle,
}: ModalFwkProps) => {
  const { getColors } = useTheme();
  const colors = getColors();
  const styles = getStyles(colors);
  return (
    <ModalFwk
      modalProps={modalProps}
      visibleContainerStyle={[styles.visibleContainer, visibleContainerStyle]}
      childrenContainerStyle={childrenContainerStyle}
      closeIconColor={colors.themeColors.fontColor}
      transparentAreaBackgroundColor={colors.themeColors.lowOpacityColor}
      variant='bottomSheet'
    >
      {children ?? <TextApp> GenericModal</TextApp>}
    </ModalFwk>
  );
};

export default BottomSheetApp;


const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    visibleContainer: {
      width: '100%',
      padding: 10,
      backgroundColor: colors.themeColors.backgroundColor,
      borderRadius: 15,
      borderBottomEndRadius: 0,
      borderBottomStartRadius: 0,
    },
  });
};