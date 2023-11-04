export interface InputClearIconWrapperProps extends ClearInputProps {
  children: JSX.Element;
  valueIsEmpty: boolean;
}

export interface ClearInputProps {
  clearInput?: () => void;
  clearIconColor?: string;
}
