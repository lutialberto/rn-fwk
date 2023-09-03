import { TouchableOpacity } from 'react-native';
import React from 'react';
import { InputBooleanFwkProps } from './InputBooleanFwkProps';
import { FieldValues, useController } from 'react-hook-form';

/**
 * @description Framework boolean input component
 * @example
 * <FwkBooleanInput formControl={formControl} booleanInput={booleanInput}>
 *  <Text>GenericBooleanInput</Text>
 * </FwkBooleanInput>
 * @dependencies react-hook-form
 * @param formControl - form control
 * @param booleanInput - boolean input
 */
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
