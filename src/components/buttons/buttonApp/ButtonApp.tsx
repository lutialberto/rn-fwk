import { Text } from 'react-native';
import React from 'react';
import { ButtonAppProps } from './ButtonAppProps';
import { ButtonFwk } from 'fwk/components';
import { useButtonStyles } from './hooks/useButtonStyles';
import TextApp from 'components/texts/textApp/TextApp';

const ButtonApp = ({
  variant = 'default',
  enabled = true,
  containerStyle,
  labelStyle,
  labelComponent,
  ...props
}: ButtonAppProps) => {
  const { getContainerStyle, getLabelStyle } = useButtonStyles();

  const containerStyleFinal = getContainerStyle(enabled, variant, containerStyle);
  const labelStyleFinal = getLabelStyle(enabled, variant, labelStyle);

  return (
    <ButtonFwk
      {...props}
      enabled={enabled}
      containerStyle={containerStyleFinal}
      labelStyle={labelStyleFinal}
      labelComponent={labelComponent ?? <TextApp style={labelStyleFinal}>{props.label ?? ''}</TextApp>}
    />
  );
};

export default ButtonApp;