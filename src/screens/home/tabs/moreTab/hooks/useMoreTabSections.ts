import {SectionListSectionsProps} from 'components/containers/sectionList/SectionList';
import {MainScreenNavigationType} from 'navigation/MainStack';

export const useMoreTabSections = (
  navigator: MainScreenNavigationType,
): SectionListSectionsProps[] => {
  return [
    {
      name: 'Assets',
      items: [{name: 'Íconos', onPress: () => navigator.navigate('Assets/Icon')}],
    },
    {
      name: 'Gráficos',
      items: [
        {name: 'Línea', onPress: () => navigator.navigate('Charts/Line')},
        {name: 'Progreso', onPress: () => navigator.navigate('Charts/Progress')},
        {name: 'Barra', onPress: () => navigator.navigate('Charts/Bar')},
        {name: 'Barras Apiladas', onPress: () => navigator.navigate('Charts/StackedBar')},
        {name: 'Torta', onPress: () => navigator.navigate('Charts/Pie')},
      ],
    },
    {
      name: 'Componentes',
      items: [
        {name: 'Texto', onPress: () => navigator.navigate('Components/Text')},
        {name: 'Botón', onPress: () => navigator.navigate('Components/Button')},
        {name: 'Spinner', onPress: () => navigator.navigate('Components/Spinner')},
        {name: 'Card', onPress: () => navigator.navigate('Components/Card')},
        {name: 'Sección', onPress: () => navigator.navigate('Components/SectionList')},
        {name: 'Solapa', onPress: () => navigator.navigate('Components/Tab')},
        {name: 'Modal', onPress: () => navigator.navigate('Components/Modal')},
        {name: 'Carrusel', onPress: () => navigator.navigate('Components/Carrousel')},
        {name: 'Porta papeles', onPress: () => navigator.navigate('Components/Clipboard')},
        {
          name: 'Bloqueador de capturas de pantalla',
          onPress: () => navigator.navigate('Components/ScreenCaptureBlocker'),
        },
      ],
    },
    {
      name: 'Hooks',
      items: [
        {name: 'Tostada', onPress: () => navigator.navigate('Hooks/Toast')},
        {name: 'Manejo de sesión', onPress: () => navigator.navigate('Hooks/SessionStatus')},
        {name: 'Chequeo internet', onPress: () => navigator.navigate('Hooks/NetInfo')},
        {
          name: 'Autenticación biométrica',
          onPress: () => navigator.navigate('Hooks/LocalAuthentication'),
        },
      ],
    },
    {
      name: 'Snippets',
      items: [
        {name: 'Componentes', onPress: () => navigator.navigate('Snippets/Components')},
        {name: 'Gráficos', onPress: () => navigator.navigate('Snippets/Charts')},
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
};
