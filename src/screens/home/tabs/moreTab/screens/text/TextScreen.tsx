import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';

const TextScreen = () => {
  const {styles} = useTextStyles();
  return (
    <ScreenContainerApp showBackButton title="Titulo pantalla">
      <TextApp style={styles.screenTitle}>Estilo de título</TextApp>
      <TextApp style={styles.textDefault}>Estilo texto genérico</TextApp>
      <TextApp style={styles.inputError}>Estilo mensaje error formulario</TextApp>
      <TextApp>Estilo por defecto</TextApp>
    </ScreenContainerApp>
  );
};

export default TextScreen;

const styles = StyleSheet.create({});
