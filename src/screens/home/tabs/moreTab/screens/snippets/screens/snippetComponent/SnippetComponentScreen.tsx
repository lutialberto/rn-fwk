import {Text, View} from 'react-native';
import React from 'react';
import SnippetScreenTemplate from '../../components/snippetScreenTemplate/SnippetScreenTemplate';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import TextApp from 'components/texts/textApp/TextApp';
import ModalApp from 'components/containers/modals/modal/ModalApp';
import SpinnerApp from 'components/containers/loading/spinner/SpinnerApp';
import CarrouselApp from 'components/containers/carrousel/CarrouselApp';
import TextCopyToClipboardApp from 'components/texts/textCopyToClipboard/TextCopyToClipboardApp';
import ScreenCaptureBlockerFwk from 'fwk/components/containers/screenCaptureBlocker/ScreenCaptureBlocker';

const SnippetComponentScreen = () => {
  const snippets = [
    {
      label: 'Button',
      prefix: 'appButton',
      snippetComponent: <ButtonApp label={'Button'} onPress={() => {}} />,
    },
    {label: 'Text', prefix: 'appText', snippetComponent: <TextApp>{'Text'}</TextApp>},
    {
      label: 'Modal',
      prefix: 'appModal',
    },
    {label: 'BottomSheet', prefix: 'appBottomSheet'},
    {
      label: 'Spinner',
      prefix: 'appSpinner',
      snippetComponent: (
        <SpinnerApp
          visible={true}
          style={{
            //flex: 1,//usar este
            height: 100, //o este
          }}>
          <Text>Spinner Result</Text>
        </SpinnerApp>
      ),
    },
    {
      label: 'Carrusel',
      prefix: 'appCarrousel',
      snippetComponent: (
        <CarrouselApp
          containerStyle={{
            height: 200, //usar este
            //flex: 1,//o este
          }}
          items={[<TextApp>Page 1 </TextApp>, <TextApp>Page 2</TextApp>, <TextApp>Page 3</TextApp>]}
        />
      ),
    },
    {
      label: 'Porta papeles',
      prefix: 'appClipboard',
      snippetComponent: <TextCopyToClipboardApp textToCopy={'texto...'} />,
    },
    {
      label: 'Bloqueador de capturas de pantalla',
      prefix: 'appScreenCaptureBlocker',
      snippetComponent: (
        <ScreenCaptureBlockerFwk>
          <Text>ScreenCapture Result</Text>
        </ScreenCaptureBlockerFwk>
      ),
    },
  ];
  return <SnippetScreenTemplate title="Snippet de componentes" snippetList={snippets} />;
};

export default SnippetComponentScreen;
