import React from 'react';
import {Text, Pressable} from 'react-native';
import {BottomTabItemFwkProps} from './BottomTabItemFwkProps';

/**
 * @description Framework wrapper for the top tab item
 * @example
 * <BottmomTabItemFwk
 *  label={route.name}
 *  onPress={onPress}
 *  textStyle={{}}
 *  viewStyle={{}}
 * />
 * @param children - top tab item children
 * @param name - name of the top tab item
 * @param label - label of the top tab item
 * @param tabScreenOptions - top tab item options
 */
const BottomTabItemFwk = ({label, onPress, textStyle, viewStyle}: BottomTabItemFwkProps) => {
  return (
    <Pressable onPress={onPress} style={viewStyle}>
      <Text numberOfLines={1} style={textStyle}>
        {label}
      </Text>
    </Pressable>
  );
};

export default BottomTabItemFwk;
