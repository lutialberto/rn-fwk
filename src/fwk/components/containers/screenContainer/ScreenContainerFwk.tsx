import { StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenContainerFwkProps } from './ScreenContainerFwkProps';

/**
 * @description Framework screen container component
 * @example
 * <ScreenContainerFwk style={styles.container}>
 *  <Text>GenericScreenContainer</Text>
 * </ScreenContainerFwk>
 * @dependencies 'react-native-safe-area-context'
 * @param children - screen container children
 * @param style - style of the screen container
 */
const ScreenContainerFwk = (props: ScreenContainerFwkProps) => {
  return <SafeAreaView style={props.style}>{props.children}</SafeAreaView>;
};

export default ScreenContainerFwk;

const styles = StyleSheet.create({});