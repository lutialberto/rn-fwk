import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import FormLogin, {FormLoginProps} from './components/formLogin/FormLogin';
import {MainScreenNavigationType} from 'navigation/MainStack';
import {useNavigation} from '@react-navigation/native';
import {useToastApp} from 'hooks/toast/useToastApp';
import {vh} from 'fwk/constants/Dimentions';

const FormLoginScreen = () => {
  const navigator = useNavigation<MainScreenNavigationType>();
  const {showToast} = useToastApp();

  const handleSubmit = (data: FormLoginProps) => {
    navigator.navigate('Home');
    showToast({
      message: `Login completado!\n${data.email}\n${data.password}`,
      type: 'success',
      positionFromTop: vh * 10,
    });
  };

  return (
    <ScreenContainerApp showBackButton title="Formulario login">
      <FormLogin onSubmit={handleSubmit} />
    </ScreenContainerApp>
  );
};

export default FormLoginScreen;

const styles = StyleSheet.create({});
