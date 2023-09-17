import {InputDateFwkProps} from 'fwk/components/forms/inputs/inputDate/InputDateFwkProps';
import {PartiallyOptional} from 'fwk/models/PartiallyOptional';
import {FieldValues} from 'react-hook-form';

export type InputDateAppProps<T extends FieldValues> = PartiallyOptional<
  InputDateFwkProps<T>,
  'dateInput'
> & {
  error?: string;
  label?: string;
};
