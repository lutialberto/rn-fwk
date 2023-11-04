import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import {MainScreenNavigationType} from 'navigation/MainStack';
import {useNavigation} from '@react-navigation/native';
import {useToastApp} from 'hooks/toast/useToastApp';
import {vh} from 'fwk/constants/Dimentions';
import FormInputTypes, {FormInputTypesProps} from './components/formInputTypes/FormInputTypes';

const FormInputTypesScreen = () => {
  const navigator = useNavigation<MainScreenNavigationType>();
  const {showToast} = useToastApp();

  const handleSubmit = (data: FormInputTypesProps) => {
    navigator.navigate('Home');
    const message = `
      Formulario completado!
      \nTexto:${data.text}
      \nBooleano:${data.boolean}
      \nFecha:${data.date}
      \nOpciones:${data.options?.label}
      \nEmail:${data.email}
      \nContraseña:${data.password}
    `;

    showToast({
      message,
      type: 'success',
      positionFromTop: vh * 10,
    });
  };

  return (
    <ScreenContainerApp showBackButton title="Formulario tipo de inputs">
      <FormInputTypes onSubmit={handleSubmit} />
    </ScreenContainerApp>
  );
};

export default FormInputTypesScreen;

const styles = StyleSheet.create({});
