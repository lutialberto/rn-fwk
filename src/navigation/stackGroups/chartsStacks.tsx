import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from 'navigation/MainStack';
import {ROUTES} from 'navigation/Routes';
import ChartLineScreen from 'screens/home/tabs/moreTab/screens/charts/chartLine/ChartLineScreen';
import ChartProgressScreen from 'screens/home/tabs/moreTab/screens/charts/chartProgress/ChartProgressScreen';
import ChartBarScreen from 'screens/home/tabs/moreTab/screens/charts/chartBar/ChartBarScreen';
import ChartStackedBarScreen from 'screens/home/tabs/moreTab/screens/charts/chartStackedBar/ChartStackedBarScreen';
import ChartPieScreen from 'screens/home/tabs/moreTab/screens/charts/chartPie/ChartPieScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const chartsStacks = () => {
  return (
    <>
      <Stack.Screen
        name={ROUTES.CHARTS.LINE as keyof MainStackParamList}
        component={ChartLineScreen}
      />
      <Stack.Screen
        name={ROUTES.CHARTS.PROGRESS as keyof MainStackParamList}
        component={ChartProgressScreen}
      />
      <Stack.Screen
        name={ROUTES.CHARTS.BAR as keyof MainStackParamList}
        component={ChartBarScreen}
      />
      <Stack.Screen
        name={ROUTES.CHARTS.STACKED_BAR as keyof MainStackParamList}
        component={ChartStackedBarScreen}
      />
      <Stack.Screen
        name={ROUTES.CHARTS.PIE as keyof MainStackParamList}
        component={ChartPieScreen}
      />
    </>
  );
};

export default chartsStacks;
