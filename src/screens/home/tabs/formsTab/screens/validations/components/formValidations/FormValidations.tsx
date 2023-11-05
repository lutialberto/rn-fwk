import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import InputTextApp from 'components/forms/inputs/inputText/InputTextApp';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import {requiredValidation} from 'fwk/components/forms/constants/validations/simpleValidations/RequiredValidationFwk';
import {
  maxLengthValidation,
  minLengthValidation,
} from 'fwk/components/forms/constants/validations/simpleValidations/LengthValidationFwk';
import {
  containsLowercaseValidation,
  containsNumberValidation,
  containsUppercaseValidation,
} from 'fwk/components/forms/constants/validations/simpleValidations/ContainsValidationFwk';
import {emailValidation} from 'fwk/components/forms/constants/validations/complexValidations/EmailValidationFwk';
import {passwordValidation} from 'fwk/components/forms/constants/validations/complexValidations/PasswordValidationFwk';

export interface FormValidationsProps extends FieldValues {
  required: string;
  minLength: string;
  maxLength: string;
  containsNumber: string;
  containsUpperCase: string;
  containsLowerCase: string;
  email: string;
  password: string;
}

interface Props {
  onSubmit: (data: FormValidationsProps) => void;
}

const minLength = 8;
const maxLength = 5;

const FormValidations = ({onSubmit}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    resetField,
  } = useForm<FormValidationsProps>({
    defaultValues: {
      required: '',
      minLength: '1',
      maxLength: '1234567890',
      containsNumber: 'asd',
      containsUpperCase: 'asd',
      containsLowerCase: 'ASD',
      email: 'email inválido',
      password: '',
    },
  });

  return (
    <>
      <ScrollView>
        <KeyboardAvoidingView style={styles.container}>
          <InputTextApp
            formControl={{control: control, name: 'required', rules: {...requiredValidation}}}
            label={'Requerido'}
            error={errors.required?.message}
            clearInput={() => resetField('required')}
          />
          <InputTextApp
            formControl={{
              control: control,
              name: 'minLength',
              rules: {...minLengthValidation(minLength)},
            }}
            label={`Tamaño mínimo ${minLength}`}
            error={errors.minLength?.message}
            clearInput={() => resetField('minLength')}
          />
          <InputTextApp
            formControl={{
              control: control,
              name: 'maxLength',
              rules: {...maxLengthValidation(maxLength)},
            }}
            label={`Tamaño máximo ${maxLength}`}
            error={errors.maxLength?.message}
            clearInput={() => resetField('maxLength')}
          />
          <InputTextApp
            formControl={{
              control: control,
              name: 'containsNumber',
              rules: {validate: {...containsNumberValidation}},
            }}
            label={'Contiene números'}
            error={errors.containsNumber?.message}
            clearInput={() => resetField('containsNumber')}
          />
          <InputTextApp
            formControl={{
              control: control,
              name: 'containsUpperCase',
              rules: {validate: {...containsUppercaseValidation}},
            }}
            label={'Contiene mayúsculas'}
            error={errors.containsUpperCase?.message}
            clearInput={() => resetField('containsUpperCase')}
          />
          <InputTextApp
            formControl={{
              control: control,
              name: 'containsLowerCase',
              rules: {validate: {...containsLowercaseValidation}},
            }}
            label={'Contiene minúsculas'}
            error={errors.containsLowerCase?.message}
            clearInput={() => resetField('containsLowerCase')}
          />
          <InputTextApp
            formControl={{control: control, name: 'email', rules: emailValidation}}
            label={'Email inválido'}
            error={errors.email?.message}
            clearInput={() => resetField('email')}
          />
          <InputTextApp
            formControl={{control: control, name: 'password', rules: passwordValidation()}}
            label={'Contraseña invádida'}
            error={errors.password?.message}
            clearInput={() => resetField('password')}
          />
        </KeyboardAvoidingView>
      </ScrollView>
      <View>
        <ButtonApp
          label={'Submit'}
          onPress={handleSubmit(onSubmit)}
          containerStyle={styles.submit}
        />
      </View>
    </>
  );
};

export default FormValidations;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  submit: {
    marginTop: 10,
  },
});
