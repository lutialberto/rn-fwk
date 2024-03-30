import {InputSelectOptionFwkProps} from 'fwk/components/forms/inputs/inputSelect/InputSelectFwkProps';

export type TextToSpeechFormInputs = {
  textToSpeech: string;
  language?: InputSelectOptionFwkProps;
  voice?: InputSelectOptionFwkProps;
  rate: InputSelectOptionFwkProps;
  pitch: string;
};
