import React from 'react';
import SnippetScreenTemplate from '../../components/snippetScreenTemplate/SnippetScreenTemplate';

const SnippetChartScreen = () => {
  const snippets = [
    {label: 'Línea', prefix: 'appChartLine'},
    {label: 'Progreso', prefix: 'appChartProgress'},
  ];
  return <SnippetScreenTemplate title="Snippet de gráficos" snippetList={snippets} />;
};

export default SnippetChartScreen;
