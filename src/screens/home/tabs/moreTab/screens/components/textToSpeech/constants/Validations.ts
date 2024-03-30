import {
  maxLengthValidation,
  minLengthValidation,
} from 'fwk/components/forms/constants/validations/simpleValidations/LengthValidationFwk';
import {requiredValidation} from 'fwk/components/forms/constants/validations/simpleValidations/RequiredValidationFwk';
import * as Speech from 'expo-speech';

export const TEXT_TO_SPEECH_FORM_VALIDATIONS = {
  textToSpeech: {
    ...requiredValidation,
    ...maxLengthValidation(Speech.maxSpeechInputLength),
  },
  language: requiredValidation,
  voice: requiredValidation,
  rate: requiredValidation,
  pitch: {
    ...requiredValidation,
    ...minLengthValidation(0),
    ...maxLengthValidation(5),
  },
};
