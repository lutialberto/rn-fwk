import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from 'navigation/MainStack';
import {ROUTES} from 'navigation/Routes';
import TextScreen from 'screens/home/tabs/moreTab/screens/components/text/TextScreen';
import ButtonScreen from 'screens/home/tabs/moreTab/screens/components/button/ButtonScreen';
import CardScreen from 'screens/home/tabs/moreTab/screens/components/card/CardScreen';
import SectionListScreen from 'screens/home/tabs/moreTab/screens/components/sectionList/SectionListScreen';
import TabScreen from 'screens/home/tabs/moreTab/screens/components/tab/TabScreen';
import SpinnerScreen from 'screens/home/tabs/moreTab/screens/components/spinner/SpinnerScreen';
import ModalScreen from 'screens/home/tabs/moreTab/screens/components/modal/ModalScreen';
import CarrouselScreen from 'screens/home/tabs/moreTab/screens/components/carrousel/CarrouselScreen';
import ClipboardScreen from 'screens/home/tabs/moreTab/screens/components/clipboard/ClipboardScreen';
import ScreenCaptureBlockerScreen from 'screens/home/tabs/moreTab/screens/components/screenCaptureBlocker/ScreenCaptureBlockerScreen';
import TextToSpeechScreen from 'screens/home/tabs/moreTab/screens/components/textToSpeech/TextToSpeechScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const componentsStacks = () => {
  return (
    <>
      <Stack.Screen
        name={ROUTES.COMPONENTS.TEXT as keyof MainStackParamList}
        component={TextScreen}
      />
      <Stack.Screen
        name={ROUTES.COMPONENTS.BUTTON as keyof MainStackParamList}
        component={ButtonScreen}
      />
      <Stack.Screen
        name={ROUTES.COMPONENTS.CARD as keyof MainStackParamList}
        component={CardScreen}
      />
      <Stack.Screen
        name={ROUTES.COMPONENTS.SECTION_LIST as keyof MainStackParamList}
        component={SectionListScreen}
      />
      <Stack.Screen
        name={ROUTES.COMPONENTS.TAB as keyof MainStackParamList}
        component={TabScreen}
      />
      <Stack.Screen
        name={ROUTES.COMPONENTS.SPINNER as keyof MainStackParamList}
        component={SpinnerScreen}
      />
      <Stack.Screen
        name={ROUTES.COMPONENTS.MODAL as keyof MainStackParamList}
        component={ModalScreen}
      />
      <Stack.Screen
        name={ROUTES.COMPONENTS.CARROUSEL as keyof MainStackParamList}
        component={CarrouselScreen}
      />
      <Stack.Screen
        name={ROUTES.COMPONENTS.CLIPBOARD as keyof MainStackParamList}
        component={ClipboardScreen}
      />
      <Stack.Screen
        name={ROUTES.COMPONENTS.SCREEN_CAPTURE_BLOCKER as keyof MainStackParamList}
        component={ScreenCaptureBlockerScreen}
      />
      <Stack.Screen
        name={ROUTES.COMPONENTS.TEXT_TO_SPEECH as keyof MainStackParamList}
        component={TextToSpeechScreen}
      />
    </>
  );
};

export default componentsStacks;
