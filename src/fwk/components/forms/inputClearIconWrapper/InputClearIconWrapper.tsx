import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {InputClearIconWrapperProps} from './InputClearIconWrapperProps';
import ClearIcon from './ClearIcon.svg';

const InputClearIconWrapper = (props: InputClearIconWrapperProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.childrenContainer}>{props.children}</View>
      {props.clearInput && props.valueIsEmpty && (
        <Pressable onPress={props.clearInput}>
          <ClearIcon style={{color: props.clearIconColor ?? 'grey'}} />
        </Pressable>
      )}
    </View>
  );
};

export default InputClearIconWrapper;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  childrenContainer: {
    flex: 1,
  },
});
