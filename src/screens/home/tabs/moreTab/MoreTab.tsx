import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import {MainScreenNavigationType} from 'navigation/MainStack';
import {useNavigation} from '@react-navigation/native';
import SectionList, {SectionListProps} from 'components/containers/sectionList/SectionList';

const MoreTab = () => {
  const navigator = useNavigation<MainScreenNavigationType>();

  const list: SectionListProps = {
    sections: [
      {
        name: 'Componentes genéricos reutilizables',
        items: [
          {
            name: 'Texto',
            onPress: () => navigator.navigate('Text'),
          },
          {
            name: 'Botón',
            onPress: () => navigator.navigate('Button'),
          },
          {
            name: 'Tostada',
            onPress: () => navigator.navigate('Toast'),
          },
          {
            name: 'Spinner',
            onPress: () => navigator.navigate('Spinner'),
          },
          {
            name: 'Modal',
            onPress: () => navigator.navigate('Modal'),
          },
        ],
      },
    ],
  };

  return (
    <ScreenContainerApp>
      <SectionList sections={list.sections} />
    </ScreenContainerApp>
  );
};

export default MoreTab;
