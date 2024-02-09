import {StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useLocalAuthentication} from 'fwk/hooks/useLocalAuthentication';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import {useTheme} from 'hooks/theme';

const LocalAutheticationScreen = () => {
  const {authenticate, isSupportedByDevice} = useLocalAuthentication();
  const {textStyles} = useTextStyles();
  const {colors} = useTheme();

  const handleAuthentication = async () => {
    if (isSupportedByDevice) {
      authenticate(
        () => console.log('Autenticación exitosa'),
        () => console.log('Autenticación fallida'),
      );
    }
  };

  return (
    <ScreenContainerApp showBackButton title="Autenticación biométrica">
      <View style={{flex: 1, justifyContent: 'space-between', paddingVertical: 20}}>
        <View>
          <TextApp>
            A continuación se indica si tu dispositivo es compatible con la autenticación biométrica
          </TextApp>
          {isSupportedByDevice && (
            <TextApp style={[textStyles.screenTitle, {color: colors.nonThemeColors.yellow}]}>
              Tu dispositivo soporta autenticación biométrica
            </TextApp>
          )}
          {!isSupportedByDevice && (
            <TextApp style={[textStyles.screenTitle, {color: colors.nonThemeColors.red}]}>
              Tu dispositivo no soporta autenticación biométrica
            </TextApp>
          )}
        </View>
        <ButtonApp
          label={'Autheticar'}
          onPress={handleAuthentication}
          enabled={isSupportedByDevice}
        />
      </View>
    </ScreenContainerApp>
  );
};

export default LocalAutheticationScreen;

const styles = StyleSheet.create({});
