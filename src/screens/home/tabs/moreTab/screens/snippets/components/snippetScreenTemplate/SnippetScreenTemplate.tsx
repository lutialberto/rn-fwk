import {Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {SnippetItem} from '../../models/SnippetItem';
import {Colors, useTheme} from 'hooks/theme';

interface Props {
  snippetList: SnippetItem[];
  title: string;
}

const SnippetScreenTemplate = (props: Props) => {
  const [expandedSnippetIndex, setExpandedSnippetIndex] = useState(-1);
  const {colors} = useTheme();
  const styles = getStyles(colors);

  const handleSnippetItemPress = (index: number) => {
    setExpandedSnippetIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <ScreenContainerApp title={props.title} showBackButton>
      <View style={styles.snippetItemHeader}>
        <TextApp>Nombre</TextApp>
        <TextApp>Atajo</TextApp>
      </View>
      <>
        {props.snippetList.map((snippet, index) => (
          <Pressable key={snippet.label} onPress={() => handleSnippetItemPress(index)}>
            <View style={styles.snippetItemHeader}>
              <TextApp style={styles.label}>{snippet.label}</TextApp>
              <TextApp>{snippet.prefix}</TextApp>
            </View>
            {expandedSnippetIndex === index && snippet.snippetComponent}
          </Pressable>
        ))}
      </>
    </ScreenContainerApp>
  );
};

export default SnippetScreenTemplate;

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    snippetItemHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: colors.nonThemeColors.gray,
    },
    label: {
      flex: 1,
      flexWrap: 'wrap',
    },
  });
