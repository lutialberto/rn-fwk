import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import {useToastApp} from 'hooks/toast/useToastApp';
import TextApp from 'components/texts/textApp/TextApp';

const ToastScreen = () => {
  const {showToast} = useToastApp();

  const handleSuccess = () => {
    showToast({
      message: 'Éxito',
      type: 'success',
    });
  };
  return (
    <ScreenContainerApp showBackButton title="Tostadas" style={{gap: 10}}>
      <TextApp>Tipos de tostadas</TextApp>
      <ButtonApp label={'Éxito'} onPress={() => showToast({message: 'Éxito', type: 'success'})} />
      <ButtonApp label={'Error'} onPress={() => showToast({message: 'Error', type: 'error'})} />
      <ButtonApp label={'Info'} onPress={() => showToast({message: 'Info', type: 'info'})} />
      <ButtonApp label={'Alerta'} onPress={() => showToast({message: 'Alerta', type: 'warning'})} />

      <TextApp>Duración</TextApp>
      <ButtonApp
        label={'0.5 segundos'}
        onPress={() => showToast({message: '0.5 segundos', durationMiliseconds: 500})}
      />
      <ButtonApp
        label={'2 segundos'}
        onPress={() => showToast({message: '2 segundos', durationMiliseconds: 2000})}
      />
      <ButtonApp
        label={'5 segundos'}
        onPress={() => showToast({message: '5 segundos', durationMiliseconds: 5000})}
      />

      <TextApp>Posición desde el tope</TextApp>
      <ButtonApp
        label={'A 10 del tope'}
        onPress={() => showToast({message: 'A 10 del tope', positionFromTop: 10})}
      />
      <ButtonApp
        label={'En el medio'}
        onPress={() => showToast({message: 'En el medio', positionFromTop: 0})}
      />
      <ButtonApp label={'Abajo'} onPress={() => showToast({message: 'Abajo'})} />
    </ScreenContainerApp>
  );
};

export default ToastScreen;

const styles = StyleSheet.create({});
