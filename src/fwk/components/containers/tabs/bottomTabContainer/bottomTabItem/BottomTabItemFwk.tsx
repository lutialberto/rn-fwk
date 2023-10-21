import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';
import {BottomTabItemFwkProps} from './BottomTabItemFwkProps';

const Tab = createMaterialTopTabNavigator();

/**
 * @description Framework wrapper for the top tab item
 * @example
 * <TopTabItemFwk
 *  name="Tab1"
 *  label="Tab1"
 *  tabScreenOptions={{
 *  }}
 * >
 *  <Text>Tab1</Text>
 * </TopTabItemFwk>
 * @param children - top tab item children
 * @param name - name of the top tab item
 * @param label - label of the top tab item
 * @param tabScreenOptions - top tab item options
 */
const BottomTabItemFwk = ({
  children,
  name,
  label,
  icon,
  theme = 'light',
}: BottomTabItemFwkProps) => {
  return (
    <Tab.Screen
      key={name}
      name={label}
      children={() => children}
      options={{
        tabBarIcon: ({color}) => (
          <View
            style={{
              width: 100,
              height: 50,
              backgroundColor: theme === 'light' ? '#fff' : '#000',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -10,
            }}>
            {icon(color)}
          </View>
        ),
      }}
    />
  );
};

export default BottomTabItemFwk;
