import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from 'navigation/MainStack';
import {ROUTES} from 'navigation/Routes';
import SnippetComponentScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetComponent/SnippetComponentScreen';
import SnippetFormScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetForm/SnippetFormScreen';
import SnippetHookScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetHook/SnippetHookScreen';
import SnippetNavigationScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetNavigation/SnippetNavigationScreen';
import SnippetServiceScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetService/SnippetServiceScreen';
import SnippetTabScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetTab/SnippetTabScreen';
import SnippetDebugScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetDebug/SnippetDebugScreen';
import SnippetGeneralScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetGeneral/SnippetGeneralScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const snippetsStacks = () => {
  return (
    <>
      <Stack.Screen
        name={ROUTES.SNIPPETS.COMPONENTS as keyof MainStackParamList}
        component={SnippetComponentScreen}
      />
      <Stack.Screen
        name={ROUTES.SNIPPETS.FORMS as keyof MainStackParamList}
        component={SnippetFormScreen}
      />
      <Stack.Screen
        name={ROUTES.SNIPPETS.HOOKS as keyof MainStackParamList}
        component={SnippetHookScreen}
      />
      <Stack.Screen
        name={ROUTES.SNIPPETS.NAVIGATION as keyof MainStackParamList}
        component={SnippetNavigationScreen}
      />
      <Stack.Screen
        name={ROUTES.SNIPPETS.SERVICE as keyof MainStackParamList}
        component={SnippetServiceScreen}
      />
      <Stack.Screen
        name={ROUTES.SNIPPETS.TAB as keyof MainStackParamList}
        component={SnippetTabScreen}
      />
      <Stack.Screen
        name={ROUTES.SNIPPETS.DEBUG as keyof MainStackParamList}
        component={SnippetDebugScreen}
      />
      <Stack.Screen
        name={ROUTES.SNIPPETS.GENERAL as keyof MainStackParamList}
        component={SnippetGeneralScreen}
      />
    </>
  );
};

export default snippetsStacks;
