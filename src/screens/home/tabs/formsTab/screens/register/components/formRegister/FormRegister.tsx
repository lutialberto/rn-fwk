import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import InputTextApp from 'components/forms/inputs/inputText/InputTextApp';
import InputBooleanApp from 'components/forms/inputs/inputBoolean/InputBooleanApp';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import {registerValidations} from './constants/RegisterValidations';

export interface FormRegisterProps extends FieldValues {
  email: string;
  password: string;
  passwordConfirm: string;
}

interface Props {
  onSubmit: (data: FormRegisterProps) => void;
}

const FormRegister = ({onSubmit}: Props) => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<FormRegisterProps>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  return (
    <View style={styles.container}>
      <InputTextApp
        formControl={{control: control, name: 'email', rules: registerValidations.email}}
        textInput={{
          autoCapitalize: 'none',
          keyboardType: 'email-address',
        }}
        label={'Mail'}
        error={errors.email?.message}
      />
      <InputTextApp
        formControl={{control: control, name: 'password', rules: registerValidations.password}}
        textInput={{
          secureTextEntry: true,
        }}
        label={'Contraseña'}
        error={errors.password?.message}
      />
      <InputTextApp
        formControl={{
          control: control,
          name: 'passwordConfirm',
          rules: registerValidations.passwordConfirm,
        }}
        label={'Confirmar contraseña'}
        error={errors.passwordConfirm?.message}
      />
      <ButtonApp label={'Submit'} onPress={handleSubmit(onSubmit)} containerStyle={styles.submit} />
    </View>
  );
};

export default FormRegister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  submit: {
    marginTop: 20,
  },
});
