import {InputBooleanFwkProps} from 'fwk/components/forms/inputs/inputBoolean/InputBooleanFwkProps';
import {FieldValues} from 'react-hook-form';

export interface InputBooleanAppProps<T extends FieldValues> extends InputBooleanFwkProps<T> {
  label?: string;
  error?: string;
}
