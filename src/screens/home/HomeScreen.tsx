import {StyleSheet} from 'react-native';
import React from 'react';
import BottomTabContainerApp from 'components/containers/tabs/bottomTabContainer/BottomTabContainerApp';
import DefaultTab from './tabs/defaultTab/DefaultTab';
import UserPreferencesTab from './tabs/userPreferencesTab/UserPreferencesTab';
import MoreTab from './tabs/moreTab/MoreTab';

const HomeScreen = () => {
  const tabItems = [
    {
      name: 'UserPreferences',
      label: 'Preferencias',
      children: <UserPreferencesTab />,
    },
    {
      name: 'Default',
      label: 'Inicio',
      children: <DefaultTab />,
    },
    {
      name: 'More',
      label: 'Mas',
      children: <MoreTab />,
    },
  ];

  return <BottomTabContainerApp tabItems={tabItems} initialRouteName={'Inicio'} />;
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
