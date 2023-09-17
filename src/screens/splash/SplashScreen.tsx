import {StyleSheet, Text} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';

const SplashScreen = () => {
  return (
    <ScreenContainerApp style={styles.container}>
      <Text>Loading...</Text>
    </ScreenContainerApp>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
