import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';

const HomeScreen = () => {
  return (
    <ScreenContainerApp style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </ScreenContainerApp>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
