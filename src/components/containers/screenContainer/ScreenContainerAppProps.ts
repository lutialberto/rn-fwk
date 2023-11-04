import {ScreenContainerFwkProps} from 'fwk/components/containers/screenContainer/ScreenContainerFwkProps';

export interface ScreenContainerAppProps extends ScreenContainerFwkProps {
  title?: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
}
