import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import {MainScreenNavigationType} from 'navigation/MainStack';
import {useNavigation} from '@react-navigation/native';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';

const MoreTab = () => {
  const navigator = useNavigation<MainScreenNavigationType>();

  const screens = [
    {
      label: 'Texto',
      onPress: () => navigator.navigate('Text'),
    },
    {
      label: 'Botón',
      onPress: () => navigator.navigate('Button'),
    },
    {
      label: 'Tostada',
      onPress: () => navigator.navigate('Toast'),
    },
    {
      label: 'Spinner',
      onPress: () => navigator.navigate('Spinner'),
    },
  ];

  return (
    <ScreenContainerApp>
      <ScrollView contentContainerStyle={styles.buttonsContainer}>
        {screens.map(({label, onPress}) => (
          <ButtonApp key={label} onPress={onPress} label={label} />
        ))}
      </ScrollView>
    </ScreenContainerApp>
  );
};

export default MoreTab;

const styles = StyleSheet.create({
  screenTitle: {
    textAlign: 'center',
  },
  buttonsContainer: {
    gap: 10,
    flex: 1,
    justifyContent: 'center',
  },
});
