import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {Colors, useTheme} from 'hooks/theme';
import CarrouselFwk from 'fwk/components/containers/carrousel/CarrouselFwk';

interface CarrouselAppProps {
  items: JSX.Element[];
  containerStyle?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
}

/**
 * @description Application carrousel component
 * @example
 * <CarrouselApp
 *  items={(<Text>Page 1 content</Text>, <Text>Page 2 content</Text>)}
 * />
 * @dependencies CarrouselFwk, useTheme
 */
const CarrouselApp = (props: CarrouselAppProps) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <CarrouselFwk
      items={props.items}
      itemStyle={props.itemStyle}
      indexColor={colors.themeColors.disabledColor}
      indexActiveColor={colors.themeColors.primary}
      containerStyle={[styles.container, props.containerStyle]}
    />
  );
};

export default CarrouselApp;

const indexWidth = 10;
const getStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
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
      backgroundColor: colors.themeColors.disabledColor,
    },
  });
