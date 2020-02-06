import React, { FC, useEffect, useRef } from 'react';

interface LoadProps {
  loadAction: Function;
  isLoaded: any;
  cancelLoading?: Function;
  loadingComponent: JSX.Element;
  loadedComponent: JSX.Element;
}

export const Load: FC<LoadProps> = (
  { loadAction, isLoaded, cancelLoading, loadingComponent, loadedComponent }
) => {
  const isLoadingTriggeredRef = useRef(false);

  useEffect(() => {
    if (!isLoaded) {
      loadAction();

      isLoadingTriggeredRef.current = true;
      if (cancelLoading) {

        return () => {
          if (isLoadingTriggeredRef.current) {
            cancelLoading();
          }
        };
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoaded) {
    isLoadingTriggeredRef.current = false;
    return loadedComponent;
  }
  return loadingComponent;
};
