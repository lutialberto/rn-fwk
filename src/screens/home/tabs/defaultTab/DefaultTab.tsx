import {StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';

const DefaultTab = () => {
  const {textStyles} = useTextStyles();
  return (
    <ScreenContainerApp style={styles.screenContainer}>
      <TextApp style={[textStyles.screenTitle, styles.screenTitle]}>
        Esta aplicación tiene los siguientes objetivos:{' '}
      </TextApp>
      <View style={styles.objectivesContainer}>
        <TextApp>
          - Desarrollar componentes genéricos con 3 niveles de desarrollo: factory, app e instancia.
        </TextApp>
        <TextApp>
          Factory: define la implementación, la funcionalidad y la interfaz. Debe ser
          suficientemente genérico como para poder ser usada en calquier app.
        </TextApp>
        <TextApp>
          App: se apoya en el de factory, en caso de existir alguno. Complementa y/o sobreescribe
          con configuración específica para la app en cuestión.
        </TextApp>
        <TextApp>
          Instancia: es la utilizada en las pantallas / componentes / hooks de la app.
        </TextApp>

        <TextApp>
          - Documentar con ejemplos, snippets y comentarios como utilizar los hooks / componentes y
          cuales son sus dependencias.
        </TextApp>

        <TextApp>
          - Definir un criterio claro sobre estructurar un proyecto que sea escalable y mantenible.
        </TextApp>
        <TextApp>- </TextApp>
      </View>
    </ScreenContainerApp>
  );
};

export default DefaultTab;

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 15,
  },
  screenTitle: {
    textAlign: 'center',
  },
  objectivesContainer: {
    marginTop: 20,
  },
});
