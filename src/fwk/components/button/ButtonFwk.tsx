import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonFwkProps } from './ButtonFwkProps';

const ButtonFwk = ({
  enabled = true,
  onPress,
  label = '',
  icon = <></>,
  containerStyle,
  labelStyle,
  labelComponent,
}: ButtonFwkProps) => {
  return (
    <TouchableOpacity
      onPress={enabled ? onPress : () => { }}
      style={containerStyle}
      disabled={!enabled}>
      <>
        {icon}
        {labelComponent ?? <Text style={labelStyle}>{label}</Text>}
      </>
    </TouchableOpacity>
  );
};

export default ButtonFwk;

const styles = StyleSheet.create({});