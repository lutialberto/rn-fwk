import { Modal, Pressable, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import CloseIcon from './CloseIcon.svg';
import { ModalFwkProps } from './ModalFwkProps';

const ModalFwk = ({
  modalProps,
  children,
  childrenContainerStyle,
  visibleContainerStyle,
  closeIconColor,
  transparentAreaBackgroundColor,
  variant = 'modal',
}: ModalFwkProps) => {
  return (
    <Modal
      {...modalProps}
      transparent
      onRequestClose={modalProps.onDismiss}
    >
      <View style={[
        styles.mainContainer,
        { justifyContent: variant == 'modal' ? 'center' : 'flex-end' }
      ]}>
        <Pressable
          style={[styles.transparentArea, { backgroundColor: transparentAreaBackgroundColor }]}
          onPress={modalProps.onDismiss}
        />
        <View style={visibleContainerStyle}>
          <TouchableOpacity style={styles.closeIconContainer} onPress={modalProps.onDismiss}>
            <CloseIcon style={{ color: closeIconColor, }} />
          </TouchableOpacity>
          <View style={childrenContainerStyle}>
            {children ? children : <Text>GenericModal</Text>}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalFwk;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  transparentArea: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  visibleContainerBottomSheetType: {
    width: '100%',
  },
  closeIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});
