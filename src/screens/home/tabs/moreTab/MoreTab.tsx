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
        name: 'Assets',
        items: [
          {
            name: 'Íconos',
            onPress: () => navigator.navigate('Icon'),
          },
        ],
      },
      {
        name: 'Componentes',
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
            name: 'Spinner',
            onPress: () => navigator.navigate('Spinner'),
          },
          {
            name: 'Card',
            onPress: () => navigator.navigate('Card'),
          },
          {
            name: 'Sección',
            onPress: () => navigator.navigate('SectionList'),
          },
          {
            name: 'Modal',
            onPress: () => navigator.navigate('Modal'),
          },
        ],
      },
      {
        name: 'Hooks',
        items: [
          {
            name: 'Tostada',
            onPress: () => navigator.navigate('Toast'),
          },
        ],
      },
    ],
  };

  return (
    <ScreenContainerApp title="Componentes genéricos reutilizables">
      <SectionList sections={list.sections} />
    </ScreenContainerApp>
  );
};

export default MoreTab;
