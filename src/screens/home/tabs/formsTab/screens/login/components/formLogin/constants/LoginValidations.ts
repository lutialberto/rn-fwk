import {emailValidation} from 'fwk/components/forms/constants/validations/complexValidations/EmailValidationFwk';
import {passwordValidation} from 'fwk/components/forms/constants/validations/complexValidations/PasswordValidationFwk';

export const loginValidations = {
  email: emailValidation,
  password: passwordValidation(),
};
