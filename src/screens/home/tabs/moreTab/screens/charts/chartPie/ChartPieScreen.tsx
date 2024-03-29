import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import ChartPieApp from 'components/charts/chartPie/ChartPieApp';
import {useTheme} from 'hooks/theme';

const ChartPieScreen = () => {
  const {colors} = useTheme();
  const data = [
    {
      name: 'Seoul',
      value: 21500000,
      color: colors.nonThemeColors.blue,
    },
    {
      name: 'Toronto',
      value: 2800000,
      color: colors.nonThemeColors.green,
    },
    {
      name: 'Beijing',
      value: 527612,
      color: colors.nonThemeColors.red,
    },
    {
      name: 'New York',
      value: 8538000,
      color: colors.nonThemeColors.yellow,
    },
    {
      name: 'Moscow',
      value: 11920000,
      color: colors.nonThemeColors.orange,
    },
  ];

  return (
    <ScreenContainerApp title="Gráfico de torta" showBackButton>
      <ChartPieApp data={data} />
    </ScreenContainerApp>
  );
};

export default ChartPieScreen;

const styles = StyleSheet.create({});
