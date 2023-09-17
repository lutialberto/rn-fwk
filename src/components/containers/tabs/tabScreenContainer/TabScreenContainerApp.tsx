import {StyleSheet} from 'react-native';
import React from 'react';
import {TabScreenContainerFwkProps} from 'fwk/components/containers/tabs/tabScreenContainer/TabScreenContainerFwkProps';
import {Colors, useTheme} from 'hooks/theme';
import TabScreenContainerFwk from 'fwk/components/containers/tabs/tabScreenContainer/TabScreenContainerFwk';

/**
 * @description Framework wrapper for the tab screen container
 * @example
 * <TabScreenContainerFwk style={styles.container}>
 * <Text>GenericTabScreenContainer</Text>
 * </TabScreenContainerFwk>
 * @dependencies TabScreenContainerFwk, useTheme
 * @param children - tab screen container children
 * @param style - style of the tab screen container
 */
const TabScreenContainerApp = ({children, style}: TabScreenContainerFwkProps) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <TabScreenContainerFwk style={[styles.container, style]}>{children}</TabScreenContainerFwk>
  );
};

export default TabScreenContainerApp;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.themeColors.backgroundColor,
      paddingHorizontal: 5,
      flex: 1,
    },
  });
};
