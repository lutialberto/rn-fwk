import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import {MainScreenNavigationType} from 'navigation/MainStack';
import {useNavigation} from '@react-navigation/native';
import {useToastApp} from 'hooks/toast/useToastApp';
import {vh} from 'fwk/constants/Dimentions';
import FormValidations, {FormValidationsProps} from './components/formValidations/FormValidations';

const FormValidationsScreen = () => {
  const navigator = useNavigation<MainScreenNavigationType>();
  const {showToast} = useToastApp();

  const handleSubmit = (data: FormValidationsProps) => {
    navigator.navigate('Home');
    const message = `Formulario completado!`;

    showToast({
      message,
      type: 'success',
      positionFromTop: vh * 10,
    });
  };

  return (
    <ScreenContainerApp showBackButton title="Formulario validaciones">
      <FormValidations onSubmit={handleSubmit} />
    </ScreenContainerApp>
  );
};

export default FormValidationsScreen;

const styles = StyleSheet.create({});
