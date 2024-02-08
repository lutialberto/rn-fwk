import {StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import CarrouselApp from 'components/containers/carrousel/CarrouselApp';
import CardApp from 'components/containers/cards/card/CardApp';

const CarrouselScreen = () => {
  return (
    <ScreenContainerApp showBackButton title="Carrusel">
      <View style={styles.screenContainer}>
        <CardApp style={{flex: 5}}>
          <CarrouselApp
            items={[
              <TextApp>Page 1 </TextApp>,
              <TextApp>Page 2</TextApp>,
              <TextApp>Page 3</TextApp>,
              <TextApp>Page 4</TextApp>,
              <TextApp>Page 5</TextApp>,
              <TextApp>Page 6</TextApp>,
              <TextApp>Page 7</TextApp>,
              <TextApp>Page 8</TextApp>,
              <TextApp>Page 9</TextApp>,
              <TextApp>Page 10</TextApp>,
            ]}
          />
        </CardApp>
        <CardApp style={{flex: 1}}>
          <CarrouselApp
            items={[
              <TextApp>Page 1 </TextApp>,
              <TextApp>Page 2</TextApp>,
              <TextApp>Page 3</TextApp>,
            ]}
          />
        </CardApp>
      </View>
    </ScreenContainerApp>
  );
};

export default CarrouselScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    gap: 20,
    padding: 20,
  },
});
