import {useEffect, useState} from 'react';
import * as Speech from 'expo-speech';
import {InputSelectOptionFwkProps} from 'fwk/components/forms/inputs/inputSelect/InputSelectFwkProps';

export const useVoices = () => {
  const [loading, setLoading] = useState(true);
  const [voices, setVoices] = useState<Speech.Voice[]>([]);
  const [languageOptions, setLanguageOptions] = useState<InputSelectOptionFwkProps[]>([]);
  const [voiceOptions, setVoiceOptions] = useState<InputSelectOptionFwkProps[]>([]);

  const updateVoicesOptionsByLanguageId = (currentLanguageId: string) => {
    const voicesFiltered = voices.filter(voice => voice.language === currentLanguageId);
    const voiceOptionsFormated = voicesFiltered
      .map(voice => ({label: voice.name, value: voice.identifier}))
      .sort((a, b) => a.label.localeCompare(b.label));
    setVoiceOptions(voiceOptionsFormated);
  };

  useEffect(() => {
    Speech.getAvailableVoicesAsync().then(response => {
      setVoices(response);

      const voiceLanguages = response.map(voice => voice.language);
      const voiceLanguagesNoDuplicates = [...new Set(voiceLanguages)].sort();
      const languageOptionsFormated = voiceLanguagesNoDuplicates.map(language => ({
        label: language,
        value: language,
      }));
      setLanguageOptions(languageOptionsFormated);

      if (languageOptionsFormated.length > 0) {
        updateVoicesOptionsByLanguageId(languageOptionsFormated[0].value);
      }
      setLoading(false);
    });
  }, []);

  return {
    loading,
    languageOptions,
    voiceOptions,
    updateVoicesOptionsByLanguageId,
  };
};
