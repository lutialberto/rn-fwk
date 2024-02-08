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
import ThemePickerScreen from 'screens/home/tabs/userPreferencesTab/screens/themePicker/ThemePickerScreen';
import IconScreen from 'screens/home/tabs/moreTab/screens/icon/IconScreen';
import CardScreen from 'screens/home/tabs/moreTab/screens/card/CardScreen';
import SectionListScreen from 'screens/home/tabs/moreTab/screens/sectionList/SectionListScreen';
import TabScreen from 'screens/home/tabs/moreTab/screens/tab/TabScreen';
import SnippetComponentScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetComponent/SnippetComponentScreen';
import SnippetFormScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetForm/SnippetFormScreen';
import SnippetHookScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetHook/SnippetHookScreen';
import SnippetNavigationScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetNavigation/SnippetNavigationScreen';
import SnippetServiceScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetService/SnippetServiceScreen';
import SnippetTabScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetTab/SnippetTabScreen';
import SnippetDebugScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetDebug/SnippetDebugScreen';
import SnippetGeneralScreen from 'screens/home/tabs/moreTab/screens/snippets/screens/snippetGeneral/SnippetGeneralScreen';
import CarrouselScreen from 'screens/home/tabs/moreTab/screens/carrousel/CarrouselScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

/**
 * @dependencies @react-navigation/native, @react-navigation/native-stack, react-native-screens
 */
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Preferences/Theme'} component={ThemePickerScreen} />
        <Stack.Screen name={'Forms/Login'} component={FormLoginScreen} />
        <Stack.Screen name={'Forms/Register'} component={FormRegisterScreen} />
        <Stack.Screen name={'Forms/InputTypes'} component={FormInputTypesScreen} />
        <Stack.Screen name={'Forms/Validations'} component={FormValidationsScreen} />
        <Stack.Screen name={'Icon'} component={IconScreen} />
        <Stack.Screen name={'Text'} component={TextScreen} />
        <Stack.Screen name={'Button'} component={ButtonScreen} />
        <Stack.Screen name={'Card'} component={CardScreen} />
        <Stack.Screen name={'SectionList'} component={SectionListScreen} />
        <Stack.Screen name={'Tab'} component={TabScreen} />
        <Stack.Screen name={'Toast'} component={ToastScreen} />
        <Stack.Screen name={'Spinner'} component={SpinnerScreen} />
        <Stack.Screen name={'Modal'} component={ModalScreen} />
        <Stack.Screen name={'Carrousel'} component={CarrouselScreen} />

        <Stack.Screen name={'Snippets/Components'} component={SnippetComponentScreen} />
        <Stack.Screen name={'Snippets/Forms'} component={SnippetFormScreen} />
        <Stack.Screen name={'Snippets/Hooks'} component={SnippetHookScreen} />
        <Stack.Screen name={'Snippets/Navigation'} component={SnippetNavigationScreen} />
        <Stack.Screen name={'Snippets/Service'} component={SnippetServiceScreen} />
        <Stack.Screen name={'Snippets/Tab'} component={SnippetTabScreen} />
        <Stack.Screen name={'Snippets/Debug'} component={SnippetDebugScreen} />
        <Stack.Screen name={'Snippets/General'} component={SnippetGeneralScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
