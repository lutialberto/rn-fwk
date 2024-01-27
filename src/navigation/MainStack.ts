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
  Tab: undefined;
  Toast: undefined;
  Spinner: undefined;
  Modal: undefined;

  'Snippets/Components': undefined;
  'Snippets/Forms': undefined;
  'Snippets/Hooks': undefined;
  'Snippets/Navigation': undefined;
  'Snippets/Service': undefined;
  'Snippets/Tab': undefined;
  'Snippets/Debug': undefined;
  'Snippets/General': undefined;
};

export type MainScreenNavigationType = NativeStackNavigationProp<MainStackParamList>;
