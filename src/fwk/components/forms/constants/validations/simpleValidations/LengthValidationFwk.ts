export const minLengthValidation = (value: number) => ({
  minLength: {value, message: `Mínimo ${value} caracteres`},
});
export const maxLengthValidation = (value: number) => ({
  maxLength: {value, message: `Máximo ${value} caracteres`},
});
