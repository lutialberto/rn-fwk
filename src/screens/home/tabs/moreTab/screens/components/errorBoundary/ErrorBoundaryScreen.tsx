import {StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import ComponentWithError from './components/ComponentWithError';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import ErrorBoundaryApp from 'components/containers/errors/errorBoundary/ErrorBoundaryApp';

const ErrorBoundaryScreen = () => {
  const [isErrorComponentVisible, setIsErrorComponentVisible] = React.useState(false);
  const {textStyles} = useTextStyles();

  return (
    <ScreenContainerApp title="Manejo de errores" showBackButton>
      <ErrorBoundaryApp>
        <View style={styles.container}>
          <TextApp style={styles.icon}>🐛</TextApp>
          <TextApp style={textStyles.screenTitle}>react-native-error-boundary</TextApp>
          <TextApp style={styles.text}>
            Presiona el siguiente botón para renderizar un componente que lanzará un error.
          </TextApp>
          <ButtonApp label="Disparar error" onPress={() => setIsErrorComponentVisible(true)} />
          {isErrorComponentVisible && <ComponentWithError />}
        </View>
      </ErrorBoundaryApp>
    </ScreenContainerApp>
  );
};

export default ErrorBoundaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    fontSize: 48,
  },
  text: {
    marginVertical: 16,
  },
});
