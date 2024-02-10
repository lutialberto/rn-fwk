import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import SectionList, {SectionListProps} from 'components/containers/sectionList/SectionList';
import SectionSupportText from 'components/containers/sectionList/components/sectionSupportText/SectionSupportText';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';

const SectionListScreen = () => {
  const [showSearchFilter, setShowSearchFilter] = useState(true);
  const list: SectionListProps = {
    sections: [
      {
        name: 'Sección 1',
        items: [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}],
      },
      {
        name: 'Sección 2',
        items: [{name: 'Item 4'}],
      },
      {
        name: 'Sección 3',
        items: [
          {name: 'Item 5', icon: <SectionSupportText name="Texto de complemento" />},
          {
            name: 'Item 5',
            icon: <SectionSupportText name="Cliqueable" />,
            onPress: () => alert('Cliqueado'),
          },
        ],
      },
    ],
  };

  return (
    <ScreenContainerApp title="Sección" showBackButton style={styles.screen}>
      <SectionList sections={list.sections} showSearchFilter={showSearchFilter} />
      <ButtonApp
        label={showSearchFilter ? 'Esconder buscador' : 'Mostrar buscador'}
        onPress={() => setShowSearchFilter(prev => !prev)}
      />
    </ScreenContainerApp>
  );
};

export default SectionListScreen;

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
});
