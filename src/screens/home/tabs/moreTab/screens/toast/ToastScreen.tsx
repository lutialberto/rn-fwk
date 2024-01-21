import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import {useToastApp} from 'hooks/toast/useToastApp';
import TextApp from 'components/texts/textApp/TextApp';
import SectionList, {SectionListProps} from 'components/containers/sectionList/SectionList';

const ToastScreen = () => {
  const {showToast} = useToastApp();

  const handleSuccess = () => {
    showToast({
      message: 'Éxito',
      type: 'success',
    });
  };

  const list: SectionListProps = {
    sections: [
      {
        name: 'Tipos de tostadas',
        items: [
          {
            name: 'Éxito',
            onPress: () => showToast({message: 'Éxito', type: 'success'}),
          },
          {
            name: 'Error',
            onPress: () => showToast({message: 'Error', type: 'error'}),
          },
          {
            name: 'Info',
            onPress: () => showToast({message: 'Info', type: 'info'}),
          },
          {
            name: 'Alerta',
            onPress: () => showToast({message: 'Alerta', type: 'warning'}),
          },
        ],
      },
      {
        name: 'Duración',
        items: [
          {
            name: '0.5 segundos',
            onPress: () => showToast({message: '0.5 segundos', durationMiliseconds: 500}),
          },
          {
            name: '2 segundos',
            onPress: () => showToast({message: '2 segundos', durationMiliseconds: 2000}),
          },
          {
            name: '5 segundos',
            onPress: () => showToast({message: '5 segundos', durationMiliseconds: 5000}),
          },
        ],
      },
      {
        name: 'Posición desde el tope',
        items: [
          {
            name: 'A 10 del tope',
            onPress: () => showToast({message: 'A 10 del tope', positionFromTop: 10}),
          },
          {
            name: 'En el medio',
            onPress: () => showToast({message: 'En el medio', positionFromTop: 0}),
          },
          {
            name: 'Abajo',
            onPress: () => showToast({message: 'Abajo'}),
          },
        ],
      },
    ],
  };

  return (
    <ScreenContainerApp showBackButton title="Tostadas">
      <SectionList sections={list.sections} />
    </ScreenContainerApp>
  );
};

export default ToastScreen;

const styles = StyleSheet.create({});
