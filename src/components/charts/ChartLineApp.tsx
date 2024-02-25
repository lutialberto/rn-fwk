import {Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {LineChart} from 'react-native-chart-kit';
import {ChartLineAppProps} from './ChartLineAppProps';
import TextApp from 'components/texts/textApp/TextApp';

/**
 * @description Application chart line component
 * @example Full Example
 * <ChartLineApp
 *   dataSetsConfig={[
 *     {
 *       legend: 'Leyenda 1',
 *       data: [4,6,1,3,7,4,5],
 *       color: 'yellow',
 *     },
 *     {
 *       legend: 'Leyenda 2',
 *       data: [8,2,5,3,7,4,5],
 *       color: 'red',
 *     },
 *   ]}
 *   height={300}
 *   width={300}
 *   onPointPress={(value: number, legend: string)=>{}}
 *   labels={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']}
 *   labelsColor={'black'}
 * />
 * @dependencies react-native-chart-kit, TextApp
 * @param dataSetsConfig - Array of objects with the following structure: { legend: string, data: number[], color: string }
 * @param labelsColor - Color of the labels
 * @param height - Height of the chart
 * @param width - Width of the chart
 * @param labels - Array of strings with the labels of the chart
 * @param onPointPress - Function to be executed when a point is pressed
 */
const ChartLineApp = ({
  dataSetsConfig,
  labelsColor,
  height,
  labels,
  width,
  onPointPress,
}: ChartLineAppProps) => {
  const [datasets, setDatasets] = useState(
    dataSetsConfig.map(dataset => ({
      withDots: dataset.withDots,
      color: () => dataset.color,
      data: dataset.data,
      show: true,
    })),
  );
  const legends = dataSetsConfig.map(dataset => dataset.legend || '');

  const toggleLegend = (index: number) => () => {
    setDatasets(
      datasets.map((dataset, i) => (i === index ? {...dataset, show: !dataset.show} : dataset)),
    );
  };

  return (
    <>
      <View style={styles.legendsContainer}>
        {legends.length > 1 &&
          legends.map((legend, index) => (
            <Pressable key={index} style={styles.legendItemContainer} onPress={toggleLegend(index)}>
              <View style={[styles.dotLegend, {backgroundColor: dataSetsConfig[index].color}]} />
              <TextApp style={{textDecorationLine: datasets[index].show ? 'none' : 'line-through'}}>
                {legend}
              </TextApp>
            </Pressable>
          ))}
      </View>

      <LineChart
        data={{
          labels,
          datasets: datasets.filter(dataset => dataset.show),
        }}
        width={width}
        height={height}
        chartConfig={{
          decimalPlaces: 2,
          color: () => labelsColor,
          labelColor: () => labelsColor,
          propsForDots: {
            r: '4',
            strokeWidth: '0',
          },
        }}
        bezier
        style={styles.lineChart}
        onDataPointClick={({value, getColor}) => {
          if (!onPointPress) return;
          const index = datasets.findIndex(ds => ds.color() === getColor(1));
          onPointPress && onPointPress(value, legends[index]);
        }}
        transparent
        withInnerLines={false}
        withShadow={false}
      />
    </>
  );
};

export default ChartLineApp;

const styles = StyleSheet.create({
  legendsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  legendItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  dotLegend: {
    width: 15,
    aspectRatio: 1,
    borderRadius: 15,
  },
  lineChart: {
    backgroundColor: 'transparent',
  },
});
