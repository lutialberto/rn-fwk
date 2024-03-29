import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import PagerView from 'react-native-pager-view';

export interface CarrouselFwkProps {
  items: React.ReactNode[];
  itemStyle?: StyleProp<ViewStyle>;
  indexColor?: string;
  indexActiveColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

/**
 * @description Framework carrousel component
 * @example
 * <CarrouselFwk
 *   items={true}
 *   itemStyle={props.itemStyle}
 *   indexColor={colors.themeColors.disabledColor}
 *   indexActiveColor={colors.themeColors.primary}
 *   containerStyle={[styles.container, props.containerStyle]}
 * />
 * @dependencies 'react-native-pager-view'
 * @param items - pages of the carrousel
 * @param indexColor - dot color
 * @param indexActiveColor - dot color for active carrousel page
 * @param itemStyle - style of a page container
 * @param containerStyle - style of the carrousel container
 */
const CarrouselFwk = (props: CarrouselFwkProps) => {
  const [active, setActive] = useState(0);

  return (
    <View style={[styles.container, props.containerStyle]}>
      <PagerView
        style={styles.viewPager}
        initialPage={active}
        onPageScroll={e => setActive(e.nativeEvent.position)}>
        {props.items.map((item, index) => (
          <View style={props.itemStyle} key={index}>
            {item}
          </View>
        ))}
      </PagerView>
      <View style={styles.indexContainer}>
        {props.items.map((_item, index) => (
          <View
            style={[
              styles.index,
              !!props.indexColor && {
                backgroundColor: props.indexColor,
              },
              index === active && {
                backgroundColor: props.indexActiveColor ?? 'blue',
              },
            ]}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

export default CarrouselFwk;

const indexWidth = 10;
const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  viewPager: {
    flex: 1,
  },
  indexContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  index: {
    borderRadius: indexWidth,
    width: indexWidth,
    aspectRatio: 1,
    backgroundColor: 'grey',
  },
});
