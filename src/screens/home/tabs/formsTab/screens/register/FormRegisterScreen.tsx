import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import FormRegister, {FormRegisterProps} from './components/formRegister/FormRegister';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import {MainScreenNavigationType} from 'navigation/MainStack';
import {useNavigation} from '@react-navigation/native';
import {vh} from 'fwk/constants/Dimentions';
import {useToastApp} from 'hooks/toast/useToastApp';

const FormRegisterScreen = () => {
  const {styles} = useTextStyles();
  const navigator = useNavigation<MainScreenNavigationType>();
  const {showToast} = useToastApp();

  const handleSubmit = (data: FormRegisterProps) => {
    navigator.navigate('Home');
    showToast({
      message: `Login completado!\n${data.email}\n${data.password}`,
      type: 'success',
      positionFromTop: vh * 10,
    });
  };

  return (
    <ScreenContainerApp>
      <TextApp style={styles.screenTitle}>Formulario de login</TextApp>
      <FormRegister onSubmit={handleSubmit} />
    </ScreenContainerApp>
  );
};

export default FormRegisterScreen;

const styles = StyleSheet.create({});
