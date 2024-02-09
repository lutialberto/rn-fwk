import React from 'react';
import SnippetScreenTemplate from '../../components/snippetScreenTemplate/SnippetScreenTemplate';

const SnippetComponentScreen = () => {
  const snippets = [
    {label: 'Button', prefix: 'appButton'},
    {label: 'Text', prefix: 'appText'},
    {label: 'Modal', prefix: 'appModal'},
    {label: 'BottomSheet', prefix: 'appBottomSheet'},
    {label: 'Spinner', prefix: 'appSpinner'},
    {label: 'Carrusel', prefix: 'appCarrousel'},
    {label: 'Porta papeles', prefix: 'appClipboard'},
  ];
  return <SnippetScreenTemplate title="Snippet de componentes" snippetList={snippets} />;
};

export default SnippetComponentScreen;
