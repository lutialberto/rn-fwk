import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {SpinnerFwkProps} from './SpinnerFwkProps';

/**
 * @description Framework spinner component
 * @example
 * <SpinnerFwk
 *   visible={true}
 *   color={'blue'}
 *   variant={'default'}
 *   style={styles.spinner}
 * >
 *   <Text>Content</Text>
 * </SpinnerFwk>
 * @param visible - spinner visible
 * @param color - spinner color
 * @param variant - spinner variant
 * @param style - style of the spinner container
 */
const SpinnerFwk = ({visible, color, style, children, variant = 'default'}: SpinnerFwkProps) => {
  return (
    <View style={[styles.container, variant === 'overlap' && styles.overlay, style]}>
      {(variant === 'overlap' || !visible) && children}
      <ActivityIndicator animating={visible} color={color ?? 'blue'} size="large" />
    </View>
  );
};

export default SpinnerFwk;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
});
