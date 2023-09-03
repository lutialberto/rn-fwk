import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

/**
 * @description Hook to get the network status
 * @dependencies @react-native-community/netinfo
 */
export const useNetInfo = () => {
  const [isConnected, setIsconnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsconnected(prev => state.isConnected ?? prev);
    });

    return () => unsubscribe();
  }, []);

  return {isConnected};
};