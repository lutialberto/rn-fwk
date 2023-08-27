import { TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import { InputBooleanFwkProps } from './InputBooleanFwkProps';
import { FieldValues, useController } from 'react-hook-form';

function FwkBooleanInput<T extends FieldValues>({
  formControl,
  booleanInput = {
    enabled: true,
  }
}: InputBooleanFwkProps<T>) {
  const { borderStyle, children, enabled = true } = booleanInput;
  const { field } = useController(formControl);

  const handleChange = () => {
    if (enabled) {
      field.onChange(!field.value);
    }
  };

  return (
    <TouchableOpacity
      style={borderStyle}
      onPress={handleChange}
    >
      {field.value && children}
    </TouchableOpacity>
  );
};

export default FwkBooleanInput;
