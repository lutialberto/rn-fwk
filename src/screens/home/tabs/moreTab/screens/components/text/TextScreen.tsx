import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import TextHideableExample from './TextHideableExample';

const TextScreen = () => {
  const {textStyles} = useTextStyles();
  return (
    <ScreenContainerApp showBackButton title="Textos">
      <TextApp>Estilo por defecto</TextApp>
      <TextApp style={textStyles.screenTitle}>Estilo de título</TextApp>
      <TextApp style={textStyles.inputError}>Estilo mensaje error formulario</TextApp>
      <TextApp style={styles.customStyles}>Estilo custom</TextApp>
      <TextHideableExample />
    </ScreenContainerApp>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  customStyles: {
    color: 'green',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
