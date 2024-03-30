import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import SpinnerApp from 'components/containers/loading/spinner/SpinnerApp';

const SpinnerScreen = () => {
  return (
    <ScreenContainerApp showBackButton title="Spinners" style={{gap: 10}}>
      <TextApp>Mientras el siguiente spinner es visible, no se puede ver su children</TextApp>
      <SpinnerApp visible style={styles.spinner}>
        <TextApp>Children no visible</TextApp>
      </SpinnerApp>
      <SpinnerApp visible variant="overlap" style={styles.spinner}>
        <TextApp>
          Spinner variante de superposición, por lo que siempre se ve su children (este texto)
        </TextApp>
      </SpinnerApp>
    </ScreenContainerApp>
  );
};

export default SpinnerScreen;

const styles = StyleSheet.create({
  spinner: {
    borderColor: 'red',
    borderWidth: 1,
    flex: 1,
  },
});
