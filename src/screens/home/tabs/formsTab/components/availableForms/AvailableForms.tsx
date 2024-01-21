import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from 'navigation/MainStack';
import SectionList, {SectionListProps} from 'components/containers/sectionList/SectionList';

const AvailableForms = () => {
  const navigator = useNavigation<MainScreenNavigationType>();

  const list: SectionListProps = {
    sections: [
      {
        name: 'Prototípicos',
        items: [
          {
            name: 'Login',
            onPress: () => navigator.navigate('Forms/Login'),
          },
          {
            name: 'Register',
            onPress: () => navigator.navigate('Forms/Register'),
          },
        ],
      },
      {
        name: 'Ejemplos prácticos',
        items: [
          {
            name: 'Tipos de input',
            onPress: () => navigator.navigate('Forms/InputTypes'),
          },
          {
            name: 'Validaciones',
            onPress: () => navigator.navigate('Forms/Validations'),
          },
        ],
      },
    ],
  };

  return <SectionList sections={list.sections} />;
};

export default AvailableForms;

const styles = StyleSheet.create({
  buttonsContainer: {
    gap: 10,
  },
});
