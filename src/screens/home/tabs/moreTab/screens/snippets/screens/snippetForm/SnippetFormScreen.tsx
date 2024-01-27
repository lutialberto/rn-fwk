import React from 'react';
import SnippetScreenTemplate from '../../components/snippetScreenTemplate/SnippetScreenTemplate';

const SnippetFormScreen = () => {
  const snippets = [
    {label: 'InputText', prefix: 'appInputText'},
    {label: 'InputBoolean', prefix: 'appInputBoolean'},
    {label: 'InputDate', prefix: 'appInputDate'},
    {label: 'InputSelect', prefix: 'appInputSelect'},
    {label: 'Form', prefix: 'appForm'},
  ];
  return <SnippetScreenTemplate title="Snippet de formulario" snippetList={snippets} />;
};

export default SnippetFormScreen;
