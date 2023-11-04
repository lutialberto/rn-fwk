import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import ButtonApp from '../buttonApp/ButtonApp';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from 'navigation/MainStack';
import ChevronLeftIcon from 'assets/svg/ChevronLeftIcon.svg';
import {useTheme} from 'hooks/theme';

interface Props {
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const ButtonBack = ({containerStyle, onPress}: Props) => {
  const navigator = useNavigation<MainScreenNavigationType>();
  const {colors} = useTheme();

  const canGoBack = navigator.canGoBack();

  const handleGoBack = () => {
    if (canGoBack) {
      onPress && onPress();
      navigator.goBack();
    }
  };

  return (
    <>
      {canGoBack && (
        <ButtonApp
          label={'Volver'}
          variant="textOnly"
          onPress={handleGoBack}
          icon={<ChevronLeftIcon color={colors.themeColors.primary} />}
          containerStyle={[styles.container, containerStyle]}
          labelStyle={styles.label}
        />
      )}
    </>
  );
};

export default ButtonBack;

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  label: {
    fontSize: 14,
  },
});
