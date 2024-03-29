import React from 'react';
import SnippetScreenTemplate from '../../components/snippetScreenTemplate/SnippetScreenTemplate';
import ChartLineApp from 'components/charts/chartLine/ChartLineApp';
import ProgressChartApp from 'components/charts/progressChart/ProgressChartApp';
import {vw} from 'fwk/constants/Dimentions';
import ChartBarApp from 'components/charts/chartBar/ChartBarApp';
import ChartStackedBarApp from 'components/charts/chartStackedBar/ChartStackedBarApp';
import ChartPieApp from 'components/charts/chartPie/ChartPieApp';

const SnippetChartScreen = () => {
  const snippets = [
    {
      label: 'Línea',
      prefix: 'appChartLine',
      snippetComponent: (
        <ChartLineApp
          dataSetsConfig={[
            {
              legend: 'Leyenda 1',
              data: [4, 6, 1, 3, 7, 4, 5],
              color: 'yellow',
            },
            {
              legend: 'Leyenda 2',
              data: [8, 2, 5, 3, 7, 4, 5],
              color: 'red',
            },
          ]}
          height={300}
          width={300}
          onPointPress={(value: number, legend: string) => {}}
          labels={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']}
          labelsColor={'black'}
        />
      ),
    },
    {
      label: 'Progreso',
      prefix: 'appChartProgress',
      snippetComponent: (
        <ProgressChartApp
          data={{
            labels: ['Swim', 'Bike', 'Run'],
            data: [0.4, 0.6, 0.8],
          }}
          width={vw * 70}
          height={220}
        />
      ),
    },
    {
      label: 'Barra',
      prefix: 'appChartBar',
      snippetComponent: <ChartBarApp labels={['Swim', 'Bike', 'Run']} dataset={[0.4, 0.6, 0.8]} />,
    },
    {
      label: 'Barras Apiladas',
      prefix: 'appChartStackedBar',
      snippetComponent: (
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
      ),
    },
    {
      label: 'Torta',
      prefix: 'appChartPie',
      snippetComponent: (
        <ChartPieApp
          data={[
            {
              name: 'Leyenda 1',
              value: 4,
              color: 'yellow',
            },
            {
              name: 'Leyenda 2',
              value: 6,
              color: 'red',
            },
          ]}
        />
      ),
    },
  ];
  return <SnippetScreenTemplate title="Snippet de gráficos" snippetList={snippets} />;
};

export default SnippetChartScreen;
