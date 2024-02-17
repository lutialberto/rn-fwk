import {StyleSheet, Text} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';

const SplashScreen = () => {
  return (
    <ScreenContainerApp style={styles.container}>
      <Text style={{fontSize: 20}}>SplashScreen loading...</Text>
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
