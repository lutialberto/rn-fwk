import {StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useSessionStatus} from 'fwk/hooks/useSessionStatus';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import {useForm} from 'react-hook-form';
import InputTextApp from 'components/forms/inputs/inputText/InputTextApp';

const SessionStatusScreen = () => {
  const {login, logout, baseData, customData} = useSessionStatus<{value: string}>();
  const {isSignedIn} = baseData;
  const {content} = customData;

  const {control, watch, reset} = useForm<{value: string}>({
    defaultValues: {
      value: '',
    },
  });

  const handleLogin = () => {
    login({value: watch('value')});
    reset();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <ScreenContainerApp showBackButton title="Manejo de sesión">
      {isSignedIn ? (
        <View style={{flex: 1, justifyContent: 'space-evenly'}}>
          <TextApp>
            Hay una sesión activa, que se va a mantener hasta que se presione Borrar
          </TextApp>
          <View>
            <TextApp>A continuación se muestra el contenido guardado de la sesión</TextApp>
            <TextApp>Valor: {content.value}</TextApp>
          </View>
          <TextApp>Si presionas logout, estos datos se perderán</TextApp>
          <ButtonApp label={'Borrar'} onPress={handleLogout} />
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'space-evenly'}}>
          <TextApp>
            En este momento no hay una sesión guardada, escribe algo y presiona guardar
          </TextApp>
          <InputTextApp
            formControl={{control: control, name: 'value'}}
            label={'Dato a guardar en la sesión'}
            textInput={{placeholder: 'Escribe algo para guardarlo'}}
          />
          <ButtonApp label={'Guardar'} onPress={handleLogin} />
        </View>
      )}
    </ScreenContainerApp>
  );
};

export default SessionStatusScreen;

const styles = StyleSheet.create({});
