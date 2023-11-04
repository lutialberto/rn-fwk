import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import InputTextApp from 'components/forms/inputs/inputText/InputTextApp';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import InputBooleanApp from 'components/forms/inputs/inputBoolean/InputBooleanApp';
import InputDateApp from 'components/forms/inputs/inputDate/InputDateApp';
import InputSelectApp from 'components/forms/inputs/inputSelect/InputSelectApp';
import {InputSelectOptionFwkProps} from 'fwk/components/forms/inputs/inputSelect/InputSelectFwkProps';

export interface FormInputTypesProps extends FieldValues {
  text: string;
  boolean: boolean;
  date: Date;
  options: InputSelectOptionFwkProps;
  email: string;
  password: string;
}

interface Props {
  onSubmit: (data: FormInputTypesProps) => void;
}

const FormInputTypes = ({onSubmit}: Props) => {
  const {control, handleSubmit, resetField} = useForm<FormInputTypesProps>({
    defaultValues: {
      text: '',
      boolean: false,
      password: '',
      email: '',
    },
  });

  return (
    <View style={styles.container}>
      <InputTextApp
        formControl={{control: control, name: 'text'}}
        textInput={{
          autoCapitalize: 'none',
        }}
        label={'Texto'}
        clearInput={() => resetField('text')}
      />
      <InputBooleanApp formControl={{control: control, name: 'boolean'}} label={'Booleano'} />
      <InputDateApp
        formControl={{control: control, name: 'date'}}
        label={'Fecha'}
        clearInput={() => resetField('date')}
      />
      <InputSelectApp
        formControl={{control: control, name: 'options'}}
        label={'Opciones'}
        selectInput={{
          options: [
            {label: 'Opción 1', value: 'opt1'},
            {label: 'Opción 2', value: 'opt2'},
            //...
          ],
        }}
        clearInput={() => resetField('options')}
      />
      <InputTextApp
        formControl={{control: control, name: 'email'}}
        textInput={{
          autoCapitalize: 'none',
          keyboardType: 'email-address',
        }}
        label={'Email'}
        clearInput={() => resetField('email')}
      />
      <InputTextApp
        formControl={{control: control, name: 'password'}}
        textInput={{
          autoCapitalize: 'none',
          secureTextEntry: true,
        }}
        label={'Contraseña'}
        clearInput={() => resetField('password')}
      />
      <ButtonApp label={'Submit'} onPress={handleSubmit(onSubmit)} containerStyle={styles.submit} />
    </View>
  );
};

export default FormInputTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  submit: {
    marginTop: 20,
  },
});
