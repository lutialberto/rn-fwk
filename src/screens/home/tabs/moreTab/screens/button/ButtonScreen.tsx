import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import {vw} from 'fwk/constants/Dimentions';
import SearchIcon from 'assets/svg/SearchIcon.svg';

const ButtonScreen = () => {
  return (
    <ScreenContainerApp showBackButton title="Botones" style={{gap: 10}}>
      <TextApp>Botones básicos</TextApp>
      <ButtonApp label={'Botón sin variante definida'} onPress={() => {}} />
      <ButtonApp label={'Botón defecto'} variant="default" onPress={() => {}} />
      <ButtonApp label={'Botón con bordes'} variant="outline" onPress={() => {}} />
      <ButtonApp label={'Botón solo texto'} variant="textOnly" onPress={() => {}} />

      <ButtonApp enabled={false} label={'Botón defecto - deshabilitado'} onPress={() => {}} />
      <ButtonApp
        enabled={false}
        label={'Botón con bordes - deshabilitado'}
        variant="outline"
        onPress={() => {}}
      />
      <ButtonApp
        enabled={false}
        label={'Botón solo texto - deshabilitado'}
        variant="textOnly"
        onPress={() => {}}
      />

      <ButtonApp
        label={'Texto + ícono'}
        icon={<SearchIcon style={{color: 'red'}} />}
        onPress={() => {}}
      />
      <ButtonApp icon={<SearchIcon style={{color: 'red'}} />} onPress={() => {}} />

      <ButtonApp
        label={'Con estilo container custom'}
        containerStyle={{backgroundColor: 'red', marginHorizontal: 25 * vw, borderRadius: 0}}
        onPress={() => {}}
      />
      <ButtonApp
        label={'Con estilo label custom'}
        labelStyle={{color: 'red', fontSize: 18}}
        onPress={() => {}}
      />
    </ScreenContainerApp>
  );
};

export default ButtonScreen;

const styles = StyleSheet.create({});
