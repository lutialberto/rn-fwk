import {SectionListSectionsProps} from 'components/containers/sectionList/SectionList';
import {useToastApp} from 'hooks/toast/useToastApp';

export const useToastSections = (): SectionListSectionsProps[] => {
  const {showToast} = useToastApp();

  return [
    {
      name: 'Tipos de tostadas',
      items: [
        {
          name: 'Éxito',
          onPress: () => showToast({message: 'Éxito', type: 'success'}),
        },
        {
          name: 'Error',
          onPress: () => showToast({message: 'Error', type: 'error'}),
        },
        {
          name: 'Info',
          onPress: () => showToast({message: 'Info', type: 'info'}),
        },
        {
          name: 'Alerta',
          onPress: () => showToast({message: 'Alerta', type: 'warning'}),
        },
      ],
    },
    {
      name: 'Duración',
      items: [
        {
          name: '0.5 segundos',
          onPress: () => showToast({message: '0.5 segundos', durationMiliseconds: 500}),
        },
        {
          name: '2 segundos',
          onPress: () => showToast({message: '2 segundos', durationMiliseconds: 2000}),
        },
        {
          name: '5 segundos',
          onPress: () => showToast({message: '5 segundos', durationMiliseconds: 5000}),
        },
      ],
    },
    {
      name: 'Posición desde el tope',
      items: [
        {
          name: 'A 10 del tope',
          onPress: () => showToast({message: 'A 10 del tope', positionFromTop: 10}),
        },
        {
          name: 'En el medio',
          onPress: () => showToast({message: 'En el medio', positionFromTop: 0}),
        },
        {
          name: 'Abajo',
          onPress: () => showToast({message: 'Abajo'}),
        },
      ],
    },
  ];
};
