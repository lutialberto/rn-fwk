import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import {vw} from 'fwk/constants/Dimentions';
import SearchIcon from 'assets/svg/SearchIcon.svg';

const ButtonScreen = () => {
  return (
    <ScreenContainerApp showBackButton title="Botones">
      <ScrollView
        fadingEdgeLength={1000}
        contentContainerStyle={{gap: 10}}
        showsVerticalScrollIndicator={false}>
        <TextApp>Botones básicos</TextApp>
        <ButtonApp label={'Botón primario'} variant="default" onPress={() => {}} />
        <ButtonApp label={'Botón con bordes'} variant="outline" onPress={() => {}} />
        <ButtonApp label={'Botón solo texto'} variant="textOnly" onPress={() => {}} />

        <TextApp>Botones deshabilitados</TextApp>
        <ButtonApp enabled={false} label={'Botón primario'} onPress={() => {}} />
        <ButtonApp
          enabled={false}
          label={'Botón con bordes'}
          variant="outline"
          onPress={() => {}}
        />
        <ButtonApp
          enabled={false}
          label={'Botón solo texto'}
          variant="textOnly"
          onPress={() => {}}
        />

        <TextApp>Botones con íconos</TextApp>
        <ButtonApp
          label={'Texto + ícono'}
          icon={<SearchIcon style={{color: 'red'}} />}
          onPress={() => {}}
        />
        <ButtonApp icon={<SearchIcon style={{color: 'red'}} />} onPress={() => {}} />

        <TextApp>Botones customizados</TextApp>
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
      </ScrollView>
    </ScreenContainerApp>
  );
};

export default ButtonScreen;

const styles = StyleSheet.create({});
