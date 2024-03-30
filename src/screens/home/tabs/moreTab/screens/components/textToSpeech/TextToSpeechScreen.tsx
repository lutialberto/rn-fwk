import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextToSpeechForm from './components/textToSpeechForm/TextToSpeechForm';

const TextToSpeechScreen = () => {
  return (
    <ScreenContainerApp title="Texto a voz" showBackButton style={styles.screen}>
      <TextToSpeechForm />
    </ScreenContainerApp>
  );
};

export default TextToSpeechScreen;

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 5,
  },
});
