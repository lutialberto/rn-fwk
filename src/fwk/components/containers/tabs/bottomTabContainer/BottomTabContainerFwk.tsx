import {StyleSheet} from 'react-native';
import React from 'react';
import {BottonTabContainerFwkProps} from './BottomTabContainerFwkProps';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import BottomTabItemFwk from './bottomTabItem/BottomTabItemFwk';

const Tab = createMaterialBottomTabNavigator();

/**
 * @description Framework bottom tab container
 * @example
 * <BottomTabContainerFwk
 *  tabItems={[
 *   {
 *    name: 'Tab1',
 *    label: 'Tab1',
 *    icon: (color) => <Icon name="home" color={color} />,
 *   },
 *   ///...
 *  ]}
 * />
 * @dependencies BottomTabItemFwk, @react-navigation/material-bottom-tabs, react-native-pager-view, react-native-paper, react-native-vector-icons
 */
const BottomTabContainerFwk = ({tabItems, navigatorProps}: BottonTabContainerFwkProps) => {
  return (
    <Tab.Navigator
      activeColor={navigatorProps?.activeColor}
      barStyle={navigatorProps?.barStyle}
      shifting={navigatorProps?.shitfting}
      inactiveColor={navigatorProps?.inactiveColor}
      initialRouteName={navigatorProps?.initialRouteName}>
      {tabItems.map(tab => BottomTabItemFwk(tab))}
    </Tab.Navigator>
  );
};

export default BottomTabContainerFwk;

const styles = StyleSheet.create({});
