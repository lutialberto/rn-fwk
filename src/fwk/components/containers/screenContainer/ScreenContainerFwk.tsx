import { StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenContainerFwkProps } from './ScreenContainerFwkProps';

const ScreenContainerFwk = (props: ScreenContainerFwkProps) => {
  return <SafeAreaView style={props.style}>{props.children}</SafeAreaView>;
};

export default ScreenContainerFwk;

const styles = StyleSheet.create({});