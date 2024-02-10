import {StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import TextCopyToClipboardApp from 'components/texts/textCopyToClipboard/TextCopyToClipboardApp';
import {useForm} from 'react-hook-form';
import InputTextApp from 'components/forms/inputs/inputText/InputTextApp';
import {useTheme} from 'hooks/theme';

const ClipboardScreen = () => {
  const {colors} = useTheme();
  const {control, watch} = useForm<{textToCopy: string; textToPaste: string}>({
    defaultValues: {
      textToCopy: '',
      textToPaste: '',
    },
  });

  return (
    <ScreenContainerApp showBackButton title="Porta papeles">
      <View style={styles.container}>
        <View>
          <InputTextApp
            formControl={{control: control, name: 'textToCopy'}}
            label="Texto a copiar"
            textInput={{
              placeholder: 'Escribe lo que quieras copiar',
              placeholderTextColor: colors.themeColors.disabledColor,
            }}
          />
        </View>
        <View>
          <TextApp>Presiona la caja a continuación para copiar lo escrito anteriormente</TextApp>
          <TextCopyToClipboardApp textToCopy={watch().textToCopy ?? ''} />
        </View>
        <View>
          <TextApp>
            Has foco en el campo a continuación y verás como opción el pegar el contenido del porta
            papeles
          </TextApp>
          <InputTextApp
            formControl={{control: control, name: 'textToPaste'}}
            label="Texto a pegar"
          />
        </View>
      </View>
    </ScreenContainerApp>
  );
};

export default ClipboardScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
});
