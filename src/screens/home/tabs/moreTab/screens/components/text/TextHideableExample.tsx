import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextHideableApp from 'components/texts/textHideable/TextHideableApp';
import ViewOnIcon from 'assets/svg/ViewOnIcon.svg';
import ViewOffIcon from 'assets/svg/ViewOffIcon.svg';
import {Colors, useTheme} from 'hooks/theme';

const TextHideableExample = () => {
  const [hide, setHide] = useState(false);
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <TextHideableApp hide={hide} text="Presiona el ojo para esconder esto" />
      <Pressable onPress={() => setHide(!hide)}>
        {hide ? (
          <ViewOffIcon style={{color: colors.themeColors.fontColor}} />
        ) : (
          <ViewOnIcon style={{color: colors.themeColors.fontColor}} />
        )}
      </Pressable>
    </View>
  );
};

export default TextHideableExample;

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
