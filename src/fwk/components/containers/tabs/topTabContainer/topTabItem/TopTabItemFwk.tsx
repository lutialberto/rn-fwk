import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopTabItemFwkProps} from './TopTabItemFwkProps';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

/**
 * @description Framework wrapper for the top tab item
 * @example
 * <TopTabItemFwk
 *  name="Tab1"
 *  label="Tab1"
 *  tabScreenOptions={{
 *   tabBarIndicatorStyle: {
 *    backgroundColor: 'red'
 *   }
 *  }}
 * >
 *  <Text>Tab1</Text>
 * </TopTabItemFwk>
 * @param children - top tab item children
 * @param name - name of the top tab item
 * @param labelComponent - label component of the top tab item
 * @param label - label of the top tab item
 * @param tabScreenOptions - tab screen options of the top tab item
 */
const TopTabItemFwk = ({
  children,
  name,
  labelComponent,
  label,
  tabScreenOptions,
}: TopTabItemFwkProps) => {
  return (
    <Tab.Screen
      key={name}
      name={name}
      children={() => children}
      options={{
        tabBarIndicatorStyle: tabScreenOptions?.tabBarIndicatorStyle,
        tabBarLabel({focused}) {
          return labelComponent ? labelComponent(focused) : <Text>{label}</Text>;
        },
      }}
    />
  );
};

export default TopTabItemFwk;
