import {View} from 'react-native';
import React from 'react';
import {TabScreenContainerFwkProps} from './TabScreenContainerFwkProps';

/**
 * @description Framework wrapper for the tab screen container
 * @example
 * <TabScreenContainerFwk style={styles.container}>
 *  <Text>GenericTabScreenContainer</Text>
 * </TabScreenContainerFwk>
 * @param children - tab screen container children
 * @param style - style of the tab screen container
 */
const TabScreenContainerFwk = (props: TabScreenContainerFwkProps) => {
  return <View style={props.style}>{props.children}</View>;
};

export default TabScreenContainerFwk;
