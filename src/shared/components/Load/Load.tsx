import React, { FC, useEffect, useRef } from 'react';

interface LoadProps {
  loadAction: Function,
  isLoadedSupplier: Function,
  cancelLoading?: Function,
  LoadingComponent: FC,
  LoadedComponent: FC
}

export const Load: FC<LoadProps> = (
  { loadAction, isLoadedSupplier, cancelLoading, LoadingComponent, LoadedComponent }
) => {
  const isLoadingTriggeredRef = useRef(false);

  useEffect(() => {
    if (!isLoadedSupplier()) {
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
  }, []);

  if (isLoadedSupplier()) {
    isLoadingTriggeredRef.current = false;
    return <LoadedComponent/>;
  }
  return <LoadingComponent/>;
};
