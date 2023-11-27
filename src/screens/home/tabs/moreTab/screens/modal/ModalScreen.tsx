import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import ModalApp from 'components/containers/modals/modal/ModalApp';
import TextApp from 'components/texts/textApp/TextApp';

const ModalScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBottomSheet, setShowBottonSheet] = useState(false);
  return (
    <ScreenContainerApp showBackButton title="Modals" style={{gap: 10}}>
      <ButtonApp label={'Modal'} onPress={() => setShowModal(true)} />
      <ButtonApp label={'Bottom sheet'} onPress={() => setShowBottonSheet(true)} />
      <ModalApp
        modalProps={{
          visible: showModal,
          onDismiss: () => setShowModal(false),
        }}>
        <TextApp>Modal</TextApp>
      </ModalApp>
      <ModalApp
        variant="bottomSheet"
        modalProps={{
          visible: showBottomSheet,
          onDismiss: () => setShowBottonSheet(false),
        }}>
        <TextApp>Bottom sheet</TextApp>
      </ModalApp>
    </ScreenContainerApp>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({});
