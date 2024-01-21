import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useTheme} from 'hooks/theme';
import TextApp from 'components/texts/textApp/TextApp';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';

const ThemePickerScreen = () => {
  const {changeTheme, themeOptions, selectedTheme} = useTheme();
  return (
    <ScreenContainerApp title="Paleta de colores" showBackButton>
      <TextApp>
        A continueación se listan las paletas de colores configuradas. Presiona sobre alguna para
        utilizarla en la app
      </TextApp>
      <View style={styles.container}>
        {themeOptions.map(themeOption => (
          <ButtonApp
            label={themeOption}
            key={themeOption}
            onPress={() => changeTheme(themeOption)}
            containerStyle={styles.themeOption}
          />
        ))}
      </View>
    </ScreenContainerApp>
  );
};

export default ThemePickerScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  themeOption: {
    flex: 1,
  },
});
