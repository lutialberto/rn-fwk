import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import SectionList from 'components/containers/sectionList/SectionList';
import {useToastSections} from './useToastSections';

const ToastScreen = () => {
  const sections = useToastSections();

  return (
    <ScreenContainerApp showBackButton title="Tostadas">
      <SectionList sections={sections} />
    </ScreenContainerApp>
  );
};

export default ToastScreen;

const styles = StyleSheet.create({});
