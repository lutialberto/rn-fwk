import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from 'navigation/MainStack';
import {ROUTES} from 'navigation/Routes';
import ThemePickerScreen from 'screens/home/tabs/userPreferencesTab/screens/themePicker/ThemePickerScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const preferencesStacks = () => {
  return (
    <>
      <Stack.Screen
        name={ROUTES.PREFERENCES.THEME as keyof MainStackParamList}
        component={ThemePickerScreen}
      />
    </>
  );
};

export default preferencesStacks;
