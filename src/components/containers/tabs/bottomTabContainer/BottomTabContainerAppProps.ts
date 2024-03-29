import {PropsWithChildren} from 'react';

export interface BottomTabContainerAppProps {
  tabItems: TabItemsProps[];
  initialRouteName?: string;
}

interface TabItemsProps extends PropsWithChildren {
  label: string;
  name: string;
}
[];
