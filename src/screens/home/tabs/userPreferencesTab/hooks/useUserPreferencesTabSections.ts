import {SectionListSectionsProps} from 'components/containers/sectionList/SectionList';
import {MainScreenNavigationType} from 'navigation/MainStack';

export const useUserPreferencesTabSections = (
  navigator: MainScreenNavigationType,
): SectionListSectionsProps[] => {
  return [
    {
      name: 'General',
      items: [
        {
          name: 'Paleta de colores',
          onPress: () => navigator.navigate('Preferences/Theme'),
        },
      ],
    },
  ];
};
