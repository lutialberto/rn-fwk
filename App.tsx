import { useAppStarting } from "hooks/appStarting/useAppStarting";
import MainNavigator from "navigation/MainNavigator";
import SplashScreen from "screens/splash/SplashScreen";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  const { appReady } = useAppStarting();

  if (!appReady) return <SplashScreen />;

  return (
    <RootSiblingParent>
      <MainNavigator />
    </RootSiblingParent>
  );
}
