import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import SectionList, {SectionListProps} from 'components/containers/sectionList/SectionList';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from 'navigation/MainStack';

const UserPreferencesTab = () => {
  const navigator = useNavigation<MainScreenNavigationType>();
  const {styles: hookStyles} = useTextStyles();
  const list: SectionListProps = {
    sections: [
      {
        name: 'General',
        items: [
          {
            name: 'Paleta de colores',
            onPress: () => navigator.navigate('Preferences/Theme'),
          },
        ],
      },
    ],
  };

  return (
    <ScreenContainerApp style={styles.screenContainer}>
      <TextApp style={[hookStyles.screenTitle, styles.screenTitle]}>Preferencias usuario</TextApp>
      <SectionList sections={list.sections} />
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
