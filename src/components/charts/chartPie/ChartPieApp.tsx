import {StyleSheet, View} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import {vw} from 'fwk/constants/Dimentions';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';
import TextApp from 'components/texts/textApp/TextApp';

interface Props {
  height?: number;
  width?: number;
  data: {
    name: string;
    color: string;
    value: number;
  }[];
}

/**
 * @description Application chart pie component
 * @example
 * <ChartPieApp
 *  data={[
 *   { name: "Porción 1", value: 123, color: 'blue' },
 *   { name: "Porción 2", value: 456, color: 'green' },
 *   { name: "Porción 3", value: 79, color: 'red' },
 *  ]}
 * />
 * @dependencies react-native-chart-kit, vw, TextApp
 * @param {Array<{name: string, color: string, value: number}>} data - Data to be displayed in the chart
 * @param {number} [height=320] - Height of the chart
 * @param {number} [width=80 * vw] - Width of the chart
 */
const ChartPieApp = ({data, height = 320, width = 80 * vw}: Props) => {
  const chartConfig: AbstractChartConfig = {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };

  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={width}
        height={height}
        chartConfig={chartConfig}
        accessor={'value'}
        backgroundColor={'transparent'}
        paddingLeft={'0'}
        center={[width / 4, 0]}
        hasLegend={false}
      />
      <View style={styles.legendsContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItemContainer}>
            <View
              style={[
                styles.legendItemColor,
                {
                  backgroundColor: item.color,
                },
              ]}
            />
            <TextApp>{item.name}</TextApp>
            <TextApp>{((item.value * 100) / totalValue).toFixed(2)} %</TextApp>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ChartPieApp;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  legendsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  legendItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  legendItemColor: {
    width: 15,
    aspectRatio: 1,
    borderRadius: 15,
  },
});
