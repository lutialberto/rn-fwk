export interface BottomTabItemFwkProps {
  name: string;
  children: JSX.Element;
  label: string;
  icon: (color: string) => JSX.Element;
  theme?: 'light' | 'dark';
}
