import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './MainStack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from 'screens/home/HomeScreen';
import {ROUTES} from './Routes';
import snippetsStacks from './stackGroups/snippetsStacks';
import componentsStacks from './stackGroups/componentsStacks';
import hooksStacks from './stackGroups/hooksStacks';
import formsStacks from './stackGroups/formsStacks';
import assetsStacks from './stackGroups/assetsStacks';
import preferencesStacks from './stackGroups/preferencesStacks';
import chartsStacks from './stackGroups/chartsStacks';

const Stack = createNativeStackNavigator<MainStackParamList>();

/**
 * @dependencies @react-navigation/native, @react-navigation/native-stack, react-native-screens
 */
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.HOME as keyof MainStackParamList} component={HomeScreen} />
        {preferencesStacks()}
        {formsStacks()}
        {assetsStacks()}
        {chartsStacks()}
        {componentsStacks()}
        {hooksStacks()}
        {snippetsStacks()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
