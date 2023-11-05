import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';

const TextScreen = () => {
  const {styles} = useTextStyles();
  return (
    <ScreenContainerApp showBackButton title="Titulo pantalla">
      <TextApp style={styles.textDefault}>Texto genérico</TextApp>
      <TextApp style={styles.inputError}>Mensaje error formulario</TextApp>
    </ScreenContainerApp>
  );
};

export default TextScreen;

const styles = StyleSheet.create({});
