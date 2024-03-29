import {StyleSheet, Switch, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useScreenCapture} from 'hooks/screenCapture/useScreenCapture';
import {useTheme} from 'hooks/theme';

const ScreenCaptureScreen = () => {
  const {enabled, toggle} = useScreenCapture();
  const {colors} = useTheme();

  return (
    <ScreenContainerApp title="Capturas de pantalla">
      <TextApp>
        {' '}
        A continuación se configura a nivel global de la app, si es posible o no sacar capturas de
        pantalla pertenecientes a esta app
      </TextApp>
      <View style={styles.switchContainer}>
        <TextApp>Permitir capturas de pantalla</TextApp>
        <Switch
          value={enabled}
          onValueChange={toggle}
          thumbColor={colors.themeColors.primary}
          trackColor={{
            false: colors.nonThemeColors.gray,
            true: colors.themeColors.primary,
          }}
        />
      </View>
    </ScreenContainerApp>
  );
};

export default ScreenCaptureScreen;

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
