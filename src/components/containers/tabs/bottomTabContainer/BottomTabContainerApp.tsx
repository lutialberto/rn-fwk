import {StyleSheet} from 'react-native';
import React from 'react';
import {Colors, useTheme} from 'hooks/theme';
import BottomTabContainerFwk from 'fwk/components/containers/tabs/bottomTabContainer/BottomTabContainerFwk';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import {BottomTabContainerAppProps} from './BottomTabContainerAppProps';

/**
 * @description App bottom tab container
 * @example
 * <BottomTabContainerApp
 *  tabItems={[
 *   {
 *    name: 'Tab1',
 *    label: 'Tab1',
 *    children: <TextApp>Tab1</TextApp>,
 *   },
 *   {
 *    name: 'Tab2',
 *    label: 'Tab2',
 *    children: <TextApp>Tab1</TextApp>,
 *   },
 *  ]}
 * />
 * @dependencies BottomTabContainerFwk, useTheme
 * @param tabItems - bottom tab items
 */
const BottomTabContainerApp = ({tabItems, initialRouteName}: BottomTabContainerAppProps) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);
  const {styles: hookStyles} = useTextStyles();

  return (
    <BottomTabContainerFwk
      tabItems={tabItems}
      navigatorProps={{
        tabsContainerStyle: styles.container,
        tabItem: {
          containerStyle: styles.itemContainer,
          labelStyle: [hookStyles.textDefault, styles.itemLabel],
          containerFocusStyle: styles.itemFocusContainer,
          labelFocusStyle: styles.itemFocusLabel,
        },
        initialRouteName: initialRouteName,
      }}
    />
  );
};

export default BottomTabContainerApp;

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.themeColors.lowOpacityColor,
    },
    itemContainer: {
      backgroundColor: colors.themeColors.backgroundColor,
      paddingVertical: 10,
      borderTopWidth: 2,
      borderTopColor: 'transparent',
    },
    itemLabel: {
      color: colors.themeColors.fontColor,
    },
    itemFocusLabel: {
      color: colors.themeColors.primary,
    },
    itemFocusContainer: {
      borderTopColor: colors.themeColors.primary,
    },
  });
