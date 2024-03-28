import React from 'react';
import {ProgressChart} from 'react-native-chart-kit';
import {ProgressChartData} from 'react-native-chart-kit/dist/ProgressChart';
import {useTheme} from 'hooks/theme';
import {getRbgColorProps} from 'fwk/utils/ColorUtils';

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

  const {r, g, b} = getRbgColorProps(hexColor ?? colors.themeColors.primary);

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
