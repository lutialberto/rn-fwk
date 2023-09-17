import { useAppStarting } from "hooks/appStarting/useAppStarting";
import MainNavigator from "navigation/MainNavigator";
import SplashScreen from "screens/splash/SplashScreen";

export default function App() {
  const { appReady } = useAppStarting();

  if (!appReady) return <SplashScreen />;

  return <MainNavigator />;
}
