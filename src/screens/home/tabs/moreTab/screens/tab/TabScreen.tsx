import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import TextApp from 'components/texts/textApp/TextApp';
import TopTabContainerApp from 'components/containers/tabs/topTabContainer/TopTabContainerApp';
import TabScreenContainerApp from 'components/containers/tabs/tabScreenContainer/TabScreenContainerApp';

const TabScreen = () => {
  return (
    <ScreenContainerApp title="Solapa" showBackButton>
      <TopTabContainerApp
        tabItems={[
          {
            name: 'Tab 1',
            label: 'Solapa 1',
            children: (
              <>
                <TabScreenContainerApp>
                  <TextApp>Children de Solapa 1</TextApp>
                </TabScreenContainerApp>
              </>
            ),
          },
          {
            name: 'Tab 2',
            label: 'Solapa 2',
            children: (
              <>
                <TabScreenContainerApp>
                  <TextApp>Children de Solapa 2</TextApp>
                </TabScreenContainerApp>
              </>
            ),
          },
          {
            name: 'Tab 3',
            label: 'Solapa 3',
            children: (
              <>
                <TabScreenContainerApp>
                  <TextApp>Children de Solapa 3</TextApp>
                </TabScreenContainerApp>
              </>
            ),
          },
          {
            name: 'Tab 4',
            label: 'Solapa 4',
            children: (
              <>
                <TabScreenContainerApp>
                  <TextApp>Children de Solapa 4</TextApp>
                </TabScreenContainerApp>
              </>
            ),
          },
        ]}
      />
    </ScreenContainerApp>
  );
};

export default TabScreen;

const styles = StyleSheet.create({});
