import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  'Forms/Login': undefined;
  'Forms/Register': undefined;
};

export type MainScreenNavigationType = NativeStackNavigationProp<MainStackParamList>;
