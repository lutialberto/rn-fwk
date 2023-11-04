import {emailValidation} from 'fwk/components/forms/constants/validations/complexValidations/EmailValidationFwk';
import {
  passwordConfirmValidation,
  passwordValidation,
} from 'fwk/components/forms/constants/validations/complexValidations/PasswordValidationFwk';

export const registerValidations = {
  email: emailValidation,
  password: passwordValidation(),
  passwordConfirm: passwordConfirmValidation,
};
