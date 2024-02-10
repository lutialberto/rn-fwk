import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from 'navigation/MainStack';
import {ROUTES} from 'navigation/Routes';
import IconScreen from 'screens/home/tabs/moreTab/screens/assets/icon/IconScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const assetsStacks = () => {
  return (
    <>
      <Stack.Screen name={ROUTES.ASSETS.ICON as keyof MainStackParamList} component={IconScreen} />
    </>
  );
};

export default assetsStacks;
