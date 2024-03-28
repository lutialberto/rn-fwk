import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import {MainScreenNavigationType} from 'navigation/MainStack';
import {useNavigation} from '@react-navigation/native';
import SectionList from 'components/containers/sectionList/SectionList';
import {useMoreTabSections} from './hooks/useMoreTabSections';

const MoreTab = () => {
  const navigator = useNavigation<MainScreenNavigationType>();
  const sections = useMoreTabSections(navigator);

  return (
    <ScreenContainerApp title="Componentes genéricos reutilizables">
      <SectionList sections={sections} showSearchFilter />
    </ScreenContainerApp>
  );
};

export default MoreTab;
