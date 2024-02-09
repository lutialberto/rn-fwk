import {StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useNetInfo} from 'fwk/hooks/useNetInfo';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';

const NetInfoScreen = () => {
  const {isConnected} = useNetInfo();
  const {styles, colors} = useTextStyles();

  return (
    <ScreenContainerApp showBackButton title="Chequeo internet">
      <View style={{justifyContent: 'space-evenly', flex: 1}}>
        <TextApp>
          Esta pantalla está usando un custom hook 'useNetInfo' que indica si la app detecta acceso
          a internet por wifi y/o datos móviles.
        </TextApp>
        <View>
          <TextApp>
            Activa y desactiva el internet en tu celular y verifica a continuación como la app
            informa de ese cambio
          </TextApp>
          {isConnected && (
            <TextApp style={[styles.screenTitle, {color: colors.nonThemeColors.yellow}]}>
              Se detecta acceso a internet
            </TextApp>
          )}
          {!isConnected && (
            <TextApp style={[styles.screenTitle, {color: colors.nonThemeColors.red}]}>
              No se detecta acceso a internet
            </TextApp>
          )}
        </View>
        <TextApp>
          Adapta el uso de este hook a las necesidades de tu app, siempre que diferentes features de
          la misma requieran acceso a internet
        </TextApp>
      </View>
    </ScreenContainerApp>
  );
};

export default NetInfoScreen;

const styles = StyleSheet.create({});
