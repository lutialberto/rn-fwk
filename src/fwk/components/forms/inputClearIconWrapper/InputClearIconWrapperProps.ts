import {PropsWithChildren} from 'react';

export interface InputClearIconWrapperProps extends ClearInputProps, PropsWithChildren {
  valueIsEmpty: boolean;
}

export interface ClearInputProps {
  clearInput?: () => void;
  clearIconColor?: string;
}
