import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import CardApp from 'components/containers/cards/card/CardApp';

const CardScreen = () => {
  return (
    <ScreenContainerApp title="Cards" showBackButton>
      <TextApp>
        - Usar la prop children para determinar el conjunto de componentes a contener
      </TextApp>
      <TextApp>
        - Usar la prop styles para redefinir y/o agregar css props al contenedor de children
      </TextApp>

      <CardApp style={styles.card}>
        <TextApp>Aqui va el contenido de una card</TextApp>
      </CardApp>
    </ScreenContainerApp>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  card: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
