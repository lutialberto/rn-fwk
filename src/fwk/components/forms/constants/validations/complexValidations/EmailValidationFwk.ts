import {requiredValidation} from '../simpleValidations/RequiredValidationFwk';

export const emailValidation = {
  ...requiredValidation,
  pattern: {
    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    message: 'El email no es valido',
  },
};
