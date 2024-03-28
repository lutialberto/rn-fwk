import {StyleSheet, View} from 'react-native';
import React from 'react';
import {StackedBarChart} from 'react-native-chart-kit';
import {vw} from 'fwk/constants/Dimentions';
import {useTheme} from 'hooks/theme';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';
import {StackedBarChartData} from 'react-native-chart-kit/dist/StackedBarChart';
import TextApp from 'components/texts/textApp/TextApp';
import {getRbgColorProps} from 'fwk/utils/ColorUtils';

interface Props {
  labels: string[];
  dataset: number[][];
  legend: string[];
  barColors: string[];
  width?: number;
  height?: number;
}

/**
 * @description Application chart line component
 * @example Full Example
 * <ChartLineApp
    <ChartStackedBarApp
      barColors={['grey', 'blue', 'yellow']}
      labels={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']}
      legend={['Nublado', 'Lluvioso', 'Soleado']}
      dataset={[
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
      [4, 8, 12],
      [5, 10, 15],
      ]}
    />
 * @dependencies react-native-chart-kit, useTheme, useTextStyles, TextApp, getRbgColorProps
 * @param {string[]} labels - Labels for the x-axis
 * @param {string[]} legend - Legend for the data
 * @param {number[][]} dataset - Data to be displayed
 * @param {string[]} barColors - Colors for the bars
 * @param {number} [height=220] - Height of the chart
 * @param {number} [width=80 * vw] - Width of the chart
 */
const ChartStackedBarApp = ({
  labels,
  legend,
  dataset,
  barColors,
  height = 220,
  width = 80 * vw,
}: Props) => {
  const {colors} = useTheme();
  const {textStyles} = useTextStyles();

  const {r, g, b} = getRbgColorProps(colors.themeColors.fontColor);

  const data: StackedBarChartData = {
    labels,
    legend,
    data: dataset,
    barColors,
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelsContainer}>
        {data.legend.map((legend, index) => (
          <View key={index} style={styles.labelItemContainer}>
            <View style={[styles.labelColor, {backgroundColor: data.barColors[index]}]} />
            <TextApp style={textStyles.textDefault}>{legend}</TextApp>
          </View>
        ))}
      </View>
      <StackedBarChart
        hideLegend
        data={data}
        width={width}
        height={height}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => `rgba(${r}, ${g}, ${b}, ${opacity})`,
          labelColor: () => colors.themeColors.fontColor,
          barPercentage: 0.5,
          propsForLabels: {
            ...textStyles.textDefault,
            fontSize: 12,
          },
        }}
        decimalPlaces={0}
      />
    </View>
  );
};

export default ChartStackedBarApp;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 10,
  },
  labelItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  labelColor: {
    width: 20,
    aspectRatio: 1,
    borderRadius: 20,
  },
});
