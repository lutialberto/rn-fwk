import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from 'navigation/MainStack';
import {ROUTES} from 'navigation/Routes';
import FormLoginScreen from 'screens/home/tabs/formsTab/screens/login/FormLoginScreen';
import FormRegisterScreen from 'screens/home/tabs/formsTab/screens/register/FormRegisterScreen';
import FormInputTypesScreen from 'screens/home/tabs/formsTab/screens/inputTypes/FormInputTypesScreen';
import FormValidationsScreen from 'screens/home/tabs/formsTab/screens/validations/FormValidationsScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const formsStacks = () => {
  return (
    <>
      <Stack.Screen
        name={ROUTES.FORMS.LOGIN as keyof MainStackParamList}
        component={FormLoginScreen}
      />
      <Stack.Screen
        name={ROUTES.FORMS.REGISTER as keyof MainStackParamList}
        component={FormRegisterScreen}
      />
      <Stack.Screen
        name={ROUTES.FORMS.INPUT_TYPES as keyof MainStackParamList}
        component={FormInputTypesScreen}
      />
      <Stack.Screen
        name={ROUTES.FORMS.VALIDATIONS as keyof MainStackParamList}
        component={FormValidationsScreen}
      />
    </>
  );
};

export default formsStacks;
