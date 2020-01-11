import React, { FC, useEffect, useRef } from 'react';

interface LoadProps {
  loadAction: Function;
  isLoaded: any;
  cancelLoading?: Function;
  LoadingComponent: FC;
  LoadedComponent: FC;
}

export const Load: FC<LoadProps> = (
  { loadAction, isLoaded, cancelLoading, LoadingComponent, LoadedComponent }
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
    return <LoadedComponent/>;
  }
  return <LoadingComponent/>;
};
