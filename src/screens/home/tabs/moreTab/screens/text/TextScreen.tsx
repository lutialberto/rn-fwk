import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';

const TextScreen = () => {
  const {styles: hookStyles} = useTextStyles();
  return (
    <ScreenContainerApp showBackButton title="Textos">
      <TextApp>Estilo por defecto</TextApp>
      <TextApp style={hookStyles.screenTitle}>Estilo de título</TextApp>
      <TextApp style={hookStyles.inputError}>Estilo mensaje error formulario</TextApp>
      <TextApp style={styles.customStyles}>Estilo custom</TextApp>
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
