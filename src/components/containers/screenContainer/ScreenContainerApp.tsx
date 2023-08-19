import { StyleSheet } from 'react-native';
import React from 'react';
import { ScreenContainerFwkProps } from 'fwk/components/containers/screenContainer/ScreenContainerFwkProps';
import { Colors, useTheme } from 'hooks/theme';
import ScreenContainerFwk from 'fwk/components/containers/screenContainer/ScreenContainerFwk';

const ScreenContainerApp = ({ children, style }: ScreenContainerFwkProps) => {
  const { getColors } = useTheme();
  const colors = getColors();
  const styles = getStyles(colors);

  return <ScreenContainerFwk style={[styles.container, style]}>{children}</ScreenContainerFwk>;
};

export default ScreenContainerApp;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.themeColors.backgroundColor,
      paddingHorizontal: 5,
      flex: 1,
    },
  });
};