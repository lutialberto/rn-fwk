import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BottonTabContainerFwkProps} from './BottomTabContainerFwkProps';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabItemFwk from './bottomTabItem/BottomTabItemFwk';
import TextApp from 'components/texts/textApp/TextApp';

const Tab = createBottomTabNavigator();

/**
 * @description Framework bottom tab container
 * @example
 * <BottomTabContainerFwk
 *  tabItems={[
 *   {
 *    name: 'Tab1',
 *    label: 'Tab1',
 *   },
 *   ///...
 *  ]}
 * />
 * @dependencies BottomTabItemFwk, @react-navigation/material-bottom-tabs, react-native-pager-view, react-native-paper, react-native-vector-icons
 */
const BottomTabContainerFwk = ({tabItems, navigatorProps}: BottonTabContainerFwkProps) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => (
        <View style={[styles.tabsContainer, navigatorProps?.tabsContainerStyle]}>
          {props.state.routes.map((route, index) => {
            const isFocused = props.state.index === index;
            const onPress = () => {
              if (isFocused) return;
              props.navigation.navigate(route.name);
            };

            return (
              <BottomTabItemFwk
                key={route.name}
                label={route.name}
                onPress={onPress}
                textStyle={[
                  navigatorProps?.tabItem?.labelStyle,
                  isFocused ? navigatorProps?.tabItem?.labelFocusStyle : null,
                ]}
                viewStyle={[
                  styles.tabItemContainer,
                  navigatorProps?.tabItem?.containerStyle,
                  isFocused ? navigatorProps?.tabItem?.containerFocusStyle : null,
                ]}
              />
            );
          })}
        </View>
      )}
      initialRouteName={navigatorProps?.initialRouteName}>
      {tabItems.map(tab => (
        <Tab.Screen key={tab.name} name={tab.label} children={() => tab.children} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabContainerFwk;

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
