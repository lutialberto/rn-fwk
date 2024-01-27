import React from 'react';
import {SectionListSectionsProps} from 'components/containers/sectionList/SectionList';
import {useForm} from 'react-hook-form';
import InputTextApp from 'components/forms/inputs/inputText/InputTextApp';
import SearchIcon from 'assets/svg/SearchIcon.svg';
import {Colors, useTheme} from 'hooks/theme';
import {View, StyleSheet} from 'react-native';

interface Props {
  sections: SectionListSectionsProps[];
  setList: (list: SectionListSectionsProps[]) => void;
}

const SectionListSearchFilter = (props: Props) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);
  const {control} = useForm();

  const filterSectionList = (textToSearch: string) => {
    const filteredList: SectionListSectionsProps[] = [];

    props.sections.forEach(section => {
      const sectionName = section.name.toLowerCase();
      if (sectionName.includes(textToSearch)) {
        filteredList.push(section);
        return;
      }

      const filteredItems = section.items.filter(item =>
        item.name.toLowerCase().includes(textToSearch),
      );
      if (filteredItems.length > 0) {
        filteredList.push({...section, items: filteredItems});
      }
    });
    props.setList(filteredList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <InputTextApp
          formControl={{control, name: 'name'}}
          textInput={{
            placeholder: 'Buscar...',
            placeholderTextColor: colors.themeColors.disabledColor,
            onChange: props => filterSectionList(props.nativeEvent.text.toLowerCase()),
          }}
        />
      </View>
      <View style={styles.icon}>
        <SearchIcon color={colors.themeColors.primary} />
      </View>
    </View>
  );
};

export default SectionListSearchFilter;

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    inputContainer: {
      flex: 1,
    },
    icon: {
      borderBottomColor: colors.themeColors.fontColor,
      borderBottomWidth: 1,
    },
  });
