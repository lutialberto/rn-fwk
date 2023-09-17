import {ButtonFwkProps} from 'fwk/components';
import {Variant} from './models/Variant';

export interface ButtonAppProps extends ButtonFwkProps {
  variant?: Variant;
}
