import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {InputSelectFwkProps} from './InputSelectFwkProps';
import {FieldValues, useController} from 'react-hook-form';
import ModalFwk from 'fwk/components/containers/modals/modal/ModalFwk';

/**
 * @description Framework input select component
 * @example Minimal Example
 * <InputSelectFwk
 *  formControl={{ control: control, name: 'country' }}
 *  modal={{
 *   visibleContainerStyle: styles.visibleContainer,
 *   closeIconColor: colors.themeColors.fontColor,
 *   transparentAreaBackgroundColor: colors.themeColors.lowOpacityColor,
 *  }}
 *  selectInput={{
 *   options: [
 *    { label: 'Argentina', value: 'Argentina' },
 *    { label: 'Brasil', value: 'Brasil' },
 *    //...
 *   ],
 *  }}
 * />
 * @dependencies ModalFwk, TextApp, useTheme
 * @param formControl - form control
 * @param modal - modal props
 * @param selectInput - select input props
 */
const InputSelectFwk = <T extends FieldValues>(props: InputSelectFwkProps<T>) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {field} = useController({...props.formControl});

  const openModal = () => setModalVisible(true);

  return (
    <View>
      <Pressable onPress={openModal}>
        <Text style={props.selectInput?.style}>{field.value?.label}</Text>
      </Pressable>
      <ModalFwk
        {...props.modal}
        modalProps={{
          visible: modalVisible,
          onRequestClose: () => setModalVisible(false),
          onDismiss: () => setModalVisible(false),
        }}>
        <ScrollView>
          {props.selectInput.options.map((option, index) => (
            <Pressable
              key={index}
              onPress={() => {
                field.onChange(option);
                setModalVisible(false);
              }}>
              <Text
                style={[
                  props.selectInput.itemStyle,
                  option.value === field.value?.value && props.selectInput.itemSelectedStyle,
                ]}>
                {option.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </ModalFwk>
    </View>
  );
};

export default InputSelectFwk;

const styles = StyleSheet.create({});
