import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './MainStack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from 'screens/home/HomeScreen';
import FormLoginScreen from 'screens/home/tabs/formsTab/screens/login/FormLoginScreen';
import FormRegisterScreen from 'screens/home/tabs/formsTab/screens/register/FormRegisterScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

/**
 * @dependencies @react-navigation/native, @react-navigation/native-stack, react-native-screens
 */
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Forms/Login'} component={FormLoginScreen} />
        <Stack.Screen name={'Forms/Register'} component={FormRegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
