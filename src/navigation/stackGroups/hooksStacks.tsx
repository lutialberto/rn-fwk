import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from 'navigation/MainStack';
import {ROUTES} from 'navigation/Routes';
import ToastScreen from 'screens/home/tabs/moreTab/screens/toast/ToastScreen';
import NetInfoScreen from 'screens/home/tabs/moreTab/screens/netInfo/NetInfoScreen';
import LocalAutheticationScreen from 'screens/home/tabs/moreTab/screens/localAuthetication/LocalAutheticationScreen';
import SessionStatusScreen from 'screens/home/tabs/moreTab/screens/sessionStatus/SessionStatusScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const hooksStacks = () => {
  return (
    <>
      <Stack.Screen name={ROUTES.HOOKS.TOAST as keyof MainStackParamList} component={ToastScreen} />
      <Stack.Screen
        name={ROUTES.HOOKS.NET_INFO as keyof MainStackParamList}
        component={NetInfoScreen}
      />
      <Stack.Screen
        name={ROUTES.HOOKS.LOCAL_AUTH as keyof MainStackParamList}
        component={LocalAutheticationScreen}
      />
      <Stack.Screen
        name={ROUTES.HOOKS.SESSION_STATUS as keyof MainStackParamList}
        component={SessionStatusScreen}
      />
    </>
  );
};

export default hooksStacks;
