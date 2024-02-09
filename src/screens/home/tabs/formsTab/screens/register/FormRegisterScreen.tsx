import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import FormRegister, {FormRegisterProps} from './components/formRegister/FormRegister';
import {MainScreenNavigationType} from 'navigation/MainStack';
import {useNavigation} from '@react-navigation/native';
import {vh} from 'fwk/constants/Dimentions';
import {useToastApp} from 'hooks/toast/useToastApp';

const FormRegisterScreen = () => {
  const navigator = useNavigation<MainScreenNavigationType>();
  const {showToast} = useToastApp();

  const handleSubmit = (data: FormRegisterProps) => {
    navigator.navigate('Home');
    showToast({
      message: `Registración completada!\n${data.email}\n${data.password}`,
      type: 'success',
      positionFromTop: vh * 10,
    });
  };

  return (
    <ScreenContainerApp showBackButton title="Formulario registración">
      <FormRegister onSubmit={handleSubmit} />
    </ScreenContainerApp>
  );
};

export default FormRegisterScreen;

const styles = StyleSheet.create({});
