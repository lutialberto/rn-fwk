import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import SectionList from 'components/containers/sectionList/SectionList';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from 'navigation/MainStack';
import {useUserPreferencesTabSections} from './hooks/useUserPreferencesTabSections';

const UserPreferencesTab = () => {
  const navigator = useNavigation<MainScreenNavigationType>();
  const sections = useUserPreferencesTabSections(navigator);

  return (
    <ScreenContainerApp title="Preferencias usuario">
      <SectionList sections={sections} />
    </ScreenContainerApp>
  );
};

export default UserPreferencesTab;

const styles = StyleSheet.create({});
