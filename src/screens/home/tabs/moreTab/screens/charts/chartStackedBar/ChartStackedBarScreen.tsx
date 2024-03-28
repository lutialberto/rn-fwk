import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import ChartStackedBarApp from 'components/charts/chartStackedBar/ChartStackedBarApp';
import {useTheme} from 'hooks/theme';

const ChartStackedBarScreen = () => {
  const {colors} = useTheme();

  const generateRandomMonthData = (monthDays: number) => {
    let accumulated = 0;
    let data = [];
    for (let index = 3; index > 1; index--) {
      const value = (Math.random() * monthDays) / index - accumulated;
      data.push(value);
      accumulated += value;
    }
    data.push(monthDays - accumulated);
    return data;
  };

  return (
    <ScreenContainerApp title="Gráfico de barras apiladas" showBackButton>
      <ChartStackedBarApp
        barColors={[
          colors.nonThemeColors.gray,
          colors.nonThemeColors.blue,
          colors.nonThemeColors.yellow,
        ]}
        labels={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']}
        legend={['Nublado', 'Lluvioso', 'Soleado']}
        dataset={[
          generateRandomMonthData(31),
          generateRandomMonthData(28),
          generateRandomMonthData(31),
          generateRandomMonthData(30),
          generateRandomMonthData(31),
        ]}
      />
    </ScreenContainerApp>
  );
};

export default ChartStackedBarScreen;

const styles = StyleSheet.create({});
