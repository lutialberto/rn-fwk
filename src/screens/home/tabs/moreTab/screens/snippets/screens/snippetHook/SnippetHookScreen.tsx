import React from 'react';
import SnippetScreenTemplate from '../../components/snippetScreenTemplate/SnippetScreenTemplate';

const SnippetHookScreen = () => {
  const snippets = [
    {label: 'Form hook', prefix: 'hookForm'},
    {label: 'Theme hook', prefix: 'hookTheme'},
    {label: 'GetStyles', prefix: 'getStyles'},
    {label: 'Toast hook', prefix: 'hookToast'},
    {label: 'Service hook', prefix: 'hookService'},
  ];
  return <SnippetScreenTemplate title="Snippet de hooks" snippetList={snippets} />;
};

export default SnippetHookScreen;
