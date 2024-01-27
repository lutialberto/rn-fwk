import React from 'react';
import SnippetScreenTemplate from '../../components/snippetScreenTemplate/SnippetScreenTemplate';

const SnippetServiceScreen = () => {
  const snippets = [
    {label: 'ServiceGet', prefix: 'appServiceGet'},
    {label: 'ServicePost', prefix: 'appServicePost'},
    {label: 'ServicePut', prefix: 'appServicePut'},
    {label: 'ServicePatch', prefix: 'appServicePatch'},
    {label: 'ServiceDelete', prefix: 'appServiceDelete'},
  ];
  return <SnippetScreenTemplate title="Snippet de servicios" snippetList={snippets} />;
};

export default SnippetServiceScreen;
