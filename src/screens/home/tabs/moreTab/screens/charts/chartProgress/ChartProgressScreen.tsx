import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import ProgressChartApp from 'components/charts/progressChart/ProgressChartApp';
import {vw} from 'fwk/constants/Dimentions';

const ChartProgressScreen = () => {
  const data = {
    labels: ['Swim', 'Bike', 'Run'],
    data: [0.4, 0.6, 0.8],
  };
  return (
    <ScreenContainerApp title="Gráfico de progreso" showBackButton>
      <ProgressChartApp data={data} width={vw * 70} height={220} />
    </ScreenContainerApp>
  );
};

export default ChartProgressScreen;

const styles = StyleSheet.create({});
