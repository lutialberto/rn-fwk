import React from 'react';
import SnippetScreenTemplate from '../../components/snippetScreenTemplate/SnippetScreenTemplate';

const SnippetChartScreen = () => {
  const snippets = [
    {label: 'Línea', prefix: 'appChartLine'},
    {label: 'Progreso', prefix: 'appChartProgress'},
    {label: 'Barra', prefix: 'appChartBar'},
    {label: 'Barras Apiladas', prefix: 'appChartStackedBar'},
  ];
  return <SnippetScreenTemplate title="Snippet de gráficos" snippetList={snippets} />;
};

export default SnippetChartScreen;
