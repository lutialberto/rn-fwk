import {View, Text} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-chart-kit';
import {vw} from 'fwk/constants/Dimentions';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';
import {getRbgColorProps} from 'fwk/utils/ColorUtils';
import {useTheme} from 'hooks/theme';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';

interface Props {
  labels: string[];
  dataset: number[];
  hexColor?: string;
  width?: number;
  height?: number;
  yAxisLabel?: string;
}

/*
 * @description Application chart bar component
 * @example
 * <ChartBarApp
 *   labels: ["Swim", "Bike", "Run"],
 *   dataset: [0.4, 0.6, 0.8],
 * />
 * @dependencies react-native-chart-kit, fwk/utils/ColorUtils, hooks/theme, components/texts/hooks/useTextStyles
 */

const ChartBarApp = ({
  labels,
  hexColor,
  dataset,
  width = vw * 80,
  height = 320,
  yAxisLabel = '$',
}: Props) => {
  const {colors} = useTheme();
  const {textStyles} = useTextStyles();
  const data = {
    labels,
    datasets: [{data: dataset}],
  };

  const {r, g, b} = getRbgColorProps(hexColor ?? colors.themeColors.primary);

  const chartConfig: AbstractChartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(${r}, ${g}, ${b}, ${opacity})`,
    barPercentage: 0.5,
    formatXLabel: label => label.substring(0, 3),
    propsForLabels: textStyles.textDefault,
  };

  return (
    <BarChart
      data={data}
      width={width}
      height={height}
      yAxisLabel={yAxisLabel}
      chartConfig={chartConfig}
      yAxisSuffix=""
      fromZero={true}
    />
  );
};

export default ChartBarApp;
