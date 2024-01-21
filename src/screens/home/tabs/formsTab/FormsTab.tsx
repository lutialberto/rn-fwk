import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import AvailableForms from './components/availableForms/AvailableForms';

const FormsTab = () => {
  const {styles: hookStyles} = useTextStyles();

  return (
    <ScreenContainerApp style={styles.screenContainer}>
      <TextApp style={[hookStyles.screenTitle, styles.screenTitle]}>Formularios</TextApp>
      <AvailableForms />
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
