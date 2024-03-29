import {PropsWithChildren} from 'react';

export interface InputWrapperAppProps extends PropsWithChildren {
  label?: string;
  error?: string;
}
