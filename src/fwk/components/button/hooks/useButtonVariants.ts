import { StyleProp, TextProps, ViewProps } from 'react-native';

export function useButtonVariants<T extends string> (props:{
  baseStyles: {
    container: StyleProp<ViewProps>;
    label: StyleProp<TextProps>;
  };
  containerStyles: {
    [key in T]: {
      container: StyleProp<ViewProps>;
      containerDisabled: StyleProp<ViewProps>;
    }
  }
  labelStyles: {
    [key in T]: {
      label: StyleProp<TextProps>;
      labelDisabled: StyleProp<TextProps>;
    }
  };
}) {
  const getContainerStyle = (enabled: boolean, variant: T, containerStyle: StyleProp<ViewProps>) => {
    return [
      props.baseStyles.container,
      props.containerStyles[variant]?.container,
      containerStyle,
      !enabled && props.containerStyles[variant]?.containerDisabled,
    ];
  };

  const getLabelStyle = (enabled: boolean, variant: T, labelStyle: StyleProp<TextProps>) => {
    return [
      props.baseStyles.label, 
      props.labelStyles[variant]?.label,
      labelStyle, 
      !enabled && props.labelStyles[variant]?.labelDisabled,
    ];
  };

  return {
    getContainerStyle,
    getLabelStyle,
  };
}