import {THEME_NAME_OPTIONS} from './Constants';

export type ThemeNameOptions = (typeof THEME_NAME_OPTIONS)[number];

export interface NonThemeProps {
  red: string;
  gray: string;
  blue: string;
  orange: string;
  green: string;
  yellow: string;
  white: string;
  black: string;
  ultraBlack: string;
}
export interface ThemeProps {
  primary: string;
  fontColor: string;
  backgroundColor: string;
  cardColor: string;
  disabledColor: string;
  lowOpacityColor: string;
}
export interface Colors {
  nonThemeColors: NonThemeProps;
  themeColors: ThemeProps;
}
