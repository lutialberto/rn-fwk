import React from 'react';
import SnippetScreenTemplate from '../../components/snippetScreenTemplate/SnippetScreenTemplate';

const SnippetTabScreen = () => {
  const snippets = [
    {label: 'Tab Screen Container', prefix: 'appTabScreenContainer'},
    {label: 'Top Tab Container', prefix: 'appTopTabContainer'},
  ];
  return <SnippetScreenTemplate title="Snippet de solapas" snippetList={snippets} />;
};

export default SnippetTabScreen;
