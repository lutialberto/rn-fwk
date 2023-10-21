export interface BottomTabContainerAppProps {
  tabItems: {
    label: string;
    name: string;
    children: JSX.Element;
  }[];
  initialRouteName?: string;
}
