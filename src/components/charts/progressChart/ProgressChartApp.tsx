import React from 'react';
import {ProgressChart} from 'react-native-chart-kit';
import {ProgressChartData} from 'react-native-chart-kit/dist/ProgressChart';
import {useTheme} from 'hooks/theme';

interface ProgressChartAppProps {
  data: ProgressChartData;
  height: number;
  width: number;
  strokeWidth?: number;
  radius?: number;
  hexColor?: string;
}

/**
 * @description Application chart progress component
 * @example
 * <ProgressChartApp
 *   data={{
 *     labels: ["Swim", "Bike", "Run"],
 *     data: [0.4, 0.6, 0.8],
 *   }}
 *   width={vw * 70}
 *   height={220}
 * />
 * @dependencies react-native-chart-kit, useTheme
 */
const ProgressChartApp = ({
  data,
  width,
  height,
  strokeWidth = 12,
  radius = 14,
  hexColor,
}: ProgressChartAppProps) => {
  const {colors} = useTheme();

  const getRbgColorProps = () => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
      hexColor ?? colors.themeColors.primary,
    );
    const colorRgb = result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : {
          r: 255,
          g: 255,
          b: 255,
        };
    return colorRgb;
  };

  const {r, g, b} = getRbgColorProps();

  return (
    <ProgressChart
      data={data}
      width={width}
      height={height}
      strokeWidth={strokeWidth}
      radius={radius}
      chartConfig={{
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        color: opacity => `rgba(${r}, ${g}, ${b}, ${opacity})`,
        labelColor: () => colors.themeColors.fontColor,
      }}
    />
  );
};

export default ProgressChartApp;
