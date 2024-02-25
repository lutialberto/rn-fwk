export interface ChartLineAppProps {
  labels: string[];
  dataSetsConfig: ChartLineDataSetConfig[];
  labelsColor: string;
  width: number;
  height: number;
  onPointPress?: (value: number, legend: string) => void;
}

export interface ChartLineDataSetConfig {
  legend?: string;
  withDots?: boolean;
  color: string;
  data: number[];
}
