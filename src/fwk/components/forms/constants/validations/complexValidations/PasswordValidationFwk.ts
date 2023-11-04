import {
  containsLowercaseValidation,
  containsNumberValidation,
  containsUppercaseValidation,
} from '../simpleValidations/ContainsValidationFwk';
import {minLengthValidation} from '../simpleValidations/LengthValidationFwk';
import {requiredValidation} from '../simpleValidations/RequiredValidationFwk';

export const passwordValidation = (minLength?: number) => ({
  ...requiredValidation,
  ...minLengthValidation(minLength ?? 8),
  validate: {
    ...containsNumberValidation,
    ...containsLowercaseValidation,
    ...containsUppercaseValidation,
  },
});

export const passwordConfirmValidation = {
  ...requiredValidation,
  validate: {
    matchPassword: (value: string, values: any) => {
      return values.password === value || 'Las contraseñas no coinciden';
    },
  },
};
