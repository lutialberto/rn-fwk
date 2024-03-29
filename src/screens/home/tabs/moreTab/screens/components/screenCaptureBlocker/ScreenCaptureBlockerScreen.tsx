import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import ScreenCaptureBlockerFwk from 'fwk/components/containers/screenCaptureBlocker/ScreenCaptureBlocker';

const ScreenCaptureBlockerScreen = () => {
  return (
    <ScreenContainerApp title="Bloqueador de capturas de pantalla" showBackButton>
      <ScreenCaptureBlockerFwk>
        <TextApp>Este texto no puede ser capturado o grabado</TextApp>
      </ScreenCaptureBlockerFwk>
    </ScreenContainerApp>
  );
};

export default ScreenCaptureBlockerScreen;

const styles = StyleSheet.create({});
