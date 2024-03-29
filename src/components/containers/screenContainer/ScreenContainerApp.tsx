import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors, useTheme} from 'hooks/theme';
import ScreenContainerFwk from 'fwk/components/containers/screenContainer/ScreenContainerFwk';
import TextApp from 'components/texts/textApp/TextApp';
import ButtonBack from 'components/buttons/buttonBack/ButtonBack';
import {ScreenContainerAppProps} from './ScreenContainerAppProps';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';

/**
 * @description Application screen container component
 * @example
 * <ScreenContainerApp style={styles.container}>
 *  <Text>GenericScreenContainer</Text>
 * </ScreenContainerApp>
 * @dependencies ScreenContainerFwk, useTheme
 * @param children - screen container children
 * @param style - style of the screen container
 */
const ScreenContainerApp = ({
  children,
  style,
  title,
  onBackPress,
  showBackButton,
}: ScreenContainerAppProps) => {
  const {textStyles} = useTextStyles();
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <ScreenContainerFwk style={styles.container}>
      <>
        <View style={styles.header}>
          <View style={!showBackButton && styles.side}>
            {showBackButton && <ButtonBack onPress={onBackPress} />}
          </View>
          {title && <TextApp style={[textStyles.screenTitle, styles.screenTitle]}>{title}</TextApp>}
          <View style={styles.side} />
        </View>
        <View style={[styles.childrenContainer, style]}>{children}</View>
      </>
    </ScreenContainerFwk>
  );
};

export default ScreenContainerApp;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.themeColors.backgroundColor,
      paddingHorizontal: 5,
      flex: 1,
    },
    header: {
      flexDirection: 'row',
    },
    side: {
      flex: 1,
    },
    screenTitle: {
      flex: 3,
    },
    childrenContainer: {
      flex: 1,
    },
  });
};
