import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  'Forms/Login': undefined;
  'Forms/Register': undefined;
  'Forms/InputTypes': undefined;
  'Forms/Validations': undefined;
  Text: undefined;
  Button: undefined;
  Toast: undefined;
  Spinner: undefined;
  Modal: undefined;
};

export type MainScreenNavigationType = NativeStackNavigationProp<MainStackParamList>;
