import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextApp from 'components/texts/textApp/TextApp';
import {useTextStyles} from 'components/texts/hooks/useTextStyles';

const CustomFallback = (props: {error: Error; resetError: Function}) => {
  const {textStyles} = useTextStyles();
  return (
    <View style={styles.container}>
      <TextApp style={textStyles.screenTitle}>A ocurrido un error!</TextApp>
      <TextApp>{props.error.toString()}</TextApp>
    </View>
  );
};

export default CustomFallback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
});
