import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopTabContainerFwkProps} from './TopTabContainerFwkProps';
import TopTabItemFwk from './topTabItem/TopTabItemFwk';
import {View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

/**
 * @description Framework wrapper for the top tab container
 * @example
 * <TopTabContainerFwk
 *  tabItems={[
 *   {
 *    name: 'Tab1',
 *    label: 'Tab1',
 *    tabScreenOptions: {
 *      tabBarIndicatorStyle: {
 *       backgroundColor: 'red'
 *      }
 *    }
 *   },
 *   //...
 *  ]}
 * />
 * @dependencies TopTabItemFwk, TopTabContainerFwkProps, @react-navigation/material-top-tabs, react-native-tab-view, react-native-pager-view
 * @param tabItems - tab items of the top tab container
 * @param navigatorProps - navigator props of the top tab container
 */
const TopTabContainerFwk = ({tabItems, navigatorProps}: TopTabContainerFwkProps) => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: navigatorProps?.tabBarItemStyle,
        }}>
        {tabItems.map(tab => TopTabItemFwk(tab))}
      </Tab.Navigator>
    </View>
  );
};

export default TopTabContainerFwk;
