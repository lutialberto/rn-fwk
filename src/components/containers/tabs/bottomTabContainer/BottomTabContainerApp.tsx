import {StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from 'hooks/theme';
import {BottonTabContainerFwkProps} from 'fwk/components/containers/tabs/bottomTabContainer/BottomTabContainerFwkProps';
import BottomTabContainerFwk from 'fwk/components/containers/tabs/bottomTabContainer/BottomTabContainerFwk';

/**
 * @description App bottom tab container
 * @example
 * <BottomTabContainerApp
 *  tabItems={[
 *   {
 *    name: 'Tab1',
 *    label: 'Tab1',
 *    icon: (color) => <Icon name="home" color={color} />,
 *   },
 *   {
 *    name: 'Tab2',
 *    label: 'Tab2',
 *    icon: (color) => <Icon name="home" color={color} />,
 *   },
 *  ]}
 * />
 * @dependencies BottomTabContainerFwk, useTheme
 * @param tabItems - bottom tab items
 */
const BottomTabContainerApp = ({tabItems}: BottonTabContainerFwkProps) => {
  const {colors, selectedTheme} = useTheme();
  return (
    <BottomTabContainerFwk
      tabItems={tabItems.map(tab => ({
        ...tab,
        theme: selectedTheme,
      }))}
      navigatorProps={{
        activeColor: colors.themeColors.primary,
        barStyle: {
          backgroundColor: colors.themeColors.backgroundColor,
          borderTopWidth: 1,
          height: 70,
        },
        shitfting: true,
      }}
    />
  );
};

export default BottomTabContainerApp;

const styles = StyleSheet.create({});
