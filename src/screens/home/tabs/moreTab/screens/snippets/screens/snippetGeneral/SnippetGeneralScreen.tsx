import React from 'react';
import SnippetScreenTemplate from '../../components/snippetScreenTemplate/SnippetScreenTemplate';

const SnippetGeneralScreen = () => {
  const snippets = [
    {label: 'Component Props Interface', prefix: 'interfaceProps'},
    {label: 'Component Props Interface Extends', prefix: 'interfacePropsExtends'},
  ];
  return <SnippetScreenTemplate title="Snippet genéricos" snippetList={snippets} />;
};

export default SnippetGeneralScreen;
