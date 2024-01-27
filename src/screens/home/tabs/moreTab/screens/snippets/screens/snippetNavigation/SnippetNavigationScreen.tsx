import React from 'react';
import SnippetScreenTemplate from '../../components/snippetScreenTemplate/SnippetScreenTemplate';

const SnippetNavigationScreen = () => {
  const snippets = [
    {label: 'Screen Component', prefix: 'appScreenComponent'},
    {label: 'Screen Container', prefix: 'appScreenContainer'},
    {label: 'Tab Component', prefix: 'appTabComponent'},
    {label: 'Tab Screen Container', prefix: 'appTabScreenContainer'},
  ];
  return <SnippetScreenTemplate title="Snippet de navegación" snippetList={snippets} />;
};

export default SnippetNavigationScreen;
