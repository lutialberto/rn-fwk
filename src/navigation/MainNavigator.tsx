import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './MainStack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from 'screens/home/HomeScreen';
import FormLoginScreen from 'screens/home/tabs/formsTab/screens/login/FormLoginScreen';
import FormRegisterScreen from 'screens/home/tabs/formsTab/screens/register/FormRegisterScreen';
import FormInputTypesScreen from 'screens/home/tabs/formsTab/screens/inputTypes/FormInputTypesScreen';
import FormValidationsScreen from 'screens/home/tabs/formsTab/screens/validations/FormValidationsScreen';
import TextScreen from 'screens/home/tabs/moreTab/screens/text/TextScreen';
import ButtonScreen from 'screens/home/tabs/moreTab/screens/button/ButtonScreen';
import ToastScreen from 'screens/home/tabs/moreTab/screens/toast/ToastScreen';
import SpinnerScreen from 'screens/home/tabs/moreTab/screens/spinner/SpinnerScreen';
import ModalScreen from 'screens/home/tabs/moreTab/screens/modal/ModalScreen';

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
        <Stack.Screen name={'Forms/InputTypes'} component={FormInputTypesScreen} />
        <Stack.Screen name={'Forms/Validations'} component={FormValidationsScreen} />
        <Stack.Screen name={'Text'} component={TextScreen} />
        <Stack.Screen name={'Button'} component={ButtonScreen} />
        <Stack.Screen name={'Toast'} component={ToastScreen} />
        <Stack.Screen name={'Spinner'} component={SpinnerScreen} />
        <Stack.Screen name={'Modal'} component={ModalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
