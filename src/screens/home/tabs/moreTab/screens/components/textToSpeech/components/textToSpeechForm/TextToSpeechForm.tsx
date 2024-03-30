import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import InputTextApp from 'components/forms/inputs/inputText/InputTextApp';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';
import * as Speech from 'expo-speech';
import InputSelectApp from 'components/forms/inputs/inputSelect/InputSelectApp';
import SpinnerApp from 'components/containers/loading/spinner/SpinnerApp';
import {useVoices} from '../../hooks/useVoices';
import {TEXT_TO_SPEECH_FORM_VALIDATIONS} from '../../constants/Validations';
import {TextToSpeechFormInputs} from '../../models/TextToSpeechFormInputs';

const TextToSpeechForm = () => {
  const {loading, languageOptions, voiceOptions, updateVoicesOptionsByLanguageId} = useVoices();
  const [speaking, setSpeaking] = useState(false);

  const {
    control,
    formState: {errors},
    handleSubmit,
    setValue,
    watch,
  } = useForm<TextToSpeechFormInputs>({
    defaultValues: {
      textToSpeech: '',
      voice: undefined,
      language: undefined,
      rate: {label: '1', value: '1'},
      pitch: '1',
    },
  });

  useEffect(() => {
    if (languageOptions.length > 0) {
      setValue('language', languageOptions[0]);
      updateVoicesOptionsByLanguageId(languageOptions[0].value);
    }
  }, [languageOptions]);

  useEffect(() => {
    if (voiceOptions.length > 0) {
      setValue('voice', voiceOptions[0]);
    }
  }, [voiceOptions]);

  useEffect(() => {
    const language = watch().language;
    if (language) {
      updateVoicesOptionsByLanguageId(language.value);
    }
  }, [watch().language]);

  const handleFormSuccess = async (data: TextToSpeechFormInputs) => {
    Speech.speak(data.textToSpeech, {
      language: data.language?.value,
      voice: data.voice?.value,
      pitch: parseInt(data.pitch),
      rate: parseInt(data.rate.value),
      onStart: () => setSpeaking(true),
      onDone: () => setSpeaking(false),
      onStopped: () => setSpeaking(false),
    });
  };

  const MAX_TEXT_TO_SPEECH_LENGTH = Speech.maxSpeechInputLength;
  const CURRENT_TEXT_TO_SPEECH_LENGTH = watch().textToSpeech.length;

  return (
    <SpinnerApp visible={loading} style={styles.spinner}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <InputTextApp
          formControl={{
            control: control,
            name: 'textToSpeech',
            rules: TEXT_TO_SPEECH_FORM_VALIDATIONS.textToSpeech,
          }}
          label={`Texto a reproducir - ${CURRENT_TEXT_TO_SPEECH_LENGTH}/${MAX_TEXT_TO_SPEECH_LENGTH}`}
          error={errors.textToSpeech?.message}
          textInput={{
            multiline: true,
            numberOfLines: 14,
            maxLength: Speech.maxSpeechInputLength,
            style: styles.textAreaInput,
          }}
        />
        <View style={styles.selectInputsContainer}>
          <InputSelectApp
            formControl={{
              control: control,
              name: 'language',
              rules: TEXT_TO_SPEECH_FORM_VALIDATIONS.language,
            }}
            label={'Idioma'}
            error={errors.language?.message}
            selectInput={{
              options: languageOptions,
            }}
            containerStyle={styles.selectInput}
          />
          <InputSelectApp
            formControl={{
              control: control,
              name: 'voice',
              rules: TEXT_TO_SPEECH_FORM_VALIDATIONS.voice,
            }}
            label={'Voz'}
            error={errors.voice?.message}
            selectInput={{
              options: voiceOptions,
            }}
            containerStyle={styles.selectInput}
          />
        </View>
        <View style={styles.selectInputsContainer}>
          <InputSelectApp
            formControl={{
              control: control,
              name: 'rate',
              rules: TEXT_TO_SPEECH_FORM_VALIDATIONS.rate,
            }}
            label={'Velocidad'}
            error={errors.rate?.message}
            selectInput={{
              options: ['1', '2', '3'].map(rate => ({label: rate, value: rate})),
            }}
            containerStyle={styles.selectInput}
          />
          <InputTextApp
            formControl={{control: control, name: 'pitch'}}
            label={'Pitch'}
            error={errors.pitch?.message}
            containerStyle={styles.selectInput}
            textInput={{
              keyboardType: 'numeric',
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <ButtonApp
          label={'Detener'}
          enabled={speaking}
          onPress={() => Speech.stop()}
          containerStyle={styles.button}
        />
        <ButtonApp
          label={'Reproducir'}
          onPress={handleSubmit(handleFormSuccess)}
          containerStyle={styles.button}
        />
      </View>
    </SpinnerApp>
  );
};

export default TextToSpeechForm;

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    gap: 10,
  },
  scrollView: {
    flex: 1,
    gap: 10,
  },
  textAreaInput: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  selectInputsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  selectInput: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
  },
});
