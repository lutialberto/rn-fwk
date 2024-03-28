import {StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from 'navigation/MainStack';
import SectionList from 'components/containers/sectionList/SectionList';
import {useAvailableFormSections} from './useAvailableFormSections';

const AvailableForms = () => {
  const navigator = useNavigation<MainScreenNavigationType>();
  const sections = useAvailableFormSections(navigator);

  return <SectionList sections={sections} />;
};

export default AvailableForms;

const styles = StyleSheet.create({
  buttonsContainer: {
    gap: 10,
  },
});
