import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from 'navigation/MainStack';
import {ROUTES} from 'navigation/Routes';
import ChartLineScreen from 'screens/home/tabs/moreTab/screens/charts/chartLine/ChartLineScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const chartsStacks = () => {
  return (
    <>
      <Stack.Screen
        name={ROUTES.CHARTS.LINE as keyof MainStackParamList}
        component={ChartLineScreen}
      />
    </>
  );
};

export default chartsStacks;
