import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import ThemePicker from './components/themePicker/ThemePicker';

const UserPreferencesTab = () => {
  const {styles: hookStyles} = useTextStyles();
  return (
    <ScreenContainerApp style={styles.screenContainer}>
      <TextApp style={[hookStyles.screenTitle, styles.screenTitle]}>Preferencias usuario</TextApp>
      <ThemePicker />
    </ScreenContainerApp>
  );
};

export default UserPreferencesTab;

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  screenTitle: {
    textAlign: 'center',
  },
});
