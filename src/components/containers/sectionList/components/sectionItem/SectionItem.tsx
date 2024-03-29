import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import TextApp from 'components/texts/textApp/TextApp';
import Icon from 'assets/svg/ChevronRightIcon.svg';
import {Colors, useTheme} from 'hooks/theme';

export interface SectionItemProps {
  name: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}

const SectionItem = ({name, icon = <></>, onPress = () => {}}: SectionItemProps) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <Pressable style={styles.itemContainer} onPress={onPress}>
      <View style={styles.nameContainer}>
        <TextApp>{name}</TextApp>
        {icon}
      </View>
      <Icon color={colors.themeColors.fontColor} style={styles.icon} />
    </Pressable>
  );
};

export default SectionItem;

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
    },
    nameContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    icon: {
      marginHorizontal: 10,
    },
  });
