import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

/**
 * @description Hook to get the network status
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