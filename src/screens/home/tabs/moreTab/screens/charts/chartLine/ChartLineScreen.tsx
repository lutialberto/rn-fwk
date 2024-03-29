import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import ChartLineApp from 'components/charts/chartLine/ChartLineApp';
import {vh, vw} from 'fwk/constants/Dimentions';
import {useTheme} from 'hooks/theme';
import {useToastApp} from 'hooks/toast/useToastApp';

const ChartLineScreen = () => {
  const {colors} = useTheme();
  const {showToast} = useToastApp();

  const getRandomPoints = (count: number) => {
    const list = [];
    for (let i = 0; i < count; i++) {
      list.push(Math.random() * 100);
    }
    return list;
  };

  const dataSetsConfig = [
    {
      legend: 'Leyenda 1',
      data: getRandomPoints(7),
      color: colors.nonThemeColors.yellow,
    },
    {
      legend: 'Leyenda 2',
      data: getRandomPoints(7),
      color: colors.nonThemeColors.red,
    },
  ];

  const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

  const onPointPress = (value: number, legend: string) => {
    showToast({
      message: `Línea: ${legend} - Valor: ${value}`,
    });
  };

  return (
    <ScreenContainerApp title="Gráfico de línea" showBackButton>
      <ChartLineApp
        dataSetsConfig={dataSetsConfig}
        height={vh * 30}
        width={vw * 90}
        onPointPress={onPointPress}
        labels={labels}
        labelsColor={colors.themeColors.fontColor}
      />
    </ScreenContainerApp>
  );
};

export default ChartLineScreen;

const styles = StyleSheet.create({});
