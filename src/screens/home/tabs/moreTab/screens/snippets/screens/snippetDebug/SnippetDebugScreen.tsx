import React from 'react';
import SnippetScreenTemplate from '../../components/snippetScreenTemplate/SnippetScreenTemplate';

const SnippetDebugScreen = () => {
  const snippets = [
    {label: 'Add red border style', prefix: 'debugBorderRedStyle'},
    {label: 'Add red border props', prefix: 'debugBorderRedProps'},
  ];
  return <SnippetScreenTemplate title="Snippet de debug" snippetList={snippets} />;
};

export default SnippetDebugScreen;
