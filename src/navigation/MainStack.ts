import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  'Preferences/Theme': undefined;
  'Forms/Login': undefined;
  'Forms/Register': undefined;
  'Forms/InputTypes': undefined;
  'Forms/Validations': undefined;
  Icon: undefined;
  Text: undefined;
  Button: undefined;
  Card: undefined;
  SectionList: undefined;
  Toast: undefined;
  Spinner: undefined;
  Modal: undefined;
};

export type MainScreenNavigationType = NativeStackNavigationProp<MainStackParamList>;
