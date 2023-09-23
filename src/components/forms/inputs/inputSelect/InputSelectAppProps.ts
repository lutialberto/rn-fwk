import {InputSelectFwkProps} from 'fwk/components/forms/inputs/inputSelect/InputSelectFwkProps';
import {FieldValues} from 'react-hook-form';

export interface InputSelectAppProps<T extends FieldValues> extends InputSelectFwkProps<T> {
  label?: string;
  error?: string;
}
