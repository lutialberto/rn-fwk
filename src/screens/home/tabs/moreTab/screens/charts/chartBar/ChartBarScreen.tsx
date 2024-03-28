import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import ChartBarApp from 'components/charts/chartBar/ChartBarApp';

const ChartBarScreen = () => {
  return (
    <ScreenContainerApp title="Gráfico de barra" showBackButton>
      <ChartBarApp
        labels={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']}
        dataset={new Array(6).fill(0).map(() => Math.floor(Math.random() * 100))}
      />
    </ScreenContainerApp>
  );
};

export default ChartBarScreen;
