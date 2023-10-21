import {StyleSheet} from 'react-native';
import React from 'react';
import BottomTabContainerApp from 'components/containers/tabs/bottomTabContainer/BottomTabContainerApp';
import {BottomTabItemFwkProps} from 'fwk/components/containers/tabs/bottomTabContainer/bottomTabItem/BottomTabItemFwkProps';
import DefaultTab from './tabs/defaultTab/DefaultTab';
import SearchIcon from 'assets/svg/SearchIcon.svg';
import UserPreferencesTab from './tabs/userPreferencesTab/UserPreferencesTab';
import MoreTab from './tabs/moreTab/MoreTab';

const HomeScreen = () => {
  const tabItems: BottomTabItemFwkProps[] = [
    {
      name: 'UserPreferences',
      label: 'Preferencias',
      children: <UserPreferencesTab />,
      icon: color => <SearchIcon color={color} />,
    },
    {
      name: 'Default',
      label: 'Inicio',
      children: <DefaultTab />,
      icon: color => <SearchIcon color={color} />,
    },
    {
      name: 'More',
      label: 'Mas',
      children: <MoreTab />,
      icon: color => <SearchIcon color={color} />,
    },
  ];

  return (
    <BottomTabContainerApp tabItems={tabItems} navigatorProps={{initialRouteName: 'Inicio'}} />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
