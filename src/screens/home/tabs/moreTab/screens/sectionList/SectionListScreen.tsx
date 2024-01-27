import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import SectionList, {SectionListProps} from 'components/containers/sectionList/SectionList';
import SectionSupportText from 'components/containers/sectionList/components/sectionSupportText/SectionSupportText';

const SectionListScreen = () => {
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
    <ScreenContainerApp title="Sección" showBackButton>
      <SectionList sections={list.sections} />
    </ScreenContainerApp>
  );
};

export default SectionListScreen;

const styles = StyleSheet.create({});
