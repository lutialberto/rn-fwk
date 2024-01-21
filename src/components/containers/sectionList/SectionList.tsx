import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors, useTheme} from 'hooks/theme';
import SectionItem from './components/sectionItem/SectionItem';
import SectionName from './components/sectionName/SectionName';

export interface SectionListProps {
  sections: SectionListSectionsProps[];
}

export interface SectionListSectionsProps {
  name: string;
  items: SectionListItemProps[];
}

export interface SectionListItemProps {
  name: string;
  icon?: JSX.Element;
  onPress?: () => void;
}

const SectionList = (props: SectionListProps) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <ScrollView fadingEdgeLength={10000}>
      {props.sections.map((section, index) => (
        <View key={index}>
          <SectionName name={section.name} />
          {section.items.map((item, index) => (
            <SectionItem {...item} key={index} />
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default SectionList;

const getStyles = (colors: Colors) => StyleSheet.create({});
