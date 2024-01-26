import {StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import ChevronDownIcon from 'assets/svg/ChevronDownIcon.svg';
import ChevronLeftIcon from 'assets/svg/ChevronLeftIcon.svg';
import ChevronRightIcon from 'assets/svg/ChevronRightIcon.svg';
import ClearIcon from 'assets/svg/ClearIcon.svg';
import CopyIcon from 'assets/svg/CopyIcon.svg';
import CrossIcon from 'assets/svg/CrossIcon.svg';
import DownloadIcon from 'assets/svg/DownloadIcon.svg';
import SearchIcon from 'assets/svg/SearchIcon.svg';
import UploadIcon from 'assets/svg/UploadIcon.svg';
import ViewOffIcon from 'assets/svg/ViewOffIcon.svg';
import ViewOnIcon from 'assets/svg/ViewOnIcon.svg';
import {useTheme} from 'hooks/theme';

const IconScreen = () => {
  const {colors} = useTheme();

  return (
    <ScreenContainerApp title="Íconos">
      <TextApp>- Estan disponibles para usarse que cualquier parte de la aplicación</TextApp>
      <TextApp>- Se encuentran en 'assets/svg'</TextApp>
      <TextApp>- Solamente se necesita definir la prop color y opcionalmente height/width</TextApp>
      <View style={styles.container}>
        <ChevronDownIcon color={colors.themeColors.fontColor} height={40} width={40} />
        <ChevronLeftIcon color={colors.themeColors.fontColor} height={40} width={40} />
        <ChevronRightIcon color={colors.themeColors.fontColor} height={40} width={40} />
        <ClearIcon color={colors.themeColors.fontColor} height={40} width={40} />
        <CopyIcon color={colors.themeColors.fontColor} height={40} width={40} />
        <CrossIcon color={colors.themeColors.fontColor} height={40} width={40} />
        <DownloadIcon color={colors.themeColors.fontColor} height={40} width={40} />
        <SearchIcon color={colors.themeColors.fontColor} height={40} width={40} />
        <UploadIcon color={colors.themeColors.fontColor} height={40} width={40} />
        <ViewOffIcon color={colors.themeColors.fontColor} height={40} width={40} />
        <ViewOnIcon color={colors.themeColors.fontColor} height={40} width={40} />
      </View>
    </ScreenContainerApp>
  );
};

export default IconScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
