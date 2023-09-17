import TextApp from 'components/texts/textApp/TextApp';
import TopTabContainerFwk from 'fwk/components/containers/tabs/topTabContainer/TopTabContainerFwk';
import {TopTabContainerFwkProps} from 'fwk/components/containers/tabs/topTabContainer/TopTabContainerFwkProps';
import {Colors, useTheme} from 'hooks/theme';
import {StyleSheet} from 'react-native';

/**
 * @description Framework wrapper for the top tab container
 * @example
 * <TopTabContainerApp
 *  tabItems={[
 *   {
 *    name: 'Tab 1',
 *    label: 'Tab 1',
 *    children: <Text>Tab 1</Text>,
 *   },
 *   {
 *    name: 'Tab 2',
 *    label: 'Tab 2',
 *    children: <Text>Tab 2</Text>,
 *   },
 *  ]}
 * />
 * @dependencies TopTabContainerFwk, useTheme, TextApp,
 * @param tabItems - tab items
 */
const TopTabContainerApp = ({...props}: TopTabContainerFwkProps) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <TopTabContainerFwk
      {...props}
      tabItems={props.tabItems.map(tab => ({
        ...tab,
        labelComponent: focused => (
          <TextApp style={focused ? styles.tabItemLabelFocused : styles.tabItemLabel}>
            {tab.label}
          </TextApp>
        ),
      }))}
      navigatorProps={{
        tabBarItemStyle: [styles.tabContainer, props.navigatorProps?.tabBarItemStyle],
      }}
    />
  );
};

export default TopTabContainerApp;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    tabContainer: {
      backgroundColor: colors.themeColors.backgroundColor,
    },
    tabItemLabel: {
      color: colors.themeColors.fontColor,
    },
    tabItemLabelFocused: {
      color: colors.themeColors.primary,
    },
  });
};
