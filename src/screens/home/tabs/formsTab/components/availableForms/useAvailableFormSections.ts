import {SectionListSectionsProps} from 'components/containers/sectionList/SectionList';
import {MainScreenNavigationType} from 'navigation/MainStack';

export const useAvailableFormSections = (
  navigator: MainScreenNavigationType,
): SectionListSectionsProps[] => {
  return [
    {
      name: 'Prototípicos',
      items: [
        {
          name: 'Login',
          onPress: () => navigator.navigate('Forms/Login'),
        },
        {
          name: 'Register',
          onPress: () => navigator.navigate('Forms/Register'),
        },
      ],
    },
    {
      name: 'Ejemplos prácticos',
      items: [
        {
          name: 'Tipos de input',
          onPress: () => navigator.navigate('Forms/InputTypes'),
        },
        {
          name: 'Validaciones',
          onPress: () => navigator.navigate('Forms/Validations'),
        },
      ],
    },
  ];
};
