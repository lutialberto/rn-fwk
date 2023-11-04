import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from 'navigation/MainStack';
import AvailableForms from './components/availableForms/AvailableForms';

const FormsTab = () => {
  const {styles: hookStyles} = useTextStyles();
  const navigator = useNavigation<MainScreenNavigationType>();

  const forms = [
    {
      label: 'Login',
      onPress: () => navigator.navigate('Forms/Login'),
    },
    {
      label: 'Register',
      onPress: () => navigator.navigate('Forms/Register'),
    },
  ];

  return (
    <ScreenContainerApp style={styles.screenContainer}>
      <TextApp style={[hookStyles.screenTitle, styles.screenTitle]}>Formularios</TextApp>
      <AvailableForms forms={forms} />
    </ScreenContainerApp>
  );
};

export default FormsTab;

const styles = StyleSheet.create({
  screenContainer: {
    gap: 20,
  },
  screenTitle: {
    textAlign: 'center',
  },
});
