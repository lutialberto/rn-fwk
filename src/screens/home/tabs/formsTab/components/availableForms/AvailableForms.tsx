import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ButtonApp from 'components/buttons/buttonApp/ButtonApp';

interface Props {
  forms: {
    label: string;
    onPress: () => void;
  }[];
}
const AvailableForms = ({forms}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.buttonsContainer}>
      {forms.map(({label, onPress}) => (
        <ButtonApp key={label} onPress={onPress} label={label} />
      ))}
    </ScrollView>
  );
};

export default AvailableForms;

const styles = StyleSheet.create({
  buttonsContainer: {
    gap: 10,
  },
});
