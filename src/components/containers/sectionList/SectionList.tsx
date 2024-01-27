import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import SectionItem from './components/sectionItem/SectionItem';
import SectionName from './components/sectionName/SectionName';
import SectionListSearchFilter from './components/sectionListSearchFilter/SectionListSearchFilter';

export interface SectionListProps {
  sections: SectionListSectionsProps[];
  showSearchFilter?: boolean;
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
  const [list, setList] = useState<SectionListSectionsProps[]>(props.sections);
  return (
    <View style={{gap: 15}}>
      {(props.showSearchFilter ?? false) && (
        <SectionListSearchFilter
          sections={props.sections}
          setList={filteredSections => setList(filteredSections)}
        />
      )}
      <ScrollView fadingEdgeLength={10000} showsVerticalScrollIndicator={false}>
        {list.map((section, index) => (
          <View key={index}>
            <SectionName name={section.name} />
            {section.items.map((item, index) => (
              <SectionItem {...item} key={index} />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SectionList;
