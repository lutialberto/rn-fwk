import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import InputTextApp from 'components/forms/inputs/inputText/InputTextApp';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import {loginValidations} from './constants/LoginValidations';

export interface FormLoginProps extends FieldValues {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (data: FormLoginProps) => void;
}

const FormLogin = ({onSubmit}: Props) => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<{email: string; password: string}>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <View style={styles.container}>
      <InputTextApp
        formControl={{control: control, name: 'email', rules: loginValidations.email}}
        textInput={{
          autoCapitalize: 'none',
          keyboardType: 'email-address',
        }}
        label={'Mail'}
        error={errors.email?.message}
      />
      <InputTextApp
        formControl={{
          control: control,
          name: 'password',
          rules: loginValidations.password,
        }}
        textInput={{
          secureTextEntry: true,
        }}
        label={'Contraseña'}
        error={errors.password?.message}
      />
      <ButtonApp label={'Submit'} onPress={handleSubmit(onSubmit)} containerStyle={styles.submit} />
    </View>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  submit: {
    marginTop: 20,
  },
});
