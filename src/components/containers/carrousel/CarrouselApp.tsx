import {StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import {useTheme} from 'hooks/theme';
import CarrouselFwk from 'fwk/components/containers/carrousel/CarrouselFwk';

interface CarrouselAppProps {
  items: React.ReactNode[];
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

  return (
    <CarrouselFwk
      items={props.items}
      itemStyle={props.itemStyle}
      indexColor={colors.themeColors.disabledColor}
      indexActiveColor={colors.themeColors.primary}
      containerStyle={props.containerStyle}
    />
  );
};

export default CarrouselApp;
