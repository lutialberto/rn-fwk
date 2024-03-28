import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;

  'Preferences/Theme': undefined;
  'Forms/Login': undefined;
  'Forms/Register': undefined;
  'Forms/InputTypes': undefined;
  'Forms/Validations': undefined;

  'Assets/Icon': undefined;

  'Charts/Line': undefined;
  'Charts/Progress': undefined;
  'Charts/Bar': undefined;

  'Components/Text': undefined;
  'Components/Button': undefined;
  'Components/Card': undefined;
  'Components/SectionList': undefined;
  'Components/Tab': undefined;
  'Components/Spinner': undefined;
  'Components/Modal': undefined;
  'Components/Carrousel': undefined;
  'Components/Clipboard': undefined;

  'Hooks/Toast': undefined;
  'Hooks/NetInfo': undefined;
  'Hooks/LocalAuthentication': undefined;
  'Hooks/SessionStatus': undefined;

  'Snippets/Components': undefined;
  'Snippets/Charts': undefined;
  'Snippets/Forms': undefined;
  'Snippets/Hooks': undefined;
  'Snippets/Navigation': undefined;
  'Snippets/Service': undefined;
  'Snippets/Tab': undefined;
  'Snippets/Debug': undefined;
  'Snippets/General': undefined;
};

export type MainScreenNavigationType = NativeStackNavigationProp<MainStackParamList>;
