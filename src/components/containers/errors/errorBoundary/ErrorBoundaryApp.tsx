import {StyleSheet} from 'react-native';
import React, {PropsWithChildren, ReactNode} from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import CustomFallback from 'components/containers/errors/errorBoundary/components/CustomFallback';

interface Props extends PropsWithChildren {
  onError?: (error: Error, stackTrace: string) => void;
  FallbackComponent?: (props: {error: Error; resetError: Function}) => ReactNode;
}

/**
 * @description Componente que maneja errores en la aplicación.
 * @dependencies react-native-error-boundary, CustomFallback
 * @param {Props} { FallbackComponent = (props) => <CustomFallback {...props} />, children, onError }
 */
const ErrorBoundaryApp = ({
  FallbackComponent = props => <CustomFallback {...props} />,
  children,
  onError,
}: Props) => {
  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onError={onError}
      children={children as Iterable<ReactNode>}
    />
  );
};

export default ErrorBoundaryApp;

const styles = StyleSheet.create({});
