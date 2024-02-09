import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import {MainScreenNavigationType} from 'navigation/MainStack';
import {useNavigation} from '@react-navigation/native';
import SectionList, {SectionListSectionsProps} from 'components/containers/sectionList/SectionList';

const MoreTab = () => {
  const sections: SectionListSectionsProps[] = [
    {
      name: 'Assets',
      items: [{name: 'Íconos', onPress: () => navigator.navigate('Icon')}],
    },
    {
      name: 'Componentes',
      items: [
        {name: 'Texto', onPress: () => navigator.navigate('Text')},
        {name: 'Botón', onPress: () => navigator.navigate('Button')},
        {name: 'Spinner', onPress: () => navigator.navigate('Spinner')},
        {name: 'Card', onPress: () => navigator.navigate('Card')},
        {name: 'Sección', onPress: () => navigator.navigate('SectionList')},
        {name: 'Solapa', onPress: () => navigator.navigate('Tab')},
        {name: 'Modal', onPress: () => navigator.navigate('Modal')},
        {name: 'Carrusel', onPress: () => navigator.navigate('Carrousel')},
        {name: 'Porta papeles', onPress: () => navigator.navigate('Clipboard')},
      ],
    },
    {
      name: 'Hooks',
      items: [
        {name: 'Tostada', onPress: () => navigator.navigate('Toast')},
        {name: 'Chequeo internet', onPress: () => navigator.navigate('NetInfo')},
        {
          name: 'Autenticación biométrica',
          onPress: () => navigator.navigate('LocalAuthentication'),
        },
      ],
    },
    {
      name: 'Snippets',
      items: [
        {name: 'Componentes', onPress: () => navigator.navigate('Snippets/Components')},
        {name: 'Formularios', onPress: () => navigator.navigate('Snippets/Forms')},
        {name: 'Hooks', onPress: () => navigator.navigate('Snippets/Hooks')},
        {name: 'Navegación', onPress: () => navigator.navigate('Snippets/Navigation')},
        {name: 'Servicios', onPress: () => navigator.navigate('Snippets/Service')},
        {name: 'Solapas', onPress: () => navigator.navigate('Snippets/Tab')},
        {name: 'Debug', onPress: () => navigator.navigate('Snippets/Debug')},
        {name: 'Generales', onPress: () => navigator.navigate('Snippets/General')},
      ],
    },
  ];

  const navigator = useNavigation<MainScreenNavigationType>();

  return (
    <ScreenContainerApp title="Componentes genéricos reutilizables">
      <SectionList sections={sections} showSearchFilter />
    </ScreenContainerApp>
  );
};

export default MoreTab;
