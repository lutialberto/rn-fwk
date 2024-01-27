import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import {SnippetItem} from '../../models/SnippetItem';
import {Colors, useTheme} from 'hooks/theme';

interface Props {
  snippetList: SnippetItem[];
  title: string;
}

const SnippetScreenTemplate = (props: Props) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);
  return (
    <ScreenContainerApp title={props.title} showBackButton>
      <View style={styles.snippetItem}>
        <TextApp>Nombre</TextApp>
        <TextApp>Atajo</TextApp>
      </View>
      <>
        {props.snippetList.map(snippet => (
          <View key={snippet.label} style={styles.snippetItem}>
            <TextApp style={styles.label}>{snippet.label}</TextApp>
            <TextApp>{snippet.prefix}</TextApp>
          </View>
        ))}
      </>
    </ScreenContainerApp>
  );
};

export default SnippetScreenTemplate;

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    snippetItem: {
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
