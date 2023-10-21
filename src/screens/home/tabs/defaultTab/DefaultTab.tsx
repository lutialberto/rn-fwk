import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';

const DefaultTab = () => {
  const {styles: hookStyles} = useTextStyles();
  return (
    <ScreenContainerApp style={styles.screenContainer}>
      <TextApp style={[hookStyles.screenTitle, styles.screenTitle]}>
        Esta aplicación tiene los siguientes objetivos:{' '}
      </TextApp>
      <View style={styles.objectivesContainer}>
        <TextApp>- Visualizar y probar las distintas features desarrolladas</TextApp>
        <TextApp>
          - Servir como estructura de proyecto modelo y como estandar para futuras apps
        </TextApp>
        <TextApp>- </TextApp>
      </View>
    </ScreenContainerApp>
  );
};

export default DefaultTab;

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 20,
  },
  screenTitle: {
    textAlign: 'center',
  },
  objectivesContainer: {
    marginTop: 20,
  },
});
