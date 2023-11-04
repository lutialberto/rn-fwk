export const containsNumberValidation = {
  containsNumber: (value: string) => /\d/.test(value) || 'Debe contener al menos un numero',
};
export const containsLowercaseValidation = {
  containsLowercase: (value: string) =>
    /[a-z]/.test(value) || 'Debe contener al menos una minuscula',
};
export const containsUppercaseValidation = {
  containsUppercase: (value: string) =>
    /[A-Z]/.test(value) || 'Debe contener al menos una mayuscula',
};
