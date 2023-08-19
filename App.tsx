import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import { useAppStarting } from 'hooks/appStarting/useAppStarting';
import { StyleSheet, Text } from 'react-native';

export default function App() {
  const { appReady } = useAppStarting();

  if (!appReady) {
    return <Text>Loading...</Text>
  }

  return (
    <ScreenContainerApp style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </ScreenContainerApp>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
